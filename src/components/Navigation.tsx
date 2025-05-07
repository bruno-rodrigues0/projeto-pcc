/* Icons */
import { Menu, X } from "lucide-react"

function Navigation(){
    return(
        <header>
            <nav>
                <div>
                    <Menu size={25} strokeWidth={2}/>
                </div>
                <h1>Educa Drones</h1>

                {/* Navigation */}
                <ul>
                    <li className="nav__item"><a href="#" className="nav__link">Início</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Quem Somos</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Nossa Equipe</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Eventos</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contato</a></li>
                </ul>

                {/* Mobile */}
                <div>
                    <div>
                        <X size={25} strokeWidth={2}/>
                    </div>
                    
                    {/* Mobile Navigation */}
                    <ul>
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