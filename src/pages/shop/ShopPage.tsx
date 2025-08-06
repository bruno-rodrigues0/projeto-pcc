import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ProductCard from "../../components/cards/ProductCard";

interface Product {
    id: string;
    title: string;
    description: string;
    price: number | string;
    image?: string;
    altImage?: string;
    category: string;
    mercadoLivreUrl?: string;
    available: boolean;
}

function ShopPage(){
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/products`);
                
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.data || data); // Usar data.data se existir, senão usar data
                } else {
                    // Fallback para dados estáticos em caso de erro
                    setProducts(fallbackProducts);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts(fallbackProducts);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Dados de fallback (produtos estáticos originais)
    const fallbackProducts: Product[] = [
        {
            id: "1",
            title: "Kit Montagem Drone DIY",
            description: "Kit completo para montagem de drone educacional. Inclui todas as peças necessárias, manual de instruções e acesso a plataforma online de suporte.",
            price: 899.00,
            image: "/imagens/pictures/formulaDrones/montagem.jpg",
            altImage: "Kit de montagem de drone",
            category: "Kits",
            mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-3089147842-kit-drone-montagem-educacional-completo-diy-para-escolas-_JM",
            available: true
        },
        {
            id: "2",
            title: "Kit Drone Racer FPV",
            description: "Kit especializado para corridas de drone com visão em primeira pessoa. Inclui óculos FPV e transmissor de vídeo.",
            price: 1299.00,
            image: "/imagens/pictures/formulaDrones/todos-banner.jpg",
            altImage: "Kit drone racer FPV",
            category: "Kits",
            mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-2849137456-drone-fpv-racing-kit-completo-camera-oculos-controle-_JM",
            available: true
        },
        {
            id: "3",
            title: "Controlador Programável",
            description: "Controlador avançado com interface de programação visual. Permite programar missões autônomas e controlar múltiplos sensores.",
            price: 450.00,
            image: "/imagens/pictures/formulaDrone.png",
            altImage: "Controlador programável para drones",
            category: "Acessórios",
            mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-3156789234-controlador-voo-programavel-pixhawk-missoes-autonomas-_JM",
            available: true
        },
        {
            id: "4",
            title: "Simulador de Voo Virtual",
            description: "Software de simulação realística para treinar pilotagem sem riscos. Compatible com diversos modelos de controle remoto.",
            price: 199.00,
            image: "/imagens/pictures/preIMAV-testes.png",
            altImage: "Simulador de voo para drones",
            category: "Software",
            mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-3201567890-simulador-voo-drone-realtime-treinamento-pilotagem-pc-_JM",
            available: true
        }
    ];

    const categories = ["Todos", "Kits", "Acessórios", "Software"];

    // Função para contar produtos por categoria
    const getProductCount = (category: string) => {
        if (!Array.isArray(products)) return 0;
        if (category === "Todos") return products.length;
        return products.filter(product => product.category === category).length;
    };

    // Filtrar produtos baseado na categoria selecionada
    const filteredProducts = Array.isArray(products) 
        ? (selectedCategory === "Todos" 
            ? products 
            : products.filter(product => product.category === selectedCategory))
        : [];

    // Função para mudar categoria
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    return(
         <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
            <Navigation/>
            <main className="main">
                {/* Hero */}
                <div className="main__background bg-highlight-light text-background-light">
                    <section className="section section--hero py-15">
                        <article className="article flex flex-col justify-center gap-1.5">
                            <h1 className="article__title text-4xl font-extrabold">Loja Educa Drones</h1>
                            <p className="article__text text-xl"> Descubra nossa seleção de drones educacionais, kits de montagem e cursos especializados</p>
                        </article>
                    </section>
                </div>

                {/* Categories Filter */}
                <div className="main__background bg-gray-50">
                    <section className="section py-8">
                        <div className="categories-filter">
                            <h2 className="text-2xl poppins-bold mb-6 text-center">Categorias</h2>
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {categories.map((category, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`button text-sm px-6 py-2 max-w-none w-auto transition-colors ${
                                            selectedCategory === category 
                                                ? 'button--cta' 
                                                : 'border border-highlight-light text-highlight-light hover:bg-highlight-light hover:text-white'
                                        }`}
                                    >
                                        {category} ({getProductCount(category)})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Products Grid */}
                <div className="main__background">
                    <section className="section py-12">
                        {loading ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">Carregando produtos...</p>
                            </div>
                        ) : (
                            <div className="products-container">
                            <h2 className="text-3xl poppins-bold mb-2 text-center">
                                {selectedCategory === "Todos" ? "Nossos Produtos" : `Produtos - ${selectedCategory}`}
                            </h2>
                            <p className="text-center text-gray-600 mb-8">
                                {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
                            </p>
                            <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            title={product.title}
                                            description={product.description}
                                            price={parseFloat(product.price.toString()).toFixed(2).replace('.', ',')}
                                            image={product.image || '/imagens/pictures/formulaDrone.png'}
                                            altImage={product.altImage || product.title}
                                            category={product.category}
                                            link={product.mercadoLivreUrl || '#'}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-12">
                                        <p className="text-gray-500 text-lg">
                                            Nenhum produto encontrado nesta categoria.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        )}
                    </section>
                </div>

                {/* Call to Action */}
                <div className="main__background bg-highlight-light">
                    <section className="section py-16 text-center text-white">
                        <div className="cta-container max-w-4xl mx-auto">
                            <h2 className="text-3xl poppins-bold mb-4">
                                Transforme o Aprendizado na sua Escola
                            </h2>
                            <p className="text-lg poppins-medium mb-8">
                                Entre em contato conosco para conhecer nossos planos educacionais personalizados
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <a 
                                    href="#contato" 
                                    className="button bg-white text-highlight-light hover:bg-gray-100 border-white px-8 py-3 max-w-none w-auto"
                                >
                                    Entre em Contato
                                </a>
                                <a 
                                    href="/sobre" 
                                    className="button border-white text-white hover:bg-white hover:text-highlight-light px-8 py-3 max-w-none w-auto"
                                >
                                    Saiba Mais
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Newsletter */}
                <div className="main__background bg-gray-100">
                    <section className="section py-12">
                        <div className="newsletter-container max-w-2xl mx-auto text-center">
                            <h3 className="text-2xl poppins-bold mb-4">
                                Receba Novidades e Ofertas
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Cadastre-se para receber informações sobre novos produtos e promoções exclusivas
                            </p>
                            <form className="flex flex-col md:flex-row gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Seu melhor e-mail"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-highlight-light"
                                />
                                <button 
                                    type="submit"
                                    className="button button--cta px-8 py-3 max-w-none w-auto md:w-auto"
                                >
                                    Cadastrar
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
         </div>
    )
}

export default ShopPage;