import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ProductCard from "../../components/cards/ProductCard";

function ShopPage(){
    const products = [
        {
            id: 1,
            title: "Kit Montagem Drone DIY",
            description: "Kit completo para montagem de drone educacional. Inclui todas as peças necessárias, manual de instruções e acesso a plataforma online de suporte.",
            price: "899,00",
            image: "/imagens/pictures/formulaDrones/montagem.jpg",
            altImage: "Kit de montagem de drone",
            category: "Kits",
            link: "#"
        },
        {
            id: 2,
            title: "Kit Montagem Drone DIY",
            description: "Kit completo para montagem de drone educacional. Inclui todas as peças necessárias, manual de instruções e acesso a plataforma online de suporte.",
            price: "899,00",
            image: "/imagens/pictures/formulaDrones/montagem.jpg",
            altImage: "Kit de montagem de drone",
            category: "Kits",
            link: "#"
        },
        {
            id: 3,
            title: "Controlador Programável",
            description: "Controlador avançado com interface de programação visual. Permite programar missões autônomas e controlar múltiplos sensores.",
            price: "450,00",
            image: "/imagens/pictures/formulaDrone.png",
            altImage: "Controlador programável para drones",
            category: "Acessórios",
            link: "#"
        },
        {
            id: 4,
            title: "Simulador de Voo Virtual",
            description: "Software de simulação realística para treinar pilotagem sem riscos. Compatible com diversos modelos de controle remoto.",
            price: "199,00",
            image: "/imagens/pictures/preIMAV-testes.png",
            altImage: "Simulador de voo para drones",
            category: "Software",
            link: "#"
        }
    ];

    const categories = ["Todos", "Kits", "Acessórios", "Software"];

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
                                        className="button button--cta text-sm px-6 py-2 max-w-none w-auto"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Products Grid */}
                <div className="main__background">
                    <section className="section py-12">
                        <div className="products-container">
                            <h2 className="text-3xl poppins-bold mb-8 text-center">Nossos Produtos</h2>
                            <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                        image={product.image}
                                        altImage={product.altImage}
                                        category={product.category}
                                        link={product.link}
                                    />
                                ))}
                            </div>
                        </div>
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