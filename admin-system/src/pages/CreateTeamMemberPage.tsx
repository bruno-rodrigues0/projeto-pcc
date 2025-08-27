import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createTeamMember } from '../api/team';

type Role = 'STUDENT' | 'PROFESSOR' | 'COLLABORATOR';

const CreateTeamMemberPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    name: '',
    role: '' as Role | '',
    description: '',
    picture: '',
    links: '',
    active: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const createMutation = useMutation({
    mutationFn: createTeamMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] });
      navigate('/team', { 
        state: { message: 'Membro da equipe criado com sucesso!' }
      });
    },
    onError: (error: Error) => {
      setErrors({ submit: error.message || 'Erro ao criar membro da equipe' });
    },
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.role) newErrors.role = 'Função é obrigatória';
    if (!formData.description.trim()) newErrors.description = 'Descrição é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      createMutation.mutate(formData as typeof formData & { role: Role });
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

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'STUDENT': return 'Estudante';
      case 'PROFESSOR': return 'Professor';
      case 'COLLABORATOR': return 'Colaborador';
      default: return role;
    }
  };

  const getRoleDescription = (role: string) => {
    switch (role) {
      case 'STUDENT': return 'Estudante membro da equipe';
      case 'PROFESSOR': return 'Professor orientador ou supervisor';
      case 'COLLABORATOR': return 'Colaborador externo ou parceiro';
      default: return '';
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
                onClick={() => navigate('/team')}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar para Equipe
              </button>
              <h1 className="text-3xl font-bold text-gray-900 text-gradient">Adicionar Membro da Equipe</h1>
              <p className="text-gray-600 mt-1">Adicione um novo membro à equipe</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Card */}
          <div className="admin-card">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Informações Pessoais
              </h2>
              <p className="text-gray-600 text-sm">Dados principais do membro</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="lg:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Ex: João Silva Santos"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                  Função na Equipe *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    errors.role ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione uma função</option>
                  <option value="STUDENT">Estudante</option>
                  <option value="PROFESSOR">Professor</option>
                  <option value="COLLABORATOR">Colaborador</option>
                </select>
                {errors.role && <p className="text-red-600 text-sm mt-1">{errors.role}</p>}
                {formData.role && (
                  <p className="text-xs text-gray-500 mt-1">{getRoleDescription(formData.role)}</p>
                )}
              </div>

              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <input
                  type="checkbox"
                  id="active"
                  name="active"
                  checked={formData.active}
                  onChange={handleChange}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <div className="ml-3">
                  <label htmlFor="active" className="text-sm font-medium text-gray-900">
                    Membro ativo
                  </label>
                  <p className="text-xs text-gray-600">
                    {formData.active ? 'Membro ativo na equipe' : 'Membro inativo ou ex-membro'}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Descrição/Biografia *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                    errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Descreva a experiência, formação e contribuições do membro..."
                />
                {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
              </div>
            </div>
          </div>

          {/* Contact and Links Card */}
          <div className="admin-card">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Contato e Redes Sociais
              </h2>
              <p className="text-gray-600 text-sm">Links e informações de contato</p>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="picture" className="block text-sm font-semibold text-gray-700 mb-2">
                  URL da Foto de Perfil
                </label>
                <input
                  type="url"
                  id="picture"
                  name="picture"
                  value={formData.picture}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://exemplo.com/foto.jpg"
                />
                <p className="text-xs text-gray-500 mt-1">Opcional - URL da foto de perfil do membro</p>
              </div>

              <div>
                <label htmlFor="links" className="block text-sm font-semibold text-gray-700 mb-2">
                  Links de Contato
                </label>
                <textarea
                  id="links"
                  name="links"
                  value={formData.links}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="LinkedIn: https://linkedin.com/in/exemplo&#10;GitHub: https://github.com/exemplo&#10;Email: exemplo@email.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Opcional - Links para redes sociais, portfolio, email, etc. (um por linha)
                </p>
              </div>
            </div>
          </div>

          {/* Preview Card */}
          {(formData.name || formData.role || formData.description) && (
            <div className="admin-card bg-blue-50 border-blue-200">
              <div className="border-b border-blue-200 pb-4 mb-6">
                <h2 className="text-xl font-semibold text-blue-900 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Pré-visualização
                </h2>
                <p className="text-blue-700 text-sm">Como aparecerá no site</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    {formData.picture ? (
                      <span className="text-xs text-gray-500">FOTO</span>
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {formData.name || 'Nome do Membro'}
                    </h3>
                    {formData.role && (
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mt-1">
                        {getRoleLabel(formData.role)}
                      </span>
                    )}
                    <p className="text-gray-600 text-sm mt-2">
                      {formData.description || 'Descrição do membro...'}
                    </p>
                    {!formData.active && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mt-2">
                        Inativo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

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
              onClick={() => navigate('/team')}
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
                  Adicionando...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Adicionar Membro
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeamMemberPage;
