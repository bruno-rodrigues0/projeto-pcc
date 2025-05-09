function CTAButton(props){
    const { link, text} = props

    return(
        <a className="button button--cta uppercase" href={link}>
            {text}
        </a>
    )
}

export default CTAButton