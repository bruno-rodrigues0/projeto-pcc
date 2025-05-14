/* Icons */
import { ChevronRight } from "lucide-react"

function Details(props: any){
    const { title, text } = props

    return(
        <details className="details border-highlight-light">
            <summary className="datails__header cursor-pointer text-background-light bg-highlight-light">
                <h3 className="details__title ">{title}</h3>
                <div className="details__icon transition-transform">
                    <ChevronRight/>
                </div>
            </summary>
            <p className="details__text p-5">{text}</p>
        </details>
    )
}

export default Details