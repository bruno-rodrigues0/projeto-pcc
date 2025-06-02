interface Links {
    id: number,
    type: string,
    icon: ReactElement,
    link: string,
}

interface Member {
    id: number,
    name: string,
    description: string,
    picture: string,
    links: Links[],
}

export default Member