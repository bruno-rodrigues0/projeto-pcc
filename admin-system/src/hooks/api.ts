const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  image?: string;
  altImage?: string;
  published: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  altImage?: string;
  category: string;
  available: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  description?: string;
  picture?: string;
  role: 'PROFESSOR' | 'STUDENT' | 'COLLABORATOR';
  active: boolean;
  links?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

class APIClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    };

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // News API
  async getNews(params?: Record<string, string>): Promise<{ data: NewsItem[]; total: number }> {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request(`/api/news${queryString}`);
  }

  async getNewsById(id: string): Promise<NewsItem> {
    return this.request(`/api/news/${id}`);
  }

  async createNews(data: Partial<NewsItem>): Promise<NewsItem> {
    return this.request('/api/news', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateNews(id: string, data: Partial<NewsItem>): Promise<NewsItem> {
    return this.request(`/api/news/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteNews(id: string): Promise<void> {
    return this.request(`/api/news/${id}`, {
      method: 'DELETE',
    });
  }

  // Products API
  async getProducts(params?: Record<string, string>): Promise<{ data: ProductItem[]; total: number }> {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request(`/api/products${queryString}`);
  }

  async getProductById(id: string): Promise<ProductItem> {
    return this.request(`/api/products/${id}`);
  }

  async createProduct(data: Partial<ProductItem>): Promise<ProductItem> {
    return this.request('/api/products', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProduct(id: string, data: Partial<ProductItem>): Promise<ProductItem> {
    return this.request(`/api/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteProduct(id: string): Promise<void> {
    return this.request(`/api/products/${id}`, {
      method: 'DELETE',
    });
  }

  // Team API
  async getTeamMembers(params?: Record<string, string>): Promise<{ data: TeamMember[] }> {
    const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
    return this.request(`/api/team${queryString}`);
  }

  async getTeamMemberById(id: string): Promise<TeamMember> {
    return this.request(`/api/team/${id}`);
  }

  async createTeamMember(data: Partial<TeamMember>): Promise<TeamMember> {
    return this.request('/api/team', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember> {
    return this.request(`/api/team/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async deleteTeamMember(id: string): Promise<void> {
    return this.request(`/api/team/${id}`, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new APIClient();
