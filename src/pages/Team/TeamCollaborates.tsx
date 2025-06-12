/* Interface */
import type {Member} from "./memberInterface";

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
        picture: 'public/imagens/pictures/members/collaborates/savio.jpg',
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
    {
        id: 4,
        name: 'Durval F. Sobrinho Junior',
        description: 'Análise e Desenvolvimento de Sistemas',
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
        id: 5,
        name: 'Rafael Gomes de Oliveira',
        description: 'Técnico em Informática para a Intenet',
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
        id: 6,
        name: 'Hauã Henri Simões dos Santos ',
        description: 'Ensino Médio (Incompleto)',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: <Linkedin />,
                link: 'https://www.linkedin.com/in/hau%C3%A3-henri-8699362b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: <FileUser />,
                link: 'https://lattes.cnpq.br/1557104178462285',
            },
        ],
    },
];

export default collaborates