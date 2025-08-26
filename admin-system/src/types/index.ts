export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: string;
  altImage?: string;
  category: string;
  mercadoLivreUrl?: string;
  available: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'PROFESSOR' | 'STUDENT' | 'COLLABORATOR';
  description?: string;
  picture?: string;
  active: boolean;
  links?: string;
  createdAt: string;
  updatedAt: string;
}

export interface News {
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
