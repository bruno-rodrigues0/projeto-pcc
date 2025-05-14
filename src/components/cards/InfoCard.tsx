function InfoCard(props: any){
    const { title, text, icon, altIcon } = props

    return(
        <div className="card card--info text-highlight-dark grid gap-2.5">
            <header className="card__header grid grid-cols-[auto_1fr] gap-2.5 items-center">
                <div className="card__icon">
                    <img src={icon} alt={altIcon} />
                </div>
                <h3 className="card__title text-xl font-medium">{title}</h3>
            </header>
            <div className="card__content">
                <p className="card__text">{text}</p>
            </div>
        </div>
    )
}

export default InfoCard