import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  altImage: string;
  createdAt: string;
  updatedAt: string;
}

function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchNews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/news/${id}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Notícia não encontrada');
          }
          throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

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
            <p>Carregando notícia...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
        <Navigation />
        <main className="main">
          <div className="section py-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Notícia não encontrada</h1>
            <p className="text-gray-600 mb-4">{error || 'A notícia solicitada não foi encontrada.'}</p>
            <a href="/noticias" className="text-highlight-light hover:underline">
              ← Voltar para todas as notícias
            </a>
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
              <div className="mb-4">
                <a href="/noticias" className="text-background-light/80 hover:text-background-light">
                  ← Voltar para notícias
                </a>
              </div>
              <h1 className="article__title text-4xl font-extrabold">{news.title}</h1>
              <div className="flex items-center gap-4 text-background-light/90">
                <p>{formatDate(news.createdAt)}</p>
                {news.updatedAt !== news.createdAt && (
                  <p className="text-sm">Atualizado em {formatDate(news.updatedAt)}</p>
                )}
              </div>
            </article>
          </section>
        </section>

        {/* News Content */}
        <section className="main__background py-14">
          <article className="section max-w-4xl mx-auto">
            {news.image && (
              <figure className="mb-8">
                <img 
                  src={news.image} 
                  alt={news.altImage || news.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
                {news.altImage && (
                  <figcaption className="text-sm text-gray-600 mt-2 text-center">
                    {news.altImage}
                  </figcaption>
                )}
              </figure>
            )}

            {news.excerpt && (
              <div className="mb-8">
                <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                  {news.excerpt}
                </p>
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              {news.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                )
              ))}
            </div>

            {/* Share and Back */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <a 
                  href="/noticias" 
                  className="inline-flex items-center text-highlight-light hover:underline font-medium"
                >
                  ← Voltar para todas as notícias
                </a>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: news.title,
                          text: news.excerpt || news.title,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copiado para a área de transferência!');
                      }
                    }}
                    className="px-4 py-2 bg-highlight-light text-white rounded hover:bg-highlight-light/90 transition-colors"
                  >
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NewsDetailPage;
