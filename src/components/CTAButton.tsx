function CTAButton(props){
    const { link, text } = props

    return(
        <a className="uppercase" href={link}>
            {text}
        </a>
    )
}

export default CTAButton