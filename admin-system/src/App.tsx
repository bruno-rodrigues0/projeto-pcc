import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import SimpleDashboard from './pages/SimpleDashboard';
import ProductsPageCRUD from './pages/ProductsPageCRUD';
import NewsPage from './pages/NewsPage';
import TeamPageCRUD from './pages/TeamPageCRUD';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<SimpleDashboard />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/products" element={<ProductsPageCRUD />} />
            <Route path="/team" element={<TeamPageCRUD />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
