/* Routes */
import { Link } from 'react-router';

function CTAButton(props: any){
    const { link, text, target} = props

    return(
        <Link to={link} target={target} className="button button--cta uppercase">
            {text}
        </Link>
    )
}

export default CTAButton