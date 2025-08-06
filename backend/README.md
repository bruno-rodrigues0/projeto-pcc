# Educa Drones Backend

Backend API para o sistema Educa Drones, desenvolvido com Node.js, Express, TypeScript, Prisma e MySQL.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Tipagem estática
- **Prisma** - ORM para banco de dados
- **MySQL** - Banco de dados relacional

## 📋 Pré-requisitos

- Node.js 18+
- MySQL 8+
- npm ou yarn

## 🔧 Instalação

1. **Instalar dependências:**
   ```bash
   cd backend
   npm install
   ```

2. **Configurar banco de dados:**
   - Crie um banco MySQL chamado `educa_drones`
   - Configure a string de conexão no arquivo `.env`:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/educa_drones"
   ```

3. **Executar migrações:**
   ```bash
   npm run db:push
   ```

4. **Gerar cliente Prisma:**
   ```bash
   npm run db:generate
   ```

5. **Popular banco com dados iniciais:**
   ```bash
   npm run db:seed
   ```

## 🏃‍♂️ Executando o projeto

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm run build
npm start
```

## 📊 Prisma Studio
Para visualizar e editar dados do banco:
```bash
npm run db:studio
```

## 🛣️ Rotas da API

### Notícias (`/api/news`)
- `GET /` - Listar todas as notícias
  - Query params: `published`, `featured`, `limit`, `offset`
- `GET /:id` - Obter notícia por ID
- `POST /` - Criar nova notícia
- `PUT /:id` - Atualizar notícia
- `DELETE /:id` - Deletar notícia

### Produtos (`/api/products`)
- `GET /` - Listar todos os produtos
  - Query params: `available`, `featured`, `category`, `limit`, `offset`
- `GET /:id` - Obter produto por ID
- `POST /` - Criar novo produto
- `PUT /:id` - Atualizar produto
- `DELETE /:id` - Deletar produto

### Equipe (`/api/team`)
- `GET /` - Listar todos os membros
  - Query params: `role`, `active`
- `GET /:id` - Obter membro por ID
- `POST /` - Criar novo membro
- `PUT /:id` - Atualizar membro
- `DELETE /:id` - Deletar membro

## 🗄️ Estrutura do Banco de Dados

### News (Notícias)
- `id` - UUID (PK)
- `title` - Título da notícia
- `content` - Conteúdo completo
- `excerpt` - Resumo
- `image` - URL da imagem
- `altImage` - Texto alternativo da imagem
- `published` - Se está publicada
- `featured` - Se é destaque
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

### Products (Produtos)
- `id` - UUID (PK)
- `title` - Nome do produto
- `description` - Descrição
- `price` - Preço
- `image` - URL da imagem
- `altImage` - Texto alternativo da imagem
- `category` - Categoria
- `available` - Se está disponível
- `featured` - Se é destaque
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

### TeamMember (Membros da Equipe)
- `id` - UUID (PK)
- `name` - Nome
- `description` - Descrição/Bio
- `picture` - URL da foto
- `role` - Função (PROFESSOR, STUDENT, COLLABORATOR)
- `active` - Se está ativo
- `links` - Links (JSON)
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Compila TypeScript
- `npm start` - Executa versão compilada
- `npm run db:generate` - Gera cliente Prisma
- `npm run db:push` - Sincroniza schema com banco
- `npm run db:migrate` - Executa migrações
- `npm run db:studio` - Abre Prisma Studio
- `npm run db:seed` - Popula banco com dados iniciais

## 🌐 CORS

O CORS está configurado para aceitar requisições de:
- `http://localhost:5173` (Frontend React/Vite)
- `http://localhost:3000` (Sistema de administração)

Para modificar, edite a variável `CORS_ORIGIN` no arquivo `.env`.

## 🛡️ Segurança

- **Helmet** - Headers de segurança
- **Rate Limiting** - Limitação de requisições
- **CORS** - Controle de origem das requisições
