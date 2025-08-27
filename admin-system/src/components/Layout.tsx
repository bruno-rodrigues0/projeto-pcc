import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Newspaper, Package, Users } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Notícias', href: '/news', icon: Newspaper },
    { name: 'Produtos', href: '/products', icon: Package },
    { name: 'Equipe', href: '/team', icon: Users },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Educa Drones Admin</h1>
        </div>
        <nav className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
              >
                <Icon className="nav-icon" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div className="admin-content">
        <header className="admin-header">
          <div className="header-content">
            <h2 className="header-title">Sistema de Administração</h2>
            <div className="header-user">
              <span className="user-text">Educa Drones</span>
              <div className="user-avatar">
                <span>ED</span>
              </div>
            </div>
          </div>
        </header>
        <main className="admin-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
