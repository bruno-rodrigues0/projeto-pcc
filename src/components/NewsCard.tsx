function NewsCard(props){
    const {title, link, img, altImg, date} = props

    return(
        <a className="card card--news flex flex-col gap-1.5" href={link}>
            <div className="bg-[#D9E7F2] w-fit py-1 px-2 rounded-sm">
                <p className="card__date poppins-light text-highlight-light text-[10px]">{date}</p>
            </div>
            <img className="card__image" src={img} alt={altImg} />
            <header className="card__header">
                <h3 className="card__title text-sm">{title}</h3>
            </header>
        </a>
    )
}

export default NewsCard