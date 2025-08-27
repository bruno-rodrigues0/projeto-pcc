import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createNews } from '../api/news';

const CreateNewsPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    image: '',
    altImage: '',
    author: '',
    published: false,
    featured: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const createMutation = useMutation({
    mutationFn: createNews,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
      navigate('/news', { 
        state: { message: 'Notícia criada com sucesso!' }
      });
    },
    onError: (error: Error) => {
      setErrors({ submit: error.message || 'Erro ao criar notícia' });
    },
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) newErrors.title = 'Título é obrigatório';
    if (!formData.content.trim()) newErrors.content = 'Conteúdo é obrigatório';
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Resumo é obrigatório';
    if (!formData.author.trim()) newErrors.author = 'Autor é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      createMutation.mutate(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={() => navigate('/news')}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar para Notícias
              </button>
              <h1 className="text-3xl font-bold text-gray-900 text-gradient">Criar Nova Notícia</h1>
              <p className="text-gray-600 mt-1">Publique uma nova notícia ou mantenha como rascunho</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information Card */}
          <div className="admin-card">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Informações da Notícia
              </h2>
              <p className="text-gray-600 text-sm">Dados principais da notícia</p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Título da Notícia *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.title ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Ex: Novo recorde mundial em competição de drones"
                />
                {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-semibold text-gray-700 mb-2">
                  Resumo *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                    errors.excerpt ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Breve resumo da notícia que aparecerá na listagem..."
                />
                {errors.excerpt && <p className="text-red-600 text-sm mt-1">{errors.excerpt}</p>}
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                  Conteúdo Completo *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={8}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                    errors.content ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Escreva o conteúdo completo da notícia..."
                />
                {errors.content && <p className="text-red-600 text-sm mt-1">{errors.content}</p>}
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-semibold text-gray-700 mb-2">
                  Autor *
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.author ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Nome do autor da notícia"
                />
                {errors.author && <p className="text-red-600 text-sm mt-1">{errors.author}</p>}
              </div>
            </div>
          </div>

          {/* Media Card */}
          <div className="admin-card">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Imagem da Notícia
              </h2>
              <p className="text-gray-600 text-sm">Imagem de destaque para a notícia</p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">
                  URL da Imagem
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>

              <div>
                <label htmlFor="altImage" className="block text-sm font-semibold text-gray-700 mb-2">
                  Texto Alternativo da Imagem
                </label>
                <input
                  type="text"
                  id="altImage"
                  name="altImage"
                  value={formData.altImage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Descrição da imagem para acessibilidade"
                />
              </div>
            </div>
          </div>

          {/* Publication Settings Card */}
          <div className="admin-card">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Configurações de Publicação
              </h2>
              <p className="text-gray-600 text-sm">Status e visibilidade da notícia</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <div>
                  <label htmlFor="published" className="text-sm font-medium text-gray-900">
                    Publicar notícia imediatamente
                  </label>
                  <p className="text-xs text-gray-600">
                    {formData.published ? 'A notícia ficará visível no site' : 'A notícia ficará como rascunho'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                />
                <div>
                  <label htmlFor="featured" className="text-sm font-medium text-gray-900">
                    Notícia em destaque
                  </label>
                  <p className="text-xs text-gray-600">
                    Aparecerá com maior destaque na página de notícias
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {errors.submit && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-red-800 font-medium">{errors.submit}</span>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate('/news')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={createMutation.isPending}
              className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {createMutation.isPending ? (
                <>
                  <div className="loading-spinner sm mr-2"></div>
                  {formData.published ? 'Publicando...' : 'Salvando...'}
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {formData.published ? 'Publicar Notícia' : 'Salvar Rascunho'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewsPage;
