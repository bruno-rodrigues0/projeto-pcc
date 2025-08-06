import type { TeamMember } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const response = await fetch(`${API_BASE_URL}/team`)
  if (!response.ok) {
    throw new Error('Erro ao carregar membros da equipe')
  }
  return response.json()
}

export const getTeamMember = async (id: number): Promise<TeamMember> => {
  const response = await fetch(`${API_BASE_URL}/team/${id}`)
  if (!response.ok) {
    throw new Error('Erro ao carregar membro da equipe')
  }
  return response.json()
}

export const createTeamMember = async (data: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>): Promise<TeamMember> => {
  const response = await fetch(`${API_BASE_URL}/team`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Erro ao criar membro da equipe')
  }
  
  return response.json()
}

export const updateTeamMember = async (id: number, data: Partial<TeamMember>): Promise<TeamMember> => {
  const response = await fetch(`${API_BASE_URL}/team/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Erro ao atualizar membro da equipe')
  }
  
  return response.json()
}

export const deleteTeamMember = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/team/${id}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error('Erro ao deletar membro da equipe')
  }
}
