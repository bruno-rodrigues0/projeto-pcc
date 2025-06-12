type Links = {
    id: number,
    type: string,
    icon: any,
    link: string,
}

export type Member = {
    id: number,
    name: string,
    description: string,
    picture: string,
    links: Links[],
}