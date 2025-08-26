import type { News } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export const getNews = async (): Promise<News[]> => {
  const response = await fetch(`${API_BASE_URL}/news`)
  if (!response.ok) {
    throw new Error('Erro ao carregar notícias')
  }
  const result = await response.json()
  return result.data || result
}

export const getNewsById = async (id: string): Promise<News> => {
  const response = await fetch(`${API_BASE_URL}/news/${id}`)
  if (!response.ok) {
    throw new Error('Erro ao carregar notícia')
  }
  return response.json()
}

export const createNews = async (data: Omit<News, 'id' | 'createdAt' | 'updatedAt'>): Promise<News> => {
  const response = await fetch(`${API_BASE_URL}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Erro ao criar notícia')
  }
  
  return response.json()
}

export const updateNews = async (id: string, data: Partial<News>): Promise<News> => {
  const response = await fetch(`${API_BASE_URL}/news/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  if (!response.ok) {
    throw new Error('Erro ao atualizar notícia')
  }
  
  return response.json()
}

export const deleteNews = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/news/${id}`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw new Error('Erro ao deletar notícia')
  }
}
