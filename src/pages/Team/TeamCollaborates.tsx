/* Interface */
import type Member from "./memberInterface";

/* Icons */
import { Linkedin, FileUser } from "lucide-react"

const collaborates: Member[] = [
    {
        id: 1,
        name: 'Gustavo da Silva Nascimento Costa',
        description: 'Técnico em informática para a Internet',
        picture: 'imagens/pictures/members/collaborates/gustavo.jpg',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: <Linkedin />,
                link: 'https://www.linkedin.com/in/gustavosncosta/',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: <FileUser />,
                link: 'https://lattes.cnpq.br/4638970324861784',
            },
        ],
    },
    {
        id: 2,
        name: 'Sávio Pessôa Afonso',
        description: 'Técnico em informática para a Internet',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: <Linkedin />,
                link: 'https://www.linkedin.com/in/savioomio/',
            },
            {
                id: 2,
                type: 'GitHub',
                icon: <FileUser />,
                link: 'https://github.com/savioomio',
            },
        ],
    },
    {
        id: 3,
        name: 'João Vitor Nascimento de Souza',
        description: 'Análise e Desenvolvimento de Sistemas',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: <Linkedin />,
                link: 'www.linkedin.com/in/joaovitornso',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: <FileUser />,
                link: 'http://lattes.cnpq.br/3091603062265689',
            },
        ],
    },
];

export default collaborates