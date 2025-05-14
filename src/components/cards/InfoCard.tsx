function InfoCard(props: any){
    const { title, text, icon, altIcon } = props

    return(
        <div className="card card--info">
            <header className="card__header">
                <div className="card__icon">
                    <img src={icon} alt={altIcon} />
                </div>
                <h3>{title}</h3>
            </header>
            <div className="card__content">
                <p className="card__text">{text}</p>
            </div>
        </div>
    )
}

export default InfoCard