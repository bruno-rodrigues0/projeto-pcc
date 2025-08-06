# 🧪 Guia de Teste do Sistema

Este guia fornece instruções para testar todos os componentes do sistema Educa Drones.

## 🚀 Teste Rápido - Execução de Todos os Sistemas

### 1. Preparação do Ambiente

```bash
# 1. Clone e entre no projeto
git clone <url-do-repositorio>
cd projeto-pcc

# 2. Configure o MySQL
# Certifique-se de que o MySQL está rodando
# Crie o banco de dados: CREATE DATABASE educa_drones;
```

### 2. Iniciando o Backend

```bash
# Terminal 1 - Backend
cd backend

# Instalar dependências
npm install

# Configurar .env (edite com suas credenciais MySQL)
cp .env .env.backup
echo 'DATABASE_URL="mysql://root:password@localhost:3306/educa_drones"
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173,http://localhost:3000' > .env

# Aplicar schema e popular dados
npm run db:push
npm run db:generate
npm run db:seed

# Iniciar servidor (deve rodar na porta 3001)
npm run dev
```

**✅ Teste**: Acesse http://localhost:3001/health - deve retornar `{"status":"OK"}`

### 3. Iniciando o Frontend Principal

```bash
# Terminal 2 - Frontend Principal
cd .. # voltar para raiz do projeto

# Instalar dependências
npm install

# Iniciar servidor (deve rodar na porta 5173)
npm run dev
```

**✅ Teste**: Acesse http://localhost:5173 - deve carregar o site principal

### 4. Iniciando o Sistema de Administração

```bash
# Terminal 3 - Admin System
cd admin-system

# Instalar dependências
npm install

# Iniciar servidor (deve rodar na porta 3000)
npm run dev
```

**✅ Teste**: Acesse http://localhost:3000 - deve carregar o sistema de administração

## 🔍 Testes Funcionais

### Backend API

```bash
# Teste 1: Health check
curl http://localhost:3001/health

# Teste 2: Listar notícias
curl http://localhost:3001/api/news

# Teste 3: Listar produtos
curl http://localhost:3001/api/products

# Teste 4: Listar equipe
curl http://localhost:3001/api/team

# Teste 5: Criar nova notícia
curl -X POST http://localhost:3001/api/news \
  -H "Content-Type: application/json" \
  -d '{"title":"Teste","content":"Conteúdo de teste","published":true}'
```

### Frontend Principal

1. **Página Inicial**: http://localhost:5173
   - ✅ Deve carregar com seção de notícias
   - ✅ Links de navegação funcionando
   - ✅ Botão "Ver todas as notícias" deve funcionar

2. **Página de Notícias**: http://localhost:5173/noticias
   - ✅ Deve listar notícias do backend
   - ✅ Cards clicáveis levando para página individual

3. **Página Individual de Notícia**: http://localhost:5173/noticias/[id]
   - ✅ Deve mostrar conteúdo completo da notícia
   - ✅ Botão "Voltar" funcionando

4. **Outras Páginas**:
   - ✅ http://localhost:5173/sobre
   - ✅ http://localhost:5173/integrantes
   - ✅ http://localhost:5173/loja

### Sistema de Administração

1. **Dashboard**: http://localhost:3000
   - ✅ Deve carregar com estatísticas
   - ✅ Links rápidos funcionando

2. **Gerenciar Notícias**: http://localhost:3000/news
   - ✅ Deve listar notícias do backend
   - ✅ Filtros (Todas/Publicadas/Rascunhos) funcionando
   - ✅ Botões de ação (editar/deletar) funcionando

3. **Criar Notícia**: http://localhost:3000/news/new
   - ✅ Formulário funcionando
   - ✅ Validação de campos obrigatórios
   - ✅ Salvamento no backend

4. **Editar Notícia**: http://localhost:3000/news/edit/[id]
   - ✅ Deve carregar dados existentes
   - ✅ Salvamento de alterações

## 🔧 Solução de Problemas

### Backend não inicia
```bash
# Verificar se MySQL está rodando
sudo service mysql status

# Verificar se o banco existe
mysql -u root -p
> SHOW DATABASES;
> USE educa_drones;
> SHOW TABLES;

# Recriar banco se necessário
> DROP DATABASE educa_drones;
> CREATE DATABASE educa_drones;
> exit

# Reexecutar setup
npm run db:push
npm run db:seed
```

### Frontend não carrega notícias
1. Verificar se backend está rodando: http://localhost:3001/health
2. Verificar se API retorna dados: http://localhost:3001/api/news
3. Verificar console do navegador para erros
4. Verificar arquivo `.env` no frontend com `VITE_API_URL=http://localhost:3001`

### Sistema de administração com erro
1. Verificar se backend está rodando
2. Verificar console do navegador
3. Tentar limpar cache: Ctrl+Shift+R

### Erro de CORS
Se aparecer erro de CORS, verificar se a variável `CORS_ORIGIN` no backend inclui as URLs corretas:
```env
CORS_ORIGIN=http://localhost:5173,http://localhost:3000
```

## 📱 Teste de Responsividade

1. **Desktop**: Resolução 1920x1080
2. **Tablet**: Resolução 768x1024
3. **Mobile**: Resolução 375x667

Teste em cada resolução:
- ✅ Layout se adapta corretamente
- ✅ Navegação mobile funciona
- ✅ Formulários são utilizáveis
- ✅ Imagens se redimensionam

## ⚡ Teste de Performance

### Frontend
```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:5173

# Ou use F12 > Lighthouse no Chrome
```

### Backend
```bash
# Teste de carga simples
npm install -g artillery
echo 'config:
  target: http://localhost:3001
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Health check"
    requests:
      - get:
          url: "/health"' > test.yml

artillery run test.yml
```

## 📝 Checklist Final

### ✅ Backend
- [ ] Servidor rodando na porta 3001
- [ ] Health check respondendo
- [ ] Todas as rotas da API funcionando
- [ ] Banco de dados populado
- [ ] CORS configurado corretamente

### ✅ Frontend Principal
- [ ] Servidor rodando na porta 5173
- [ ] Página inicial carregando
- [ ] Integração com backend funcionando
- [ ] Todas as páginas acessíveis
- [ ] Sistema de notícias completo

### ✅ Sistema de Administração
- [ ] Servidor rodando na porta 3000
- [ ] Dashboard funcionando
- [ ] CRUD de notícias operacional
- [ ] Formulários validando
- [ ] Integração com backend funcionando

### ✅ Integração
- [ ] Frontend consome API corretamente
- [ ] Admin cria/edita dados que aparecem no frontend
- [ ] Sem erros de CORS
- [ ] Performance aceitável

## 🎯 Próximos Testes

1. **Testes Automatizados**: Implementar testes unitários e de integração
2. **Deploy**: Testar em ambiente de produção
3. **SEO**: Verificar meta tags e otimizações
4. **Acessibilidade**: Teste com leitores de tela
5. **Segurança**: Teste de vulnerabilidades

---

**Nota**: Este sistema foi desenvolvido para fins educacionais. Para uso em produção, implemente testes mais robustos e medidas de segurança adicionais.
