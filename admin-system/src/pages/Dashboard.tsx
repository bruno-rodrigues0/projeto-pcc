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
      description: `${news.filter(n => n.status === 'PUBLISHED').length} publicadas`
    },
    {
      title: 'Produtos',
      value: products.length,
      description: `${products.filter(p => p.status === 'ACTIVE').length} ativos`
    },
    {
      title: 'Membros da Equipe',
      value: team.length,
      description: `${team.filter(m => m.role === 'PROFESSOR').length} professores, ${team.filter(m => m.role === 'STUDENT').length} estudantes`
    }
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="text-2xl font-bold text-indigo-600">
                    {stat.value}
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.title}
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {stat.description}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent News */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Notícias Recentes
            </h3>
            <div className="space-y-3">
              {news.slice(0, 5).map((newsItem) => (
                <div key={newsItem.id} className="flex items-center space-x-3">
                  {newsItem.imageUrl && (
                    <img
                      className="h-8 w-8 rounded object-cover"
                      src={newsItem.imageUrl}
                      alt={newsItem.title}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {newsItem.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(newsItem.createdAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    newsItem.status === 'PUBLISHED'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {newsItem.status === 'PUBLISHED' ? 'Publicado' : 'Rascunho'}
                  </span>
                </div>
              ))}
              {news.length === 0 && (
                <p className="text-sm text-gray-500">Nenhuma notícia cadastrada</p>
              )}
            </div>
          </div>
        </div>

        {/* Recent Products */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Produtos Recentes
            </h3>
            <div className="space-y-3">
              {products.slice(0, 5).map((product) => (
                <div key={product.id} className="flex items-center space-x-3">
                  {product.imageUrl && (
                    <img
                      className="h-8 w-8 rounded object-cover"
                      src={product.imageUrl}
                      alt={product.name}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      R$ {product.price.toFixed(2)}
                    </p>
                  </div>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.status === 'ACTIVE'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status === 'ACTIVE' ? 'Ativo' : 'Inativo'}
                  </span>
                </div>
              ))}
              {products.length === 0 && (
                <p className="text-sm text-gray-500">Nenhum produto cadastrado</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
