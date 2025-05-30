/* Components */
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

/* Icons */
import { FileUser, Linkedin } from "lucide-react"

function TeamPage(){
    interface Media {
        id: number,
        name: string,
        icon: ReactElement,
        link: string,
    }

    interface Member {
        id: number,
        name: string,
        description: string,
        picture: string,
        media: Media[],
    }

    const professors: Member[] = [
        {
            id: 1,
            name: 'Dr. Leandro Gonçalves dos Santos',
            description: 'Doutorado em agronomia',
            picture: '',
            media: [
                {
                    id: 1,
                    name: 'Linkedin',
                    icon: <Linkedin/>,
                    link: '',
                },
                {
                    id: 2,
                    name: 'Currículo Lattes',
                    icon: <FileUser />,
                    link: '',
                },
            ],
        },
        {
            id: 1,
            name: 'Dr. Reinaldo Cotrim',
            description: '',
            picture: '',
            media: [
                {
                    id: 1,
                    name: 'Linkedin',
                    icon: <Linkedin/>,
                    link: '',
                },
                {
                    id: 2,
                    name: 'Currículo Lattes',
                    icon: <FileUser />,
                    link: '',
                },
            ],
        },
        {
            id: 1,
            name: 'Fábio Lima',
            description: 'Doutorado em agronomia',
            picture: '',
            media: [
                {
                    id: 1,
                    name: 'Linkedin',
                    icon: <Linkedin/>,
                    link: '',
                },
                {
                    id: 2,
                    name: 'Currículo Lattes',
                    icon: <FileUser />,
                    link: '',
                },
            ],
        },
    ]

    const students: Member[] = [
        {
            id: 1,
            name: 'Rian',
            description: 'Técnico em informática para a internet',
            picture: '',
            media: [
                {
                    id: 1,
                    name: 'Linkedin',
                    icon: <Linkedin/>,
                    link: '',
                },
                {
                    id: 2,
                    name: 'Currículo Lattes',
                    icon: <FileUser />,
                    link: '',
                },
            ],
        },
    ]

    const egress: Member[] = [
        {
            id: 1,
            name: 'Gustavo da Silva Nascimento Costa',
            description: 'Técnico em informática para a internet',
            picture: '',
            media: [
                {
                    id: 1,
                    name: 'Linkedin',
                    icon: <Linkedin/>,
                    link: '',
                },
                {
                    id: 2,
                    name: 'Currículo Lattes',
                    icon: <FileUser />,
                    link: '',
                },
            ],
        },
    ]

    return(
        <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
            <Navigation/>
            <main className="main">
                <section className="main__background text-background-light bg-highlight-light py-14">
                    <section className="section section--hero">
                        <article className="article flex flex-col justify-center gap-1.5">
                            <h1 className="article__title text-4xl font-extrabold">Nossa Equipe</h1>
                            <p className="article__text text-xl">Aqueles que fazem o projeto acontecer</p>
                        </article>
                    </section>
                </section>
                <section className="main__background">

                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default TeamPage