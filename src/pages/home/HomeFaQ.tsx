import Details from "../../components/Details"

function HomeFaQ(){
    const questions = [
        {
            id: 1,
            title: 'Quem pode participar do projeto Educa Drones?',
            text: '',
        },
        {
            id: 2,
            title: 'Como o Educa Drones pode ser implementado em minha escola?',
            text: '',
        },
        {
            id: 3,
            title: 'O Educa Drones é adequado para todas as idades?',
            text: '',
        },
        {
            id: 4,
            title: 'Quais recursos são necessários para implementar o Educa Drones na minha escola?',
            text: '',
        },
        {
            id: 5,
            title: 'O Educa Drones oferece suporte técnico para as escolas participantes?',
            text: '',
        },
    ]

    return(
        <section className="section">
            <header className="section__header">
                <h3 className="section__caption uppercase">FaQ</h3>
                <h2 className="section__title">Perguntas Frequentes</h2>
            </header>
            <div className="section__details">
                {questions.map((question) => (
                    <Details key={question.id} title={question.title}  text={question.text}/>
                ))}
            </div>
        </section>
    )
}

export default HomeFaQ