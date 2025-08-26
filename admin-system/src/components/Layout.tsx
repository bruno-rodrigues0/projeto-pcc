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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 sidebar-nav shadow-2xl">
        <div className="flex h-16 items-center justify-center border-b border-white/20">
          <h1 className="text-xl font-bold text-white text-gradient-white">
            Educa Drones Admin
          </h1>
        </div>
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`nav-item flex items-center gap-3 px-3 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? 'nav-item-active text-white'
                        : 'text-blue-100 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <header className="header-admin sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Sistema de Administração
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 font-medium">
                Educa Drones
              </span>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">ED</span>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          <div className="fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
