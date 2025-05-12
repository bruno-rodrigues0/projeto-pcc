/* Icons */
import { ChevronRight } from "lucide-react"

function Details(props: any){
    const { title, text } = props

    return(
        <details className="details w-full">
            <summary className="datails__header flex justify-between items-center gap-3 py-4 px-6 rounded-lg text-background-light bg-highlight-light">
                <h3 className="details__title">{title}</h3>
                <ChevronRight/>
            </summary>
            <p className="details__text">{text}</p>
        </details>
    )
}

export default Details