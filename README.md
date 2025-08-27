# Projeto Educa Drones - Sistema Completo

Sistema completo para o projeto Educa Drones, incluindo frontend institucional, backend API e sistema de administração.

## 🚀 Visão Geral

O **Educa Drones** é um projeto educacional desenvolvido pelo Instituto Federal Baiano - Campus Guanambi, que visa integrar a metodologia STEAM (Ciência, Tecnologia, Engenharia, Artes e Matemática) no ensino com drones.

Este repositório contém três sistemas integrados:

1. **Frontend Principal** - Site institucional do Educa Drones
2. **Backend API** - API REST para gerenciar dados
3. **Sistema de Administração** - Interface para gerenciar conteúdo

## 📁 Estrutura do Projeto

```
projeto-pcc/
├── src/                    # Frontend principal (React + Vite)
├── backend/               # Backend API (Node.js + Express + Prisma)
├── admin-system/          # Sistema de administração (React)
├── public/               # Arquivos estáticos
└── README.md
```

## 🛠️ Tecnologias Utilizadas

### Frontend Principal
- **React 19** com TypeScript
- **Vite** como bundler de alta performance
- **Tailwind CSS** para estilização moderna
- **React Router v7** para navegação SPA
- **Lucide React** para ícones consistentes

### Backend
- **Node.js** com TypeScript
- **Express.js** como framework web
- **Prisma** como ORM moderno
- **MySQL** como banco de dados principal
- **Cors & Helmet** para segurança
- **Rate Limiting** para proteção de API

### Sistema de Administração
- **React 19** com TypeScript
- **TanStack Query** para gerenciamento de estado assíncrono
- **React Router DOM** para navegação
- **Tailwind CSS** para UI responsiva
- **Formulários controlados** com validação

## 🚀 Como Executar

### 1. Backend
```bash
cd backend
npm install
# Configure .env com suas credenciais MySQL
npm run db:push
npm run db:seed
npm run dev  # Roda na porta 3001
```

### 2. Frontend Principal
```bash
npm install
npm run dev  # Roda na porta 5173
```

### 3. Sistema de Administração
```bash
cd admin-system
npm install
npm run dev  # Roda na porta 3000
```

## 📊 Funcionalidades Implementadas

### ✅ Frontend Principal
- **Página inicial completa** - Site institucional com navegação responsiva
- **Sistema de notícias dinâmico** - Integração completa com backend
- **Página da equipe atualizada** - Busca dados do banco de dados via API
- **Sistema de roteamento** - React Router para navegação entre páginas
- **Design responsivo** - Tailwind CSS com componentes modernos
- **Páginas funcionais**: Home, Sobre, Equipe, Loja, Notícias, Galeria

### ✅ Backend API
- **CRUD completo** - Notícias, produtos e membros da equipe
- **Sistema de publicação** - Controle de status (publicado/rascunho)
- **Sistema de destaques** - Notícias e produtos em destaque
- **Filtros avançados** - Busca por categoria, status, data
- **Endpoints RESTful** - API documentada e padronizada
- **Banco MySQL** - Prisma ORM para gerenciamento de dados
- **Validação de dados** - Middleware de validação e sanitização

### ✅ Sistema de Administração
- **Dashboard moderno** - Estatísticas em tempo real com TanStack Query
- **Gerenciamento de notícias** - CRUD completo com formulários dedicados
- **Gerenciamento de produtos** - Interface para catálogo de produtos
- **Gerenciamento de equipe** - Controle de membros e suas informações
- **Formulários dedicados** - Páginas específicas para criação de conteúdo
- **Interface responsiva** - Design clean com Tailwind CSS
- **Ações rápidas** - Botões de editar/deletar em todas as listagens
- **Estados de loading** - Feedback visual durante operações

## 🗄️ Banco de Dados

### Estrutura das Tabelas

**news** - Sistema de notícias
- `id`, `title`, `content`, `excerpt`
- `image`, `altImage` - Imagens e textos alternativos
- `published`, `featured` - Controle de publicação e destaque
- `createdAt`, `updatedAt` - Timestamps automáticos

**products** - Catálogo de produtos
- `id`, `title`, `description`, `price`
- `image`, `altImage`, `category`
- `available`, `featured` - Status de disponibilidade e destaque
- `mercadoLivreUrl` - Link para Mercado Livre
- `createdAt`, `updatedAt`

**team_members** - Membros da equipe
- `id`, `name`, `description`, `picture`
- `role` - Enum: PROFESSOR, STUDENT, COLLABORATOR
- `active` - Status ativo/inativo
- `links` - JSON com redes sociais (LinkedIn, Lattes, GitHub)
- `createdAt`, `updatedAt`

### Relacionamentos
- Todas as tabelas possuem soft delete capability
- Campos timestamp automáticos para auditoria
- Validações de integridade via Prisma

## 🔗 Endpoints da API

### Notícias
- `GET /api/news` - Listar notícias (com filtros e paginação)
- `GET /api/news/:id` - Buscar notícia específica
- `POST /api/news` - Criar nova notícia
- `PUT /api/news/:id` - Atualizar notícia existente
- `DELETE /api/news/:id` - Deletar notícia

### Produtos
- `GET /api/products` - Listar produtos (com filtros)
- `GET /api/products/:id` - Buscar produto específico
- `POST /api/products` - Criar novo produto
- `PUT /api/products/:id` - Atualizar produto existente
- `DELETE /api/products/:id` - Deletar produto

### Equipe
- `GET /api/team` - Listar membros da equipe
- `GET /api/team/:id` - Buscar membro específico
- `POST /api/team` - Adicionar novo membro
- `PUT /api/team/:id` - Atualizar dados do membro
- `DELETE /api/team/:id` - Remover membro

### Health Check
- `GET /api/health` - Verificar status da API

## 🌐 URLs dos Sistemas

- **Frontend Principal**: http://localhost:5173
  - Site institucional do Educa Drones
  - Sistema de notícias integrado
  - Página da equipe dinâmica

- **Backend API**: http://localhost:3001
  - API REST completa
  - Health check: http://localhost:3001/api/health
  - Documentação: Endpoints listados acima

- **Sistema de Administração**: http://localhost:3000
  - Dashboard de gerenciamento
  - CRUD de notícias, produtos e equipe
  - Interface administrativa moderna

## 🚀 Scripts Disponíveis

### Raiz do Projeto (Frontend Principal)
```bash
npm run dev       # Servidor de desenvolvimento
npm run build     # Build para produção
npm run preview   # Preview do build
npm run lint      # Verificação de código
```

### Backend
```bash
npm run dev       # Servidor com hot reload
npm run build     # Compilar TypeScript
npm run start     # Rodar versão compilada
npm run db:push   # Aplicar mudanças do schema
npm run db:seed   # Popular banco com dados
npm run db:studio # Interface visual do banco
```

### Sistema de Administração
```bash
npm run dev       # Servidor na porta 3000
npm run build     # Build para produção
npm run preview   # Preview do build
npm run lint      # Verificação de código
```

---

**Desenvolvido por**: Bruno Rodrigues & Gustavo Costa  
**Instituição**: Instituto Federal Baiano - Campus Guanambi  
**Projeto**: Educa Drones - Metodologia STEAM com Drones

### Stack Tecnológica Resumida

- **Frontend**: React 19 + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript + Prisma + MySQL  
- **Admin**: React + TanStack Query + React Router + TypeScript
- **Deploy**: Preparado para Vercel (Frontend) e Railway/Heroku (Backend)

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.


## Criador

Criador: Gustavo Costa

- **E-mail**: gustavosncosta@gmail.com
- **Portfolio**: [www.gustavocosta.me](https://www.gustavocosta.me/)
- **LinkedIn**: [Gustavo Costa](https://www.linkedin.com/in/gustavosncosta)
- **GitHub**: [OGustavoCosta](https://github.com/OGustavoCosta)

Desenvolvedores

- **E-mail**: brunorodriguesmtv0@gmail.com
- **LinkedIn**: [Bruno Rodrigues](https://www.linkedin.com/in/bruno-rodrigues-55b4b92b8)
- **GitHub**: [Bruno Rodrigues](https://github.com/bruno-rodrigues0)

---

- **E-mail**: riancesar.contact@gmail.com
- **GitHub**: [Rian Cesar](https://github.com/riancesaros)

---

- **E-mail**: gabriel.msantos7@hotmail.com
- **GitHub**: [Gabriel Montalvão](https://github.com/msantos7gabriel)

---

**Educa Drones** é um projeto que inspira jovens a explorarem novas possibilidades tecnológicas. Junte-se a nós na transformação do ensino através da inovação!