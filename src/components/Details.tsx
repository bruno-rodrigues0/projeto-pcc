/* Icons */
import { ChevronRight } from "lucide-react"

function Details(props){
    const { title, text } = props

    return(
        <div className="details">
            <header className="datails__header">
                <h3 className="details__title">{title}</h3>
                <ChevronRight/>
            </header>
            <p className="details__text">{text}</p>
        </div>
    )
}

export default Details