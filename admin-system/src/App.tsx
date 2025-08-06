import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import NewsManagement from './pages/NewsManagement';
import ProductsManagement from './pages/ProductsManagement';
import TeamManagement from './pages/TeamManagement';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/news" element={<NewsManagement />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/team" element={<TeamManagement />} />
          </Routes>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
