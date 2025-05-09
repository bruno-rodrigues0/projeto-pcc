/* Icons */
import { ChevronRight } from "lucide-react"

function Details(props: any){
    const { title, text } = props

    return(
        <div className="details w-full">
            <header className="datails__header flex justify-between items-center gap-3 py-4 px-6 rounded-lg text-background-light bg-highlight-light">
                <h3 className="details__title">{title}</h3>
                <ChevronRight/>
            </header>
            <p className="details__text">{text}</p>
        </div>
    )
}

export default Details