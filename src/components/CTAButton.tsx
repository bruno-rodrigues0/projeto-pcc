function CTAButton(props){
    const { link, text} = props

    return(
        <a target="_blank" className="button button--cta uppercase" href={link}>
            {text}
        </a>
    )
}

export default CTAButton