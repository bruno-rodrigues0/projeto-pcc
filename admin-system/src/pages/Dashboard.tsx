import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getNews } from '../api/news'
import { getProducts } from '../api/products'
import { getTeamMembers } from '../api/team'

const Dashboard: React.FC = () => {
  const { data: news = [] } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  })

  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const { data: team = [] } = useQuery({
    queryKey: ['team'],
    queryFn: getTeamMembers,
  })

  const stats = [
    {
      title: 'Notícias',
      value: news.length,
      description: `${news.filter(n => n.published).length} publicadas`
    },
    {
      title: 'Produtos',
      value: products.length,
      description: `${products.filter(p => p.available).length} disponíveis`
    },
    {
      title: 'Membros da Equipe',
      value: team.length,
      description: `${team.filter(m => m.role === 'PROFESSOR').length} professores, ${team.filter(m => m.role === 'STUDENT').length} estudantes`
    }
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gradient mb-2">Dashboard</h1>
          <p className="text-gray-600">Visão geral do sistema Educa Drones</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <dt className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </dt>
                <dd className="text-xs text-gray-500">
                  {stat.description}
                </dd>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent News */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Notícias Recentes
            </h3>
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div className="space-y-3">
            {news.slice(0, 5).map((newsItem) => (
              <div key={newsItem.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {newsItem.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(newsItem.createdAt).toLocaleDateString('pt-BR')}
                  </p>
                </div>
                <span className={`badge ${newsItem.published ? 'badge-success' : 'badge-warning'}`}>
                  {newsItem.published ? 'Publicado' : 'Rascunho'}
                </span>
              </div>
            ))}
            {news.length === 0 && (
              <div className="text-center py-8">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <p className="text-sm text-gray-500">Nenhuma notícia cadastrada</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Products */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Produtos Recentes
            </h3>
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="space-y-3">
            {products.slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {product.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    R$ {product.price}
                  </p>
                </div>
                <span className={`badge ${product.available ? 'badge-success' : 'badge-danger'}`}>
                  {product.available ? 'Disponível' : 'Indisponível'}
                </span>
              </div>
            ))}
            {products.length === 0 && (
              <div className="text-center py-8">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <p className="text-sm text-gray-500">Nenhum produto cadastrado</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
