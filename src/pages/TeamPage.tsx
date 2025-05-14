/* Components */
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

function TeamPage(){
    return(
        <div>
            <Navigation/>
            <main className="main">
                <section className="main__backgroung">
                    <section className="section section--hero">
                        <article>
                            <h1>Nossa Equipe</h1>
                        </article>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default TeamPage