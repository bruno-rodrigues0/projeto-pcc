/* Components */
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"
import MemberCard from "../../components/cards/MemberCard"

/* Data Members */
import collaborates from "./TeamCollaborates"
import professors from "./TeamProfessors"
import students from "./TeamStudents"

function TeamPage(){

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

                {/* Professors */}
                <section className="main__background py-14 grid gap-8">
                    <header className="section__header">
                        <h2 className="section__title text-center text-3xl font-bold">Pesquisadores</h2>
                    </header>

                    <section className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-8">
                        {professors.map((member) => (
                            <MemberCard name={member.name} description={member.description} picture={member.picture} links={member.links}/> 
                        ))}
                    </section>
                </section>

                {/* Students */}
                <section className="main__background py-14 grid gap-8">
                    <header className="section__header">
                        <h2 className="section__title text-center text-3xl font-bold">Estudantes</h2>
                    </header>

                    <section className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-8">
                        {students.map((member) => (
                            <MemberCard name={member.name} description={member.description} picture={member.picture} links={member.links}/> 
                        ))}
                    </section>
                </section>

                {/* Collaborators */}
                <section className="main__background py-14 grid gap-8">
                    <header className="section__header">
                        <h2 className="section__title text-center text-3xl font-bold">Colaboradores Externos</h2>
                    </header>

                    <section className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-8">
                        {collaborates.map((member) => (
                            <MemberCard name={member.name} description={member.description} picture={member.picture} links={member.links}/> 
                        ))}
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default TeamPage