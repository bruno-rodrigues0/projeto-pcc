import { Linkedin, FileUser, Github } from "lucide-react"

function MemberCard(props: any){
    const { name, description, picture, links } = props

    // Converter o objeto links para array de links com ícones
    const renderLinks = () => {
        if (!links) return null;
        
        const linkArray = [];
        
        if (links.linkedin) {
            linkArray.push({
                type: 'linkedin',
                url: links.linkedin,
                icon: <Linkedin size={16} />
            });
        }
        
        if (links.lattes) {
            linkArray.push({
                type: 'lattes',
                url: links.lattes,
                icon: <FileUser size={16} />
            });
        }
        
        if (links.github) {
            linkArray.push({
                type: 'github',
                url: links.github,
                icon: <Github size={16} />
            });
        }
        
        return linkArray.map((link, index) => (
            <a 
                key={index}
                target="_blank" 
                rel="noopener noreferrer"
                href={link.url}
                className="text-gray-600 hover:text-blue-600 transition-colors"
            >
                {link.icon}
            </a>
        ));
    }

    return(
        <div className="card card--member w-full grid gap-2">
            <picture className="">
                <img className="w-full aspect-square object-cover bg-gray-400" src={picture} alt={`Foto de ${name}`} />
            </picture>
            <div className="grid gap-2.5 text-dark">
                <header className="">
                    <h3 className="">{name}</h3>
                    <p className="text-light text-xs">{description}</p>
                </header>
                <div className="flex gap-2.5">
                    {renderLinks()}
                </div>
            </div>
        </div>
    )
}

export default MemberCard