import { useState, useEffect } from 'react';
import NewsCard from "../../components/cards/NewsCard"

interface NewsItem {
    id: string;
    title: string;
    createdAt: string;
    image: string;
    altImage: string;
}

function HomeNews(){
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedNews = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/news?published=true&featured=true&limit=4`);
                
                if (response.ok) {
                    const data = await response.json();
                    setNews(data.data || []);
                }
            } catch (error) {
                console.error('Error fetching featured news:', error);
                // Em caso de erro, mantém array vazio
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedNews();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Fallback data em caso de erro na API
    const fallbackNews = [
        {
            id: '1',
            title: 'ObaDrones: 1 Olimpíada Baiana de Drones',
            createdAt: '2025-05-06T00:00:00Z',
            image: 'imagens/news/OBaDrones.png',
            altImage: 'OBaDrones',
        },
        {
            id: '2',
            title: 'CROS 2025: Participação na 1 Conferência da Sociedade Brasileira de Robótica',
            createdAt: '2025-05-03T00:00:00Z',
            image: 'imagens/news/cros.png',
            altImage: 'CROS 2025',
        },
        {
            id: '3',
            title: 'Drones IFSC 2024: Equipe Carcará Conquista o 3 lugar',
            createdAt: '2024-11-20T00:00:00Z',
            image: 'imagens/news/IFSC.png',
            altImage: 'IFSC 2024',
        },
        {
            id: '4',
            title: 'IMAV 2024: Participação na International Micro Air Vehiecle Conference and Competition',
            createdAt: '2024-11-02T00:00:00Z',
            image: 'imagens/news/IMAV.png',
            altImage: 'IMAV 2024',
        },
    ];

    const displayNews = news.length > 0 ? news : fallbackNews;

    return(
        <section className="section py-12 grid gap-5">
            <header className="section__header">
                <h3 className="section__caption poppins-semibold text-highlight-light">Em Destaque</h3>
                <h2 className="section__title text-4xl poppins-bold">Notícias e Eventos</h2>
            </header>
            
            {loading ? (
                <div className="text-center py-8">
                    <p>Carregando notícias...</p>
                </div>
            ) : (
                <div className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-4 gap-2.5 gap-y-5">
                    {displayNews.map((item) => (
                        <NewsCard 
                            key={item.id} 
                            title={item.title} 
                            link={`/noticias/${item.id}`} 
                            img={item.image} 
                            altImg={item.altImage} 
                            date={formatDate(item.createdAt)}
                        />
                    ))}
                </div>
            )}
            
            <div className="text-center mt-6">
                <a 
                    href="/noticias" 
                    className="inline-block px-6 py-3 bg-highlight-light text-white rounded hover:bg-highlight-light/90 transition-colors"
                >
                    Ver todas as notícias
                </a>
            </div>
        </section>
    )
}

export default HomeNews