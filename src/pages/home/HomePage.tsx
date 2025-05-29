/* Components */
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import CTAButton from "../../components/buttons/CTAButton"
import HomeNews from "./HomeNews"
import HomeFaQ from "./HomeFaQ"

function HomePage(){
    return(
        <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
            <Navigation type={'fixed'}/>
            <main className="main">
                {/* Hero */}
                <div className="main__background bg-banner">
                    <section className="section section--hero w-full min-h-[600px] flex items-center justify-start text-background-light">
                        <div className="hero max-w-[500px] grid gap-2">
                            <h2 className="hero__caption uppercase poppins-medium">Educa Drones</h2>
                            <h1 className="hero__title poppins-extrabold text-5xl">Onde o ensino se torna inovação</h1>
                            <p className="hero__text poppins-medium text-xl">Seja parte dessa transformação! Convide sua escola a explorar o mundo dos drones com o Educa Drones. </p>
                        </div>
                    </section>
                </div>

                {/* O Projeto */}
                <div className="main__background">
                    <section className="section pt-8 md:py-8 grid md:grid-cols-2 gap-10 justify-items-center items-center">
                        <article className="article grid gap-5">
                            <header className="article__header">
                                <h3 className="article__caption poppins-semibold text-highlight-light">Educação viva!</h3>
                                <h2 className="article__text text-4xl poppins-bold">O projeto</h2>
                            </header>
                            <div className="article__content grid gap-3">
                                <p>O Educa Drones é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores. Através da metodologia STEAM, o projeto integra Ciência, Tecnologia, Engenharia, Artes e Matemática em atividades práticas e dinâmicas.</p>

                                <p>O projeto não só aproxima os alunos das tecnologias do futuro, mas também os prepara para os desafios de um mercado cada vez mais digital e interconectado. Ao promover a construção e operação de drones, o projeto estimula a criatividade, a resolução de problemas e a colaboração, impactando positivamente a forma como os jovens aprendem e se conectam com a inovação tecnológica.</p>
                            </div>
                            <div className="article__buttons">
                                <CTAButton text={"Saiba Mais"} link={"/sobre"} target={""}/>
                            </div>
                        </article>
                        <div className="section__figures relative max-w-lg md:translate-y-6">
                            <figure className="figure w-[70%] aspect-square border-4 rounded-xl border-background-light overflow-hidden">
                                <img className="w-full h-full object-cover" src="imagens\pictures\MCD-petrolina.jpg" alt="petrolina" />
                                <figcaption></figcaption>
                            </figure>
                            <figure className="figure w-[40%] border-4 rounded-xl border-background-light overflow-hidden aspect-3/4 absolute top-10 right-2">
                                <img className="w-full h-full object-cover" src="imagens\pictures\preIMAV-testes.png" alt="" />
                                <figcaption></figcaption>
                            </figure>
                            <figure className="figure w-[55%] border-4 rounded-xl border-background-light overflow-hidden aspect-5/3 translate-x-10 -translate-y-20">
                                <img className="w-full h-full object-cover" src="imagens\pictures\formulaDrone.png" alt="" />
                                <figcaption></figcaption>
                            </figure>
                        </div>
                    </section>
                </div>

                {/* Fun Fact Card */}
                <div className="main__background">
                    <section className="section py-8">
                        <article className="card card--funfact bg-highlight-light text-background-light py-8 px-10 rounded-lg grid gap-2.5">
                            <h3 className="card__title poppins-bold">Você conhece a abordagem STEAM?</h3>
                            <div className="card__content grid gap-2.5">
                                <p>A abordagem STEAM (Ciência, Tecnologia, Engenharia, Artes e Matemática) está transformando a forma como o conhecimento é explorado nas salas de aula. Mas o que torna essa metodologia tão especial? Ao integrar essas cinco disciplinas de maneira prática e criativa, os alunos não apenas aprendem conceitos, mas os aplicam em projetos reais, como a construção de drones.</p>
                                <p>Imagine combinar a precisão da matemática, a criatividade das artes e a inovação tecnológica em um único projeto. O STEAM desafia os estudantes a pensarem fora da caixa, incentivando a curiosidade e o desenvolvimento de habilidades essenciais para o futuro.</p>    
                            </div>
                        </article>
                    </section>
                </div>

                {/* Parceiro e Colaboradores */}
                <div className="main__background bg-background-dark">
                    <section className="section grid gap-3 pt-4 pb-8">
                        <h2 className="section__title text-center text-light">Parceiros e Colaboradores</h2>
                        <div className="section__tracker flex xmd:gap-25 gap-10 justify-center  items-center">
                            <a href="">
                                <img className="backdrop-saturate-0" src="imagens\apoiadores\prefeituraGuanambi.png" alt="" />
                            </a>

                            <a href="">
                                <img className="backdrop-saturate-0" src="imagens\apoiadores\ifbaiano.png" alt="" />
                            </a>
                            
                            <a href="">
                                <img className="backdrop-saturate-0" src="imagens\apoiadores\ceteia.png" alt="" />
                            </a>
                        </div>
                    </section>
                </div>

                {/* Notícias e Eventos*/}
                <div className="main__background">
                    <HomeNews/>
                </div>

                {/* Equipes Filiadas */}
                <div className="main__background bg-background-dark">
                    <section className="section grid gap-3 pt-4 pb-8">
                        <h2 className="section__title text-center text-light">Equipes Filiadas</h2>
                        <div className="section__tracker flex xmd:gap-25 gap-12 justify-center">
                            <a href="">
                                <img className="backdrop-saturate-0" src="imagens\equipes\carcara-gray.png" alt="" />
                            </a>

                            <a href="">
                                <img className="backdrop-saturate-0" src="imagens/equipes/if-copter.png" alt="" />
                            </a>
                            
                            <a href="">
                                <img className="backdrop-saturate-0" src="imagens/equipes/drones-guanambi-gray.png" alt="" />
                            </a>
                        </div>
                    </section>
                </div>

                {/* FaQ */}
                <div className="main__background">
                    <HomeFaQ/>
                </div>

                {/* Localização */}
                <div className="main__background bg-if-banner">
                    <section className="section flex flex-col md:flex-row gap-6 md:gap-12 py-8 pb-14">
                        <header className="section__header md:hidden">
                            <h3 className="section__caption poppins-semibold text-highlight-light">Localização</h3>
                            <h2 className="section__title text-4xl poppins-bold">Onde Estamos</h2>
                        </header>
                        <div className="section__map w-full max-w-lg aspect-3/2 border-4 overflow-hidden rounded-lg border-background-light">
                            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.175810768064!2d-42.693144323500455!3d-14.301215486150488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75ac892620e8ee9%3A0xedfa55cda6e97ceb!2sCETEIA%20-%20Centro%20de%20Estudos%20Tecnol%C3%B3gicos%20em%20Inform%C3%A1tica%20e%20Agronomia!5e0!3m2!1spt-BR!2sbr!4v1746805396126!5m2!1spt-BR!2sbr"  loading="lazy"></iframe>
                        </div>
                        <article className="article w-full flex flex-col gap-3">
                            <header className="article__header hidden md:block">
                                <h3 className="article__caption poppins-semibold text-highlight-light">Localização</h3>
                                <h2 className="article__title text-4xl poppins-bold">Onde Estamos</h2>
                            </header>
                            <div className="article__content grid gap-3">
                                <p>O Educa Drones opera no Centro de Estudos Tecnológicos em Informática e Agronomia (CETEIA) do Instituto Federal Baiano - campus Guanambi</p>

                                <p>Caixa Postal Nº 09 Distrito de, Saída p/ ceraíma - n, – Zona Rural, Guanambi - BA, 46430-000</p>
                            </div>
                            <div className="article__buttons">
                                <CTAButton text={"Acesse pelo Mapa"} link={"https://maps.app.goo.gl/kf8pz8uiDvLF6Cyf9"}/>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage