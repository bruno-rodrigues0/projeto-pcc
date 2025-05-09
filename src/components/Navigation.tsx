/* Icons */
import { Menu, X } from "lucide-react"

function Navigation(){
    return(
        <header className="header header--navigation absolute text-background-light">
            <nav className="nav w-full flex justify-between items-center py-5">
                <div className="nav__menu-icon hidden">
                    <Menu size={25} strokeWidth={2}/>
                </div>
                <h1 className="nav__title poppins-medium text-xl">Educa Drones</h1>

                {/* Navigation */}
                <ul className="nav__list flex gap-5">
                    <li className="nav__item"><a href="#" className="nav__link">Início</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Quem Somos</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Nossa Equipe</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Eventos</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contato</a></li>
                </ul>

                {/* Mobile */}
                <div className="nav__mobile hidden">
                    <div className="nav__menu-icon">
                        <X size={25} strokeWidth={2}/>
                    </div>
                    
                    {/* Mobile Navigation */}
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Início</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Quem Somos</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Nossa Equipe</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Eventos</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Contato</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navigation