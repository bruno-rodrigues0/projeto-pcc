/* Rotas */
import { Link } from 'react-router';

/* Icons */
import { Menu, X } from "lucide-react"

/* Hooks */
import { useRef } from "react"

function Navigation(props: any){
    const { type } = props

    const navRef = useRef<HTMLDivElement>(null)
    
    const ToggleNavigation = () => {
        if(navRef.current){
            return navRef.current.classList.toggle('is-active')
        }
    }

    return(
        <header className={`header header--navigation ${'fixed' == type ? 'absolute text-background-light' : 'text-highlight-dark'} `}>
            <nav className="nav w-full flex justify-between items-center py-5">
                <div className="nav__menu-icon md:hidden" onClick={ToggleNavigation}>
                    <Menu size={25} strokeWidth={2}/>
                </div>
                <h1 className="nav__title poppins-medium text-xl">Educa Drones</h1>

                {/* Navigation */}
                <ul className="nav__list hidden gap-5 md:flex">
                    <li className="nav__item"><Link to="/" className="nav__link">Início</Link></li>
                    <li className="nav__item"><Link to="/sobre" className='nav__link'>Quem Somos</Link></li>
                    <li className="nav__item"><Link to="/integrantes" className="nav__link">Nossa Equipe</Link></li>
                    <li className="nav__item"><a href='#contato' className="nav__link">Contato</a></li>
                </ul>

                {/* Mobile */}
                <div ref={navRef} className="nav__mobile fixed top-0 left-0 w-[90vw] pl-[5%] pt-5 h-lvh z-10 bg-background-light text-dark flex-col gap-6 transition-all duration-500 -translate-x-[90vw] lg:hidden">
                    <div className="nav__menu-icon" onClick={ToggleNavigation}>
                        <X size={25} strokeWidth={2}/>
                    </div>
                    
                    {/* Mobile Navigation */}
                    <ul className="nav__list grid gap-3">
                    <li className="nav__item"><Link to="/" className="nav__link">Início</Link></li>
                    <li className="nav__item"><Link to="/sobre" className='nav__link'>Quem Somos</Link></li>
                    <li className="nav__item"><Link to="/integrantes" className="nav__link">Nossa Equipe</Link></li>
                    <li className="nav__item " onClick={ToggleNavigation}><a href='#contato' className="nav__link">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navigation