function NewsCard(props){
    const {title, link, img, altImg, date} = props

    return(
        <a className="card card--news" href={link}>
            <div>
                <p className="card__date">{date}</p>
            </div>
            <img className="card__image" src={img} alt={altImg} />
            <header className="card__header">
                <h3 className="card__title">{title}</h3>
            </header>
        </a>
    )
}

export default NewsCard