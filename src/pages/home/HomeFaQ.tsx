import Details from "../../components/Details"

function HomeFaQ(){
    const questions = [
        {
            id: 1,
            title: 'Quem pode participar do projeto Educa Drones?',
            text: 'O projeto Educa Drones tem como público alvo estudantes e professores de escolas e universidades, sejam elas públicas ou particulares.',
        },
        {
            id: 2,
            title: 'Como implementar o Educa Drones em minha escola?',
            text: 'Para implementar o Educa Drones em sua escola, é essencial contar com um ou mais professores dedicados, responsáveis pela coordenação das atividades. Além disso, será necessário adquirir os recursos adequados para realizar as oficinas, garantindo uma experiência prática e inovadora para os alunos.',
        },
        {
            id: 3,
            title: 'O Educa Drones é adequado para todas as idades?',
            text: 'O projeto Educa Drones se adapta a públicos de diferentes idades, entretanto sugerimos que a idade mínima seja de 14 anos.',
        },
        {
            id: 4,
            title: 'Quais recursos são necessários para implementar o Educa Drones na minha escola?',
            text: 'Para implementação é necessário obter um kit de Drone Educacional, ferramentas básicas de soldagem e um computador ou notebook. Além disso o Educa Drones disponiliza material didático gratuito e o treinamento de montagem e configuração de drones',
        },
        {
            id: 5,
            title: 'O Educa Drones oferece suporte técnico para as escolas participantes?',
            text: 'Todas as escolas participantes recebem suporte técnico individual através dos canais de comunicação: telefone, whatsapp, email e rede social.',
        },
    ]

    return(
        <section className="section py-8 w-full grid gap-5">
            <header className="section__header">
                <h3 className="section__caption poppins-semibold text-highlight-light">FaQ</h3>
                <h2 className="section__title text-4xl poppins-bold">Perguntas Frequentes</h2>
            </header>
            <div className="section__details grid gap-3">
                {questions.map((question) => (
                    <Details key={question.id} title={question.title}  text={question.text}/>
                ))}
            </div>
        </section>
    )
}

export default HomeFaQ