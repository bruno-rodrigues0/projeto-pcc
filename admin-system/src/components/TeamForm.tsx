import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { TeamMember } from '../types'
import { createTeamMember, updateTeamMember } from '../api/team'

interface TeamFormProps {
  member?: TeamMember;
  onCancel: () => void;
  onSuccess: () => void;
}

const TeamForm: React.FC<TeamFormProps> = ({ member, onCancel, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: member?.name || '',
    role: member?.role || 'STUDENT',
    description: member?.description || '',
    picture: member?.picture || '',
    links: member?.links || ''
  })

  const queryClient = useQueryClient()
  
  const mutation = useMutation({
    mutationFn: (data: any) => {
      if (member) {
        return updateTeamMember(member.id, data)
      } else {
        return createTeamMember(data as Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] })
      onSuccess()
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {member ? 'Editar Membro' : 'Novo Membro'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Função
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="PROFESSOR">Professor</option>
              <option value="STUDENT">Estudante</option>
              <option value="COLLABORATOR">Colaborador</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              URL da Foto
            </label>
            <input
              type="url"
              name="picture"
              value={formData.picture}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Links (JSON)
            </label>
            <textarea
              name="links"
              value={formData.links}
              onChange={handleChange}
              rows={3}
              placeholder='{"linkedin": "url", "github": "url", "lattes": "url"}'
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={mutation.isPending}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {mutation.isPending ? 'Salvando...' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeamForm
