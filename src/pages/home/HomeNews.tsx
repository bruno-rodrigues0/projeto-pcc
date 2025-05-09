/* Components */
import NewsCard from "../../components/NewsCard"

function HomeNews(){
    interface NewsFormat{
        id: number,
        title: string,
        date: string,
        img: string,
        altImg: string,
        link: string,
    }

    const news:[NewsFormat, NewsFormat, NewsFormat, NewsFormat] = [
        {
            id: 1,
            title: 'ObaDrones: 1 Olimpíada Baiana de Drones',
            date: '06 de maio de 2025',
            img: 'public/imagens/news/OBaDrones.png',
            altImg: 'OBaDrones',
            link: '',

        },
        {
            id: 2,
            title: 'CROS 2025: Participação na 1 Conferência da Sociedade Brasileira de Robótica',
            date: '03 de maio de 2025',
            img: 'imagens/news/cros.png',
            altImg: 'CROS 2025',
            link: '',
        },
        {
            id: 3,
            title: 'Drones IFSC 2024: Equipe Carcará Conquista o 3 lugar',
            date: '20 de novembro de 2024',
            img: 'imagens/news/IFSC.png',
            altImg: 'IFSC 2024',
            link: '',
        },
        {
            id: 4,
            title: 'IMAV 2024: Participação na International Micro Air Vehiecle Conference and Competition',
            date: '02 de novembro de 2024',
            img: 'imagens/news/IMAV.png',
            altImg: 'IMAV 2024',
            link: '',
        },
    ]

    return(
        <section className="section py-12 grid gap-5">
            <header className="section__header">
                <h3 className="section__caption poppins-semibold text-highlight-light">Em Destaque</h3>
                <h2 className="section__title text-4xl poppins-bold">Notícias e Eventos</h2>
            </header>
            <div className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-4 gap-2.5 gap-y-5">
                {news.map((obg) => (
                    <NewsCard key={obg.id} title={obg.title} link={obg.link} img={obg.img} altImg={obg.altImg} date={obg.date}/>
                ))}
            </div>
        </section>
    )
}

export default HomeNews