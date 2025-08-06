import { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import NewsCard from '../../components/cards/NewsCard';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  altImage: string;
  createdAt: string;
}

function NewsListPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/news?published=true`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        setNews(data.data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
        <Navigation />
        <main className="main">
          <div className="section py-20 text-center">
            <p>Carregando notícias...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
        <Navigation />
        <main className="main">
          <div className="section py-20 text-center">
            <p className="text-red-500">Erro ao carregar notícias: {error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
      <Navigation />
      <main className="main">
        {/* Hero Section */}
        <section className="main__background text-background-light bg-highlight-light py-14">
          <section className="section section--hero">
            <article className="article flex flex-col justify-center gap-1.5">
              <h1 className="article__title text-4xl font-extrabold">Notícias</h1>
              <p className="article__text text-xl">Fique por dentro das últimas novidades do projeto Educa Drones</p>
            </article>
          </section>
        </section>

        {/* News List */}
        <section className="main__background py-14">
          {news.length === 0 ? (
            <div className="section text-center">
              <p className="text-lg text-gray-600">Nenhuma notícia encontrada.</p>
            </div>
          ) : (
            <div className="section">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                  <NewsCard
                    key={item.id}
                    title={item.title}
                    date={formatDate(item.createdAt)}
                    img={item.image}
                    altImg={item.altImage}
                    link={`/noticias/${item.id}`}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NewsListPage;
