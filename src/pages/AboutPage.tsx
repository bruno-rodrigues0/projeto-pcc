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
                <div className="main__background bg-highlight-light text-background-light">
                    <section className="section section--hero py-15">
                        <article className="article flex flex-col justify-center gap-1.5">
                            <h1 className="article__title text-4xl font-extrabold">Quem Somos?</h1>
                            <p className="article__text text-xl">Somos o Educa Drones, transformando a educação com inovação, tecnologia e a paixão por voar rumo ao futuro.</p>
                        </article>
                    </section>
                </div>

                {/* Nossa Missão */}
                <div className="main__background">
                    <section className="section pb-25 md:pb-15 py-15 flex flex-col-reverse items-center md:grid md:grid-cols-2 gap-12">
                        <section className="section__figures pb-5 md:pb-0 max-w-xl">
                            <div className="relative">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-light overflow-hidden w-[75%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\formulaDrones\toos-grama.png" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-light overflow-hidden w-[55%] absolute right-0 top-[60%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\imav\rafa-drones.jpg" alt="" />
                                </figure>
                            </div>
                        </section>
                        <article className="article grid">
                            <header className="article__header">
                                <h2 className="article__title text-3xl font-bold">Nossa Missão</h2>
                            </header>
                            <div className="article__content grid gap-6">
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
                <div className="main__background bg-background-dark pb-20 grid gap-20 text-justify">
                    <section className="section py-10 flex flex-col items-center gap-1.5">
                        <h2 className="section__title font-medium">Nossa História</h2>
                        <div className="section__icon">
                            <ChevronDown size={37}  className="bg-highlight-dark text-background-light pt-[0.438rem] pb-[0.313rem] px-1.5 rounded-3xl"/>
                        </div>
                    </section>

                    {/* Pré Educa Drones */}
                    <section className="section flex flex-col gap-5 items-center">
                        <article className="article grid md:block">
                            {/* Imagens */}
                            <div className="relative pb-[10%] max-w-md w-[45%] md:float-right ml-[5%] mb-6 hidden md:block">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[75%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\formulaDrones\todos-banner.jpg" alt="" />
                                </figure>
                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute right-0 bottom-[5%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\leo-piloto.jpg" alt="" />
                                </figure>
                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[40%] absolute left-15 bottom-0">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\formulaDrones\montagem.jpg" alt="" />
                                </figure>
                            </div>

                            {/* Texto */}
                            <h3 className="article__title font-bold text-xl pb-5">Pré Educa Drones</h3>
                                
                            <p className="article__text pb-5">Embora o projeto como é hoje tenha nascido apenas em 2023 no Instituto Federal de Educação, Ciência e Tecnologia Baiano - campus Guanambi, ele surgiu através da paixão por aeromodelos do professor Dr. Leandro dos Santos, que utilizava a aplicação de drones como material didático para alguns dos alunos do curso de agronomia desde meados de 2013.</p>

                            <p className="article__text pb-5">Foi apenas em 2018, através do programa XXXX, que foi criado no instituto duas equipes de drones, a Drones Guanambi e a IF Copter, lideradas respectivamente pelo professor Dr. Leandro e pelo professor Dr. Fábio Lima para participar da competição nacional Fórmula Drone, organizada pela Sociedade de Engenheiros da Mobilidade (SAE Brasil), que uniu alunos do ensino médio e graduação em um evento de promoção do conhecimento, inovações e um pontapé inicial para a idealização do projeto Educa Drones. As equipes participaram também no ano de 2019, porém o evento foi descontinuado devido a pandemia de covid-19 que se iniciou em 2020 e as equipes foram desfeitas.</p>
                        </article>
                        
                        <section className="section__figures max-w-xl md:hidden">
                            <div className="relative pb-[22%] max-w-xl">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[75%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\formulaDrones\todos-banner.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute right-0 bottom-[5%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\leo-piloto.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[40%] absolute left-15 bottom-0">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\formulaDrones\montagem.jpg" alt="" />
                                </figure>
                            </div>
                        </section>
                    </section>

                    {/* O inicio */}
                    <section className="section flex flex-col gap-5 items-center">
                        <article className="article">
                            <div className="relative pb-[12%] max-w-xl w-[45%] float-left mr-[5%] mb-6 hidden md:block">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[75%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\ifsc\2023\oficina.png" alt="" />
                                </figure>
                                <figure className="figure aspect-2/3 border-4 rounded-xl border-background-dark overflow-hidden w-[35%] absolute right-0 bottom-[15%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\mnr.jpg" alt="" />
                                </figure>
                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute left-[18%] bottom-0">
                                    <img className="figure__img w-full h-full object-cover" src="imagens/pictures/ifsc/2023/todos-pista.jpg" alt="" />
                                </figure>
                            </div>

                            <h3 className="article__title font-bold text-xl pb-5">O Início</h3>
                                
                            <p className="article__text pb-5">Em 2023, pós pandemia, durante o período de readaptação ao cotidiano, surgiu a oportunidade de participação na competição Drones IFSC no Instituto Federal de Santa Catarina - campus Florianópolis, o que incentivou os professores Leandro e Fábio à reativarem as antigas equipes, junto a elas foi criada a equipe Carcará, liderada pelo Professor Dr. Reinaldo Cotrim para que todos os alunos interessados tivessem a oportunidade de participar (ali também se iniciou o projeto Educa Drones). Como resultado da competição as equipes Drones Guanambi, IF Copter e Carcará trouxeram respectivamente o 1, 2 e 4 lugar.</p>

                            <p className="article__text pb-5">Naquele ano o projeto também teve a oportunidade de participar da Mostra Nacional de Robótica com o projeto Drone Modular Para Robótica Educacional e Competições Estudantis, que havia sido iniciado pré pandemia, mas que agora em estágio avançado gerou a primeira bolsa de Iniciação Científica Jr. do CNPq para o projeto.</p>
                        </article>

                        <section className="section__figures max-w-xl w-full md:hidden">
                            <div className="relative pb-[25%] max-w-xl w-full">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[75%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\ifsc\2023\oficina.png" alt="" />
                                </figure>

                                <figure className="figure aspect-2/3 border-4 rounded-xl border-background-dark overflow-hidden w-[35%] absolute right-0 bottom-[15%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\mnr.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute left-[18%] bottom-0">
                                    <img className="figure__img w-full h-full object-cover" src="imagens/pictures/ifsc/2023/todos-pista.jpg" alt="" />
                                </figure>
                            </div>
                        </section>
                    </section>

                    {/* 2024 */}
                    <section className="section flex flex-col gap-5 items-center">
                        <section className="section__articles grid gap-15">
                            <article className="article">
                                <div className="relative pb-[0%] max-w-xl w-[45%] float-right ml-[5%] mb-6 hidden md:block justify-items-end">
                                    <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[75%] float mb-[10%]">
                                        <img className="figure__img w-full h-full object-cover" src="imagens\pictures\mcd\alagoinhas\mcd-alagoinhas.png" alt="" />
                                    </figure>

                                    <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[70%] mb-[10%] float">
                                        <img className="figure__img w-full h-full object-cover" src="imagens\pictures\imav\outdoor-mission.png" alt="" />
                                    </figure>

                                    <figure className="figure aspect-16/10 border-4 rounded-xl border-background-dark overflow-hidden w-[65%] mr-[20%] float">
                                        <img className="figure__img w-full h-full object-cover" src="imagens\pictures\imav\outdoor-colibrifly.png" alt="" />
                                    </figure>

                                    <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute top-[25%] left-0">
                                        <img className="figure__img w-full h-full object-cover" src="imagens\pictures\mcd\petrolina\01.jpg" alt="" />
                                    </figure>

                                    <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[50%] absolute bottom-[18%] left-[5%]">
                                        <img className="figure__img w-full h-full object-cover" src="imagens\pictures\ifsc\2024\IFSC.png" alt="" />
                                    </figure>

                                    <figure className="figure aspect-1/1 border-4 rounded-xl border-background-dark overflow-hidden w-[25%] absolute bottom-[20%] right-[8%]">
                                        <img className="figure__img w-full h-full object-cover" src="imagens\pictures\colibri\Logo Colibri - fundo branco.jpg" alt="" />
                                    </figure>
                                </div>

                                {/* Expansão Pedagógica */}
                                <h3 className="article__title font-bold text-xl pb-5">Expansão Pedagógica</h3>

                                <p className="article__text pb-5">Após muita dedicação desenvolvendo drones com foco principal em competições, os professores e os jovens pesquisadores perceberam o quanto essas aeronaves despertavam o interesse dos estudantes, e resolveram ampliar sua utilização também com foco no ensino. Em sala de aula os drones podem ser utilizados como ferramenta didática para despertar o interesse e engajamento dos estudantes, que apoiados por metodologias ativas potencializam o aprendizado e a formação cognitiva. Dessa forma, os drones têm sido utilizados como ferramenta didática em apoio às atividades do curso “Drones, Dinâmica de Voo e o Mundo do Trabalho”, ministrado pelo professor Elcival Chagas do Nascimento, mestre em Educação Profissional e Tecnológica. Durante a execução da aula prática, os alunos interagem manipulando o drone e realizam a coleta de dados do tempo de queda de um objeto alijado enquanto a aeronave percorre um trajeto definido com velocidade constante.</p>
                                <p className="article__text pb-5">A partir dessas observações e da realização de cálculos, os participantes colocam em prática alguns conceitos da física de forma mais dinâmica e interessante. A utilização pedagógica dos drones também são implementadas por meio de feiras, mostras, workshops e treinamentos, sendo em sua maioria conduzidas pelos próprios alunos participantes dessas atividades, como uma forma de aprendizado mútuo. Por meio de atividades de pesquisa, ensino e extensão, estudantes do campus Guanambi estão tendo a oportunidade de trabalhar no desenvolvimento tecnológico e na disseminação de conhecimento. Iniciativas como essa também incentivam os jovens alunos a seguirem os estudos em áreas das ciências exatas e naturais de forma espontânea. </p>

                                {/* 2024, Um ano de Conquistas */}                              
                                <h3 className="article__title font-bold text-xl pb-5 pt-10 md:pt-20">2024, Um Ano de Conquistas</h3>

                                <p className="article__text pb-5">O ano de 2024 foi o mais marcante e produtivo. O engajamento da equipe proporcionou a aprovação do projeto “Monitoramento da população de plantas daninhas em milho com uso do índice vegetativo Excess Green” no Programa Institucional de Bolsas de Iniciação Científica (PIBIC) do Instituto Federal Baiano. Foram ofertados três cursos através do Programa de Treinamento Educa Drones, sendo eles nas cidades de Petrolina-PE, Alagoinhas-BA e Catu-BA. Nossos estudantes participaram dos eventos: IV Congresso de Ensino, Pesquisa e Extensão do IF Baiano em Senhor do Bonfim; II Tenda da Ciência em Guanambi; VI Semana Nacional de Ciência e Tecnologia em Alagoinhas; XV International Micro Air Vehicle Conference and Competition em Bristol na Inglaterra.</p>
                                <p className="article__text pb-5">A participação nestes eventos resultaram na publicação dos seguintes trabalhos: ”Drone modular IF450”, “O drone como ferramenta de divulgação científica em guanambi e região”, Desenvolvimento de drones e sua inserção na robótica educacional”, “Comparative analysis of cameras for ArUco marker recognition in unmanned aerial vehicles”. A linha de drones Colibri, foi ampliada com a criação do novo modelo “Colibri Mini”. E para fechar o ano com chave de ouro uma de nossas equipes, a Carcará, conquistou o pódio de terceiro lugar na competição Drones IFSC realizada em Criciúma-SC. Ufa, realmente foi muita coisa num mesmo ano!</p>
                            </article>
                        </section>
                        
                        <section className="section__figures max-w-xl w-full md:hidden">
                            <div className="relative max-w-xl w-full justify-items-end">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[75%] float mb-[10%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\mcd\alagoinhas\mcd-alagoinhas.png" alt="" />
                                </figure>

                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[70%] mb-[10%] float">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\imav\outdoor-mission.png" alt="" />
                                </figure>

                                <figure className="figure aspect-16/10 border-4 rounded-xl border-background-dark overflow-hidden w-[65%] mr-[20%] float">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\imav\outdoor-colibrifly.png" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute top-[25%] left-0">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\mcd\petrolina\01.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[50%] absolute bottom-[18%] left-[5%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\ifsc\2024\IFSC.png" alt="" />
                                </figure>

                                <figure className="figure aspect-1/1 border-4 rounded-xl border-background-dark overflow-hidden w-[25%] absolute bottom-[20%] right-[8%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\colibri\Logo Colibri - fundo branco.jpg" alt="" />
                                </figure>
                            </div>
                        </section>
                    </section>

                    {/* 2025 */}
                    <section className="section flex flex-col gap-5 items-center">
                        <article className="article">
                            <div className="relative pb-[12%] max-w-xl w-[45%] float-left mr-[5%] mb-6 hidden md:block justify-items-end">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[60%] float">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\OBaDrones\tasks.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute left-0 bottom-0">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\cros.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[35%] absolute right-[15%] bottom-[10%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\OBaDrones\campo.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-1/1 border-4 rounded-xl border-background-dark overflow-hidden w-[25%] absolute top-[20%] left-[20%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\colibri\Logo Colibri - fundo preto 1.jpg" alt="" />
                                </figure>
                            </div>

                            <h3 className="article__title font-bold text-xl pb-5">2025 e a Olimpíada Baiana de Drones</h3>
                                
                            <p className="article__text pb-5">Se 2024 foi um ano agitado e de muitas conquistas, o que esperar de 2025? Pois bem, 2025 começou e ele veio inspirado com a criação de um novo modelo de drone, o Colibri Micro. As conquistas aumentam, e nossos novos drones diminuem. O Colibri Mini foi projetado para ser um drone sub 200 mm de tamanho, sendo menor e mais leve que a versão Micro. O primeiro evento desse ano foi o “1st Brazilian Conference on Robotics” e ocorreu em Belo Horizonte. Nele tivemos a participação do egresso Gustavo Costa, apresentando o trabalho “Development and Application of Drones in Education: A STEAM Approach in Educational Robotics”. Em outro evento, a Tenda da Ciência 2025, o trabalho “Drone Colibri: Kit para Robótica Educacional” foi condecorado com o Prêmio de Divulgação Científica. As inscrições para Mostra Nacional de Robótica já iniciaram e dois trabalhos foram selecionados para apresentação sendo eles o “Colibrí Lite: Kit de Drone Educacional” e o “Dispensador de sementes para reflorestamento com drones”.</p>
                            <p className="article__text pb-5">O projeto “I Olimpíada Baiana de Drones” (OBADRONES) foi aprovado no edital Popciências da FAPESB, e o IF Baiano será palco do maior evento de drones da Bahia, que ocorrerá no período de 21 a 23 de agosto. A OBADRONES é uma competição educacional inteiramente experimental que tem como objetivo promover a popularização e o desenvolvimento de tecnologias de drones. Esse evento também visa desenvolver habilidades STEAM em alunos e professores por meio de troca de experiências e atividades como competições, oficinas e palestras sobre a temática de drones e robótica educacional, ministradas por especialistas. E não para por aí! Até chegar dezembro, muitos drones irão voar.  </p>
                        </article>

                        <section className="section__figures max-w-xl w-full md:hidden">
                            <div className="relative pb-[25%] max-w-xl w-full justify-items-end">
                                <figure className="figure aspect-4/3 border-4 rounded-xl border-background-dark overflow-hidden w-[60%] float">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\OBaDrones\tasks.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[55%] absolute left-0 bottom-0">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\cros.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-3/2 border-4 rounded-xl border-background-dark overflow-hidden w-[35%] absolute right-[15%] bottom-[10%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\OBaDrones\campo.jpg" alt="" />
                                </figure>

                                <figure className="figure aspect-1/1 border-4 rounded-xl border-background-dark overflow-hidden w-[25%] absolute top-[20%] left-[20%]">
                                    <img className="figure__img w-full h-full object-cover" src="imagens\pictures\colibri\Logo Colibri - fundo preto 1.jpg" alt="" />
                                </figure>
                            </div>
                        </section>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AboutPage