import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';
import { getNews } from '../api/news';
import { getTeamMembers } from '../api/team';
import type { Product, News } from '../types';

const SimpleDashboard: React.FC = () => {
  const { data: products = [], isLoading: productsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const { data: news = [], isLoading: newsLoading } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  const { data: team = [], isLoading: teamLoading } = useQuery({
    queryKey: ['team'],
    queryFn: getTeamMembers,
  });

  if (productsLoading || newsLoading || teamLoading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <div className="flex items-center justify-center py-12">
          <div className="loading-spinner"></div>
          <span className="ml-3 text-gray-600">Carregando dados...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Dashboard</h1>
          <p className="text-gray-600">Visão geral do sistema Educa Drones</p>
        </div>
        <div className="glass-effect rounded-xl px-4 py-2">
          <span className="text-sm font-medium text-gray-700">
            {new Date().toLocaleDateString('pt-BR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stat-card">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Produtos</h3>
            <p className="text-3xl font-bold text-blue-600">{products.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total de produtos</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Notícias</h3>
            <p className="text-3xl font-bold text-green-600">{news.length}</p>
            <p className="text-sm text-gray-500 mt-1">Total de notícias</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">Equipe</h3>
            <p className="text-3xl font-bold text-purple-600">{team.length}</p>
            <p className="text-sm text-gray-500 mt-1">Membros da equipe</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="admin-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Produtos Recentes</h2>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {products.length} total
            </span>
          </div>
          <div className="space-y-4">
            {products.slice(0, 5).map((product: Product) => (
              <div key={product.id} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-gray-900">R$ {product.price}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.available ? 'Disponível' : 'Indisponível'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {products.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Nenhum produto encontrado</p>
            </div>
          )}
        </div>

        <div className="admin-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Notícias Recentes</h2>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              {news.length} total
            </span>
          </div>
          <div className="space-y-4">
            {news.slice(0, 5).map((newsItem: News) => (
              <div key={newsItem.id} className="p-4 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50/50 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{newsItem.title}</h3>
                  <div className="flex space-x-2 ml-4">
                    {newsItem.published && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Publicada
                      </span>
                    )}
                    {newsItem.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Destaque
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">{newsItem.content}</p>
                <p className="text-xs text-gray-500">
                  {new Date(newsItem.createdAt).toLocaleDateString('pt-BR')}
                </p>
              </div>
            ))}
          </div>
          {news.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>Nenhuma notícia encontrada</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleDashboard;
