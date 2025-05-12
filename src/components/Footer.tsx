/* Icons */
import { Github, Instagram, Linkedin, Smartphone } from "lucide-react"

/* Components */
import IconButton from "./IconButton"

function Footer(){
    const buttons = [
        {
            id: 1,
            text: 'instagram',
            icon: <Instagram/>,
            link: '',
        },
        {
            id: 2,
            text: 'linkedin',
            icon: <Linkedin/>,
            link: '',
        },
        {
            id: 3,
            text: 'github',
            icon: <Github/>,
            link: '',
        },
        {
            id: 4,
            text: 'whatsapp',
            icon: <Smartphone/>,
            link: '',
        },
    ]

    return(
        <footer className="footer bg-highlight-dark text-background-light py-10 grid gap-10">
            <section className="footer__section grid grid-cols-1 md:grid-cols-2 gap-12">
                <article className="article flex flex-col justify-between">
                    <div className="grid gap-5">
                        <header className="article__header">
                            <h3 className="article__caption poppins-semibold">Faça Parte</h3>
                            <h2 className="article__title text-4xl poppins-bold">Entre em Contato</h2>
                        </header>
                        <div className="article__content text-xl">
                            <p><strong>Têm interesse em levar o projeto para sua escola?</strong> Entre em contato através do formulário ou por nossas redes sociais</p>
                        </div>
                        <div className="article__buttons flex gap-3 flex-wrap">
                            {buttons.map((button) => (
                                <IconButton key={button.id} icon={button.icon} text={button.text} link={button.link}/>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <p className="footer__copyright text-highlight-light">Copyright © 2025. Educa Drones™. Todos os direitos reservados. Desenvolvido por <a className="underline" href="https://www.gustavocosta.me" target="_blank">Gustavo Costa</a></p>
                    </div>
                </article>
                <form className="form grid gap-4">
                    <label className="form__label" htmlFor="">
                        Nome
                        <input className="form__input" placeholder="digite seu nome" type="text" name="name" id="name"/>
                    </label>
                    <label className="form__label" htmlFor="">
                        Email
                        <input className="form__input" placeholder="exemplo@email.com" type="text" name="email" id="email"/>
                    </label>
                    <label className="form__label" htmlFor="">
                        Assunto
                        <input className="form__input" placeholder="digite o título do assunto" type="text" name="title" id="title"/>
                    </label>
                    <label className="form__label" htmlFor="">
                        Conteúdo
                        <textarea placeholder="digite seu comentário, sugestão, proposta ou convite" className="form__input h-45" name="content" id="content"></textarea>
                    </label>
                    <label className="form__label " htmlFor="">
                        <input className="form__input hover:bg-highlight-light" placeholder="digite o título do assunto" value="Enviar" type="submit" name="submit-button" id="submit-button"/>
                    </label>
                </form>
            </section>
            <section className="footer__section md:hidden block">
                <p className="footer__copyright text-highlight-light text-center">Copyright © 2025. Educa Drones™. Todos os direitos reservados. Desenvolvido por <a className="underline" href="https://www.gustavocosta.me" target="_blank">Gustavo Costa</a></p>
            </section>
        </footer>
    )
}

export default Footer