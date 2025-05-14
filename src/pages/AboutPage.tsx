/* Components */
import { ChevronDown } from "lucide-react"
import InfoCard from "../components/cards/InfoCard"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

function AboutPage(){
    const infoCards = [
        {
            id: '1',
            title: 'Integração da Metodologia STEAM no Ensino',
            text: 'O Educa Drones utiliza drones para aplicar os conceitos de Ciência, Tecnologia, Engenharia, Artes e Matemática (STEAM) de maneira prática e envolvente, promovendo um aprendizado interativo e multidisciplinar.',
            icon: 'icons/cards/info/icon-mind.svg', 
            altIcon: 'cérebro',
        },
        {
            id: '2',
            title: 'Desenvolvimento de Drones Educacionais',
            text: 'O projeto foca na construção de drones como ferramenta pedagógica, capacitando alunos a aprender conceitos de física, programação e engenharia enquanto desenvolvem suas próprias aeronaves.',
            icon: 'icons/cards/info/icon-drone.svg', 
            altIcon: 'drone',
        },
        {
            id: '3',
            title: 'Participação em Competições e Feiras',
            text: 'Os alunos têm a oportunidade de aplicar seus conhecimentos em competições de drones e eventos científicos, promovendo a inovação, o networking e o compartilhamento de conhecimentos com outros estudantes e profissionais.',
            icon: 'icons/cards/info/icon-trophy.svg', 
            altIcon: 'troféu',
        },
    ]

    return(
        <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
            <Navigation/>
            <main className="main">
                {/* Hero */}
                <div className="main__background bg-linear-to-r from-highlight-light to-highlight-dark text-background-light">
                    <section className="section section--hero py-15 grid md:grid-cols-2">
                        <article className="article grid gap-1.5">
                            <h1 className="article__title text-4xl font-extrabold">Quem Somos?</h1>
                            <p className="article__text text-xl">Somos o Educa Drones, transformando a educação com inovação, tecnologia e a paixão por voar rumo ao futuro.</p>
                        </article>
                        <figure className="figure">
                            <img className="figure__img" src="" alt="" />
                        </figure>
                    </section>
                </div>

                {/* Nossa Missão */}
                <div className="main__background">
                    <section className="section py-15 grid md:grid-cols-2">
                        <div className="section__figures">
                            <figure className="figure">
                                <img className="figure__img" src="" alt="" />
                            </figure>

                            <figure className="figure">
                                <img className="figure__img" src="" alt="" />
                            </figure>
                        </div>
                        <article className="article grid">
                            <header className="article__header">
                                <h2 className="article__title text-3xl font-bold">Nossa Missão</h2>
                            </header>
                            <div className="article__content grid gap-12">
                                <p className="article__text">Nossa missão é proporcionar aos estudantes e professores uma experiência única de aprendizado, usando drones como pontes para o conhecimento. Queremos capacitar as novas gerações com habilidades tecnológicas essenciais, estimulando a inovação, a criatividade e o espírito empreendedor.</p>
                                <p className="article__text font-semibold">Acreditamos que a inovação nunca deve ser limitada pelo medo do desconhecido. Com os drones, estamos expandindo as fronteiras do aprendizado com confiança.</p>
                                <p className="article__text">O Educa Drones se destaca por sua abordagem inovadora, que alia a construção e operação de drones a desafios reais, em um ambiente colaborativo e interdisciplinar. Ao aplicar conceitos de física, engenharia e programação, criamos uma plataforma de aprendizado que é divertida, prática e essencial para o futuro.</p>
                            </div>
                        </article>
                    </section>
                </div>

                {/* Cards */}
                <div className="main__background">
                    <section className="section py-15">
                        <section className="section__cards grid md:grid-cols-3 gap-x-8 gap-y-16">
                            {infoCards.map((card) => (
                                <InfoCard key={card.id} title={card.title} text={card.text} icon={card.icon} altIcon={card.altIcon}/>
                            ))}
                        </section>
                    </section>
                </div>

                {/* História */}
                <div className="main__background bg-background-dark pb-20 grid gap-15">
                    <section className="section py-10 flex flex-col items-center gap-1.5">
                        <h2 className="section__title font-medium">Nossa História</h2>
                        <div className="section__icon">
                            <ChevronDown size={37}  className="bg-highlight-dark text-background-light pt-[0.438rem] pb-[0.313rem] px-1.5 rounded-3xl"/>
                        </div>
                    </section>

                    {/* Pré Educa Drones */}
                    <section className="section grid md:grid-cols-2">
                        <article className="article grid gap-5">
                            <header className="article__header">
                                <h3 className="article__title font-bold text-xl">Pré Educa Drones</h3>
                            </header>
                            <div className="article__content grid gap-5">
                                <p className="article__text">Embora o projeto como é hoje tenha nascido apenas em 2023 no Instituto Federal de Educação, Ciência e Tecnologia Baiano - campus Guanambi, ele surgiu através da paixão por aeromodelos do professor Dr. Leandro dos Santos, que utilizava a aplicação de drones como material didático para alguns dos alunos do curso de agronomia desde meados de 2013.</p>

                                <p className="article__text">Foi apenas em 2018, através do programa XXXX, que foi criado no instituto duas equipes de drones, a Drones Guanambi e a IF Copter, lideradas respectivamente pelo professor Dr. Leandro e pelo professor Dr. Fábio Lima para participar da competição nacional Fórmula Drone, organizada pela Sociedade de Engenheiros da Mobilidade (SAE Brasil), que uniu alunos do ensino médio e graduação em um evento de promoção do conhecimento, inovações e um pontapé inicial para a idealização do projeto Educa Drones. As equipes participaram também no ano de 2019, porém o evento foi descontinuado devido a pandemia de covid-19 que se iniciou em 2020 e as equipes foram desfeitas.</p>
                            </div>
                        </article>

                        <div className="section__figures">
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                        </div>
                    </section>

                    {/* O inicio */}
                    <section className="section md:grid md:grid-cols-2 flex flex-col-reverse">
                        <div className="section__figures">
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                        </div>

                        <article className="article grid gap-5">
                            <header className="article__header">
                                <h3 className="article__title font-bold text-xl">O Início</h3>
                            </header>
                            <div className="article__content grid gap-5">
                                <p className="article__text">Em 2023, pós pandemia, durante o período de readaptação ao cotidiano, surgiu a oportunidade de participação na competição Drones IFSC no Instituto Federal de Santa Catarina - campus Florianópolis, o que incentivou os professores Leandro e Fábio à reativarem as antigas equipes, junto a elas foi criada a equipe Carcará, liderada pelo Professor Dr. Reinaldo Cotrim para que todos os alunos interessados tivessem a oportunidade de participar (ali também se iniciou o projeto Educa Drones). Como resultado da competição as equipes Drones Guanambi, IF Copter e Carcará trouxeram respectivamente o 1, 2 e 4 lugar.</p>

                                <p className="article__text">Naquele ano o projeto também teve a oportunidade de participar da Mostra Nacional de Robótica com o projeto Drone Modular Para Robótica Educacional e Competições Estudantis, que havia sido iniciado pré pandemia, mas que agora em estágio avançado gerou a primeira bolsa de Iniciação Científica Jr. do CNPq para o projeto.</p>
                            </div>
                        </article>
                    </section>

                    {/* 2024 */}
                    <section className="section md:grid md:grid-cols-2">
                        <section className="section__articles grid gap-15">
                            {/* Expansão Pedagógica */}
                            <article className="article grid gap-5">
                                <header className="article__header">
                                    <h3 className="article__title font-bold text-xl">Expansão Pedagógica</h3>
                                </header>
                                <div className="article__content grid gap-5">
                                    <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor eget lectus quis varius. Nulla consectetur nibh vel molestie interdum. Morbi in rhoncus nisi. Praesent viverra lorem mi, a vulputate nulla consequat quis. Fusce purus nulla, aliquet nec massa non.</p>
                                    <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum auctor tellus a bibendum. Curabitur mollis arcu in fringilla imperdiet. Sed pharetra, justo vitae tristique porta, magna odio rutrum ipsum, et gravida ipsum ipsum at turpis. Vestibulum massa justo, mollis et risus eget, rutrum semper odio. Sed sit amet laoreet tortor. Suspendisse tortor ligula, elementum eu felis in, ultricies aliquam metus. Nulla vulputate turpis et ipsum lobortis rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                </div>
                            </article>
                            
                            {/* 2024, Um ano de Conquistas */}
                            <article className="article grid gap-5">
                                <header className="article__header">
                                    <h3 className="article__title font-bold text-xl">2024, Um Ano de Conquistas</h3>
                                </header>
                                <div className="article__content grid gap-5">
                                    <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor eget lectus quis varius. Nulla consectetur nibh vel molestie interdum. Morbi in rhoncus nisi. Praesent viverra lorem mi, a vulputate nulla consequat quis. Fusce purus nulla, aliquet nec massa non.</p>
                                    <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum auctor tellus a bibendum. Curabitur mollis arcu in fringilla imperdiet. Sed pharetra, justo vitae tristique porta, magna odio rutrum ipsum, et gravida ipsum ipsum at turpis. Vestibulum massa justo, mollis et risus eget, rutrum semper odio. Sed sit amet laoreet tortor. Suspendisse tortor ligula, elementum eu felis in, ultricies aliquam metus. Nulla vulputate turpis et ipsum lobortis rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum auctor tellus a bibendum. Curabitur mollis arcu in fringilla imperdiet. Sed pharetra, justo vitae tristique porta, magna odio rutrum ipsum, et gravida ipsum ipsum at turpis. Vestibulum massa justo, mollis et risus eget, rutrum semper odio. Sed sit amet laoreet tortor. Suspendisse tortor ligula, elementum eu felis in, ultricies aliquam metus. Nulla vulputate turpis et ipsum lobortis rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                </div>
                            </article>
                        </section>
                        
                        <div className="section__figures">
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                        </div>
                    </section>

                    {/* 2025 */}
                    <section className="section md:grid md:grid-cols-2 flex flex-col-reverse">
                        <div className="section__figures">
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                            <figure className="figure">
                                <img src="" alt="" className="figure__img" />
                            </figure>
                        </div>

                        <article className="article grid gap-5">
                            <header className="article__header">
                                <h3 className="article__title font-bold text-xl">Lorem Ipsum</h3>
                            </header>
                            <div className="article__content grid gap-5">
                                <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor eget lectus quis varius. Nulla consectetur nibh vel molestie interdum. Morbi in rhoncus nisi. Praesent viverra lorem mi, a vulputate nulla consequat quis. Fusce purus nulla, aliquet nec massa non.</p>

                                <p className="article__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum auctor tellus a bibendum. Curabitur mollis arcu in fringilla imperdiet. Sed pharetra, justo vitae tristique porta, magna odio rutrum ipsum, et gravida ipsum ipsum at turpis. Vestibulum massa justo, mollis et risus eget, rutrum semper odio. Sed sit amet laoreet tortor. Suspendisse tortor ligula, elementum eu felis in, ultricies aliquam metus. Nulla vulputate turpis et ipsum lobortis rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutPage