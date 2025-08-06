# Backend - Educa Drones API

API REST para o sistema Educa Drones construída com Node.js, Express, TypeScript, Prisma e MySQL.

## 🚀 Tecnologias

- **Node.js** 18+
- **Express.js** - Framework web
- **TypeScript** - Tipagem estática
- **Prisma** - ORM e query builder
- **MySQL** - Banco de dados
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security headers
- **Rate Limiting** - Proteção contra abuse

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Configurar banco de dados
npm run db:push

# Gerar cliente Prisma
npm run db:generate

# Popular banco com dados iniciais
npm run db:seed

# Iniciar servidor de desenvolvimento
npm run dev
```

## 🔧 Configuração

### Variáveis de Ambiente (.env)

```env
DATABASE_URL="mysql://username:password@localhost:3306/educa_drones"
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

## 📊 Modelos de Dados

### News, Products, TeamMember

Veja o arquivo `prisma/schema.prisma` para detalhes completos dos modelos.

## 🛠️ Endpoints da API

### Notícias
- `GET /api/news` - Listar notícias
- `GET /api/news/:id` - Obter notícia específica
- `POST /api/news` - Criar notícia
- `PUT /api/news/:id` - Atualizar notícia
- `DELETE /api/news/:id` - Deletar notícia

### Produtos e Equipe
Endpoints similares para `/api/products` e `/api/team`.

## 📝 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build para produção
npm run db:push      # Aplicar schema
npm run db:seed      # Popular dados
npm run db:studio    # Abrir Prisma Studio
```
