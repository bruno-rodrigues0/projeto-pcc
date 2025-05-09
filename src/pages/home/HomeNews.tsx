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
            img: '',
            altImg: '',
            link: '',

        },
        {
            id: 2,
            title: 'CROS 2025: Participação na 1 Conferência da Sociedade Brasileira de Robótica',
            date: '03 de maio de 2025',
            img: '',
            altImg: '',
            link: '',
        },
        {
            id: 3,
            title: 'Drones IFSC 2024: Equipe Carcará Conquista o 3 lugar',
            date: '20 de novembro de 2024',
            img: '',
            altImg: '',
            link: '',
        },
        {
            id: 4,
            title: 'IMAV 2024: Participação na International Micro Air Vehiecle Conference and Competition',
            date: '02 de novembro de 2024',
            img: '',
            altImg: '',
            link: '',
        },
    ]

    return(
        <section className="section">
            <header>
                <h2 className="uppercase">Educa Drones</h2>
                <h1>Onde o ensino se torna inovação</h1>
            </header>
            <div className="section__cards grid grid-cols-4">
                {news.map((obg) => (
                    <NewsCard key={obg.id} title={obg.title} link={obg.link} img={obg.img} altImg={obg.altImg} date={obg.date}/>
                ))}
            </div>
        </section>
    )
}

export default HomeNews