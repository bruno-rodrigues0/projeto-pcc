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
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **React Router** para navegação

### Backend
- **Node.js** com TypeScript
- **Express.js** como framework web
- **Prisma** como ORM
- **MySQL** como banco de dados

### Sistema de Administração
- **React** com TypeScript
- **TanStack Query** para gerenciamento de estado
- **Tailwind CSS** para UI

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
- Página inicial com seção de notícias dinâmica
- Sistema de notícias completo (listagem e detalhes)
- Integração com backend via API
- Páginas: Home, Sobre, Equipe, Loja, Notícias

### ✅ Backend API
- CRUD completo para notícias, produtos e equipe
- Sistema de publicação e destaques
- Filtros e paginação
- Endpoints RESTful documentados

### ✅ Sistema de Administração
- Dashboard com estatísticas
- Gerenciamento completo de notícias
- Interface moderna e responsiva
- Formulários de criação/edição

## 🗄️ Banco de Dados

Tabelas principais:
- **news** - Notícias do site
- **products** - Produtos disponíveis  
- **team_members** - Membros da equipe

## 🔗 Endpoints da API

- `GET/POST/PUT/DELETE /api/news` - Gestão de notícias
- `GET/POST/PUT/DELETE /api/products` - Gestão de produtos
- `GET/POST/PUT/DELETE /api/team` - Gestão da equipe

## 🌐 URLs dos Sistemas

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001  
- **Admin**: http://localhost:3000

---

**Desenvolvido por**: Bruno Rodrigues  
**Instituição**: Instituto Federal Baiano - Campus Guanambi

Este site foi desenvolvido utilizando as seguintes tecnologias:

- **HTML5**: Estruturação do conteúdo e estrutura do site.
- **CSS3**: Estilo e design responsivo, garantindo que o site funcione em todos os dispositivos.
- **JavaScript (ES6+)**: Interatividade no site, incluindo animações e formulários dinâmicos.
- **React.js**: Biblioteca JavaScript para construir interfaces de usuário dinâmicas e responsivas.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **Tailwind CSS**: Framework de CSS para desenvolvimento rápido de layouts responsivos e estilizados.
- **Node.js**: Ambiente de execução JavaScript no backend (se necessário para APIs ou funcionalidades de servidor).
- **Vite**: Ferramenta de build e empacotamento de front-end de alta performance, usada para acelerar o desenvolvimento e otimizar a construção do site.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.


## Criador

Desenvolver web Gustavo Costa

- **E-mail**: gustavosncosta@gmail.com
- **Portfolio**: [www.gustavocosta.me](https://www.gustavocosta.me/)
- **LinkedIn**: [Gustavo Costa](https://www.linkedin.com/in/gustavosncosta)
- **GitHub**: [OGustavoCosta](https://github.com/OGustavoCosta)

---

**Educa Drones** é um projeto que inspira jovens a explorarem novas possibilidades tecnológicas. Junte-se a nós na transformação do ensino através da inovação!