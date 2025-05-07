/* Icons */

/* Components */
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import CTAButton from "../../components/CTAButton"

function HomePage(){
    return(
        <div className="">
            <Navigation/>
            <main className="main">
                {/* Hero */}
                <div className="main__background">
                    <section className="section section--hero">
                        <header>
                            <h2 className="uppercase">Educa Drones</h2>
                            <h1>Onde o ensino se torna inovação</h1>
                            <p>Seja parte dessa transformação! Convide sua escola a explorar o mundo dos drones com o Educa Drones. </p>
                        </header>
                    </section>
                </div>

                {/* O Prjeto */}
                <div className="main__background">
                    <section className="section">
                        <article>
                            <header>
                                <h2 className="uppercase">Educa Drones</h2>
                                <h1>Onde o ensino se torna inovação</h1>
                            </header>
                            <div className="article__content">
                                <p>O Educa Drones é uma iniciativa inovadora do Instituto Federal Baiano – Campus Guanambi, que utiliza drones para transformar o aprendizado de estudantes e professores. Através da metodologia STEAM, o projeto integra Ciência, Tecnologia, Engenharia, Artes e Matemática em atividades práticas e dinâmicas.</p>

                                <p>O projeto não só aproxima os alunos das tecnologias do futuro, mas também os prepara para os desafios de um mercado cada vez mais digital e interconectado. Ao promover a construção e operação de drones, o projeto estimula a criatividade, a resolução de problemas e a colaboração, impactando positivamente a forma como os jovens aprendem e se conectam com a inovação tecnológica.</p>
                            </div>
                            <div className="article__buttons">
                                <CTAButton text={"Saiba Mais"} link={"#"}/>
                            </div>
                        </article>
                        <div className="section__figures">
                            <figure>
                                <img src="" alt="" />
                                <figcaption></figcaption>
                            </figure>
                            <figure>
                                <img src="" alt="" />
                                <figcaption></figcaption>
                            </figure>
                            <figure>
                                <img src="" alt="" />
                                <figcaption></figcaption>
                            </figure>
                        </div>
                    </section>
                </div>

                {/* Fun Fact Card */}
                <div className="main__background">
                    <section className="section">
                        <article className="card card--funfact">
                            <h3 className="card__title">Você conhece a abordagem STEAM?</h3>
                            <div className="card__content">
                                <p>A abordagem STEAM (Ciência, Tecnologia, Engenharia, Artes e Matemática) está transformando a forma como o conhecimento é explorado nas salas de aula. Mas o que torna essa metodologia tão especial? Ao integrar essas cinco disciplinas de maneira prática e criativa, os alunos não apenas aprendem conceitos, mas os aplicam em projetos reais, como a construção de drones.</p>
                                <p>Imagine combinar a precisão da matemática, a criatividade das artes e a inovação tecnológica em um único projeto. O STEAM desafia os estudantes a pensarem fora da caixa, incentivando a curiosidade e o desenvolvimento de habilidades essenciais para o futuro.</p>    
                            </div>
                        </article>
                    </section>
                </div>

                {/* Parceiro e Colaboradores */}
                <div className="main__background">
                    <section className="section">
                        <h2 className="section__title">Parceiros e Colaboradores</h2>
                        <div className="section__tracker">
                            <a href="">
                                <img src="" alt="" />
                            </a>

                            <a href="">
                                <img src="" alt="" />
                            </a>
                            
                            <a href="">
                                <img src="" alt="" />
                            </a>
                        </div>
                    </section>
                </div>

                {/* Notícias e Eventos*/}
                <div className="main__background">
                    <section className="section">
                        <header>
                            <h2 className="uppercase">Educa Drones</h2>
                            <h1>Onde o ensino se torna inovação</h1>
                        </header>
                        <div className="section__cards">
                            <a href="" className="card">
                                
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage