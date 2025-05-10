/* Icons */
import { Menu, X } from "lucide-react"

/* Hooks */
import { useRef } from "react"

function Navigation(){
    const navRef = useRef<HTMLDivElement>(null)
    
    const ToggleNavigation = () => {
        if(navRef.current){
            return navRef.current.classList.toggle('is-active')
        }
    }

    return(
        <header className="header header--navigation absolute text-background-light">
            <nav className="nav w-full flex justify-between items-center py-5">
                <div className="nav__menu-icon md:hidden" onClick={ToggleNavigation}>
                    <Menu size={25} strokeWidth={2}/>
                </div>
                <h1 className="nav__title poppins-medium text-xl">Educa Drones</h1>

                {/* Navigation */}
                <ul className="nav__list hidden gap-5 md:flex">
                    <li className="nav__item"><a href="#" className="nav__link">Início</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Quem Somos</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Nossa Equipe</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Eventos</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contato</a></li>
                </ul>

                {/* Mobile */}
                <div ref={navRef} className="nav__mobile fixed top-0 left-0 w-[90vw] pl-[5%] pt-5 h-lvh z-10 bg-background-light text-dark flex-col gap-6 transition-all duration-500 -translate-x-[90vw] lg:hidden">
                    <div className="nav__menu-icon" onClick={ToggleNavigation}>
                        <X size={25} strokeWidth={2}/>
                    </div>
                    
                    {/* Mobile Navigation */}
                    <ul className="nav__list grid gap-3">
                        <li onClick={ToggleNavigation} className="nav__item"><a href="#" className="nav__link">Início</a></li>
                        <li onClick={ToggleNavigation} className="nav__item"><a href="#" className="nav__link">Quem Somos</a></li>
                        <li onClick={ToggleNavigation} className="nav__item"><a href="#" className="nav__link">Nossa Equipe</a></li>
                        <li onClick={ToggleNavigation} className="nav__item"><a href="#" className="nav__link">Eventos</a></li>
                        <li onClick={ToggleNavigation} className="nav__item"><a href="#" className="nav__link">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navigation