/* Interface */
import type {Member} from "./memberInterface";

/* Icons */
import { Linkedin, FileUser } from "lucide-react"

const professors: Member[] = [
    {
        id: 1,
        name: 'Dr. Leandro Gonçalves dos Santos',
        description: 'Doutorado em Agronomia',
        picture: '',
        links: [
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: <FileUser />,
                link: 'http://lattes.cnpq.br/8752533416247049',
            },
        ],
    },
    {
        id: 2,
        name: 'Dr. Reinaldo Cotrim',
        description: '',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: <Linkedin />,
                link: '',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: <FileUser />,
                link: '',
            },
        ],
    },
    {
        id: 3,
        name: 'Fábio Lima',
        description: 'Doutorado em Agronomia',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: <Linkedin />,
                link: '',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: <FileUser />,
                link: '',
            },
        ],
    },
];

export default professors