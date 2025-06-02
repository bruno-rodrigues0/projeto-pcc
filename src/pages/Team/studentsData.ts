/* Interface */
import type Member from "./memberInterface";


const students: Member[] = [
    {
        id: 1,
        name: 'Gabriel Montalvão Santos',
        description: 'Técnico em informática para a Internet (incompleto)',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: '<Linkedin />',
                link: 'www.linkedin.com/in/gabrielmontalvaosantos',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: '<FileUser />',
                link: 'http://lattes.cnpq.br/6885978171378349',
            },
        ],
    },
    {
        id: 2,
        name: 'Ana Júlia da Silva Almeida',
        description: 'Análise e Desenvolvimento de Sistemas',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: '<Linkedin />',
                link: 'https://www.linkedin.com/in/anajulia-almeidaa/',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: '<FileUser />',
                link: 'https://lattes.cnpq.br/9889140718302743',
            },
        ],
    },
    {
        id: 3,
        name: 'Rian Cesar Oliveira Souza',
        description: 'Técnico em informática para a Internet',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: '<Linkedin />',
                link: '',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: '<FileUser />',
                link: 'http://lattes.cnpq.br/4346229364998441',
            },
        ],
    },
    {
        id: 4,
        name: 'Lívia Alkimim dos Santos',
        description: 'Análise e Desenvolvimento de Sistemas',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: '<Linkedin />',
                link: 'https://www.linkedin.com/in/l%C3%ADvia-alkimim-dos-santos-b50399304/',
            },
        ],
    },
    {
        id: 5,
        name: 'Sarah Victoria Soares Farias',
        description: 'Técnico em informática para a Internet (incompleto)',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Currículo Lattes',
                icon: '<FileUser />',
                link: 'http://lattes.cnpq.br/4089408942488330',
            },
        ],
    },
    {
        id: 6,
        name: 'Luiz Flávio Rodrigues Silva',
        description: 'Técnico em informática para a Internet (incompleto)',
        picture: '',
        links: [
            {
                id: 1,
                type: 'GitHub',
                icon: '<Linkedin />',
                link: 'https://github.com/flA09VIO',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: '<FileUser />',
                link: 'https://lattes.cnpq.br/2883774366715128',
            },
        ],
    },
    {
        id: 7,
        name: 'Jeovana Miranda Souza',
        description: 'Técnico em Informática para Internet (Completo) e Superior em Análise e Desenvolvimento de Sistemas (Incompleto)',
        picture: '',
        links: [
            {
                id: 1,
                type: 'Linkedin',
                icon: '<Linkedin />',
                link: 'https://www.linkedin.com/in/jeovana-miranda-souza-677994220/',
            },
            {
                id: 2,
                type: 'Currículo Lattes',
                icon: '<FileUser />',
                link: 'http://lattes.cnpq.br/8258499958307339',
            },
        ],
    },
];

export default students