function MemberCard(props){
    const { name, description, picture, links } = props

    return(
        <div className="card card--member w-full grid gap-2">
            <picture className="">
                <img className="w-full aspect-square object-cover bg-gray-400" src={picture} alt={`Foto de ${name}`} />
            </picture>
            <div className="grid gap-2.5 text-dark">
                <header className="bg-amber-200">
                    <h3 className="">{name}</h3>
                    <p className="text-light text-xs">{description}</p>
                </header>
                <div className=" flex gap-2.5">
                    {links.map((link) => (
                        <a target="_blank" href={link.link}>
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MemberCard