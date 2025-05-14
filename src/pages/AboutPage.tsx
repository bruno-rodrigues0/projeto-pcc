/* Components */
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

function AboutPage(){
    return(
        <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
            <Navigation/>
            <main className="main">
                {/* Hero */}
                <div className="main__background">
                    <section className="section section--hero">
                        <article className="article">
                            <h1 className="article__title">Quem Somos?</h1>
                            <p className="article__title">Somos o Educa Drones, transformando a educação com inovação, tecnologia e a paixão por voar rumo ao futuro.</p>
                        </article>
                        <figure className="figure">
                            <img className="figure__img" src="" alt="" />
                        </figure>
                    </section>
                </div>

                {/* Nossa Missão */}
                <div className="main__background">
                    <section className="section">
                        <article className="article">
                            <header className="article__header">
                                <h1 className="article__title">Nossa Missão</h1>
                            </header>
                            <div className="article__content">
                                <p className="article__text">Nossa missão é proporcionar aos estudantes e professores uma experiência única de aprendizado, usando drones como pontes para o conhecimento. Queremos capacitar as novas gerações com habilidades tecnológicas essenciais, estimulando a inovação, a criatividade e o espírito empreendedor.</p>
                                <p className="article__text font-semibold">Acreditamos que a inovação nunca deve ser limitada pelo medo do desconhecido. Com os drones, estamos expandindo as fronteiras do aprendizado com confiança.</p>
                                <p className="article__text">O Educa Drones se destaca por sua abordagem inovadora, que alia a construção e operação de drones a desafios reais, em um ambiente colaborativo e interdisciplinar. Ao aplicar conceitos de física, engenharia e programação, criamos uma plataforma de aprendizado que é divertida, prática e essencial para o futuro.</p>
                            </div>
                        </article>
                        <div className="section__figures">
                            <figure className="figure">
                                <img className="figure__img" src="" alt="" />
                            </figure>

                            <figure className="figure">
                                <img className="figure__img" src="" alt="" />
                            </figure>
                        </div>
                    </section>
                </div>

                {/* Cards */}
                <div className="main__background">
                    <section className="section">
                        <article className="article">
                            <header className="article__header">
                                <h1 className="article__title">Nossa Missão</h1>
                            </header>
                            <div className="article__content">
                                <p className="article__text">Nossa missão é proporcionar aos estudantes e professores uma experiência única de aprendizado, usando drones como pontes para o conhecimento. Queremos capacitar as novas gerações com habilidades tecnológicas essenciais, estimulando a inovação, a criatividade e o espírito empreendedor.</p>
                                <p className="article__text font-semibold">Acreditamos que a inovação nunca deve ser limitada pelo medo do desconhecido. Com os drones, estamos expandindo as fronteiras do aprendizado com confiança.</p>
                                <p className="article__text">O Educa Drones se destaca por sua abordagem inovadora, que alia a construção e operação de drones a desafios reais, em um ambiente colaborativo e interdisciplinar. Ao aplicar conceitos de física, engenharia e programação, criamos uma plataforma de aprendizado que é divertida, prática e essencial para o futuro.</p>
                            </div>
                        </article>
                        <div className="section__figures">
                            <figure className="figure">
                                <img className="figure__img" src="" alt="" />
                            </figure>

                            <figure className="figure">
                                <img className="figure__img" src="" alt="" />
                            </figure>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutPage