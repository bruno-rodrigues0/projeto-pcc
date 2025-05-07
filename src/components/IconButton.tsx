function IconButton(props){
    const { link, icon, text } = props

    return(
        <a href={link}>
            {icon}
            <span>{text}</span>
        </a>
    )
}

export default IconButton