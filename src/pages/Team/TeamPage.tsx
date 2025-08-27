import { useState, useEffect } from "react";
import Footer from "../../components/Footer"
import Navigation from "../../components/Navigation"
import MemberCard from "../../components/cards/MemberCard"

interface TeamMember {
    id: string;
    name: string;
    description?: string;
    picture?: string;
    role: 'PROFESSOR' | 'STUDENT' | 'COLLABORATOR';
    active: boolean;
    links?: Record<string, string>;
}

function TeamPage(){
    const [professors, setProfessors] = useState<TeamMember[]>([]);
    const [students, setStudents] = useState<TeamMember[]>([]);
    const [collaborates, setCollaborates] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3001'}/api/team`);
                
                if (response.ok) {
                    const data = await response.json();
                    const members = data.data || data; // Aceita tanto {data: []} quanto []
                    
                    // Processar os dados da API e filtrar ativos
                    const processedMembers = members
                        .filter((member: any) => member.active) // Só membros ativos
                        .map((member: any) => ({
                            id: member.id.toString(),
                            name: member.name,
                            description: member.description || '',
                            picture: member.picture || '',
                            role: member.role,
                            active: member.active,
                            links: member.links ? JSON.parse(member.links) : {}
                        }));
                    
                    // Separar por categoria
                    setProfessors(processedMembers.filter((member: TeamMember) => member.role === 'PROFESSOR'));
                    setStudents(processedMembers.filter((member: TeamMember) => member.role === 'STUDENT'));
                    setCollaborates(processedMembers.filter((member: TeamMember) => member.role === 'COLLABORATOR'));
                } else {
                    throw new Error('Failed to fetch team members');
                }
            } catch (error) {
                console.error('Error fetching team members:', error);
                // Em caso de erro, usar dados de fallback dos arquivos originais
                try {
                    const { default: professorsData } = await import('./TeamProfessors');
                    const { default: studentsData } = await import('./TeamStudents');
                    const { default: collaboratesData } = await import('./TeamCollaborates');
                    
                    // Converter formato antigo para novo
                    setProfessors(professorsData.map((p: any) => ({
                        id: p.id.toString(),
                        name: p.name,
                        description: p.description,
                        picture: p.picture,
                        role: 'PROFESSOR' as const,
                        active: true,
                        links: p.links?.reduce((acc: any, link: any) => {
                            if (link.type === 'Linkedin') acc.linkedin = link.link;
                            if (link.type === 'Currículo Lattes') acc.lattes = link.link;
                            return acc;
                        }, {})
                    })));
                    
                    setStudents(studentsData.map((s: any) => ({
                        id: s.id.toString(),
                        name: s.name,
                        description: s.description,
                        picture: s.picture,
                        role: 'STUDENT' as const,
                        active: true,
                        links: s.links?.reduce((acc: any, link: any) => {
                            if (link.type === 'Linkedin') acc.linkedin = link.link;
                            if (link.type === 'Currículo Lattes') acc.lattes = link.link;
                            if (link.type === 'GitHub') acc.github = link.link;
                            return acc;
                        }, {})
                    })));
                    
                    setCollaborates(collaboratesData.map((c: any) => ({
                        id: c.id.toString(),
                        name: c.name,
                        description: c.description,
                        picture: c.picture,
                        role: 'COLLABORATOR' as const,
                        active: true,
                        links: c.links?.reduce((acc: any, link: any) => {
                            if (link.type === 'Linkedin') acc.linkedin = link.link;
                            if (link.type === 'Currículo Lattes') acc.lattes = link.link;
                            if (link.type === 'GitHub') acc.github = link.link;
                            return acc;
                        }, {})
                    })));
                } catch (fallbackError) {
                    console.error('Error loading fallback data:', fallbackError);
                    // Se nem o fallback funcionar, deixar arrays vazios
                    setProfessors([]);
                    setStudents([]);
                    setCollaborates([]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    if (loading) {
        return (
            <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
                <Navigation/>
                <main className="main">
                    <div className="section py-20 text-center">
                        <p>Carregando equipe...</p>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }

    return(
        <div className="w-full min-h-[100lvh] poppins-regular text-base text-dark">
            <Navigation/>
            <main className="main">
                <section className="main__background text-background-light bg-highlight-light py-14">
                    <section className="section section--hero">
                        <article className="article flex flex-col justify-center gap-1.5">
                            <h1 className="article__title text-4xl font-extrabold">Nossa Equipe</h1>
                            <p className="article__text text-xl">Aqueles que fazem o projeto acontecer</p>
                        </article>
                    </section>
                </section>

                {/* Professors */}
                <section className="main__background py-14 grid gap-8">
                    <header className="section__header">
                        <h2 className="section__title text-center text-3xl font-bold">Pesquisadores</h2>
                    </header>

                    <section className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-8">
                        {professors.map((member) => (
                            <MemberCard 
                                key={member.id}
                                name={member.name} 
                                description={member.description || ''} 
                                picture={member.picture || ''} 
                                links={member.links || {}}
                            /> 
                        ))}
                    </section>
                </section>

                {/* Students */}
                <section className="main__background py-14 grid gap-8">
                    <header className="section__header">
                        <h2 className="section__title text-center text-3xl font-bold">Estudantes</h2>
                    </header>

                    <section className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-8">
                        {students.map((member) => (
                            <MemberCard 
                                key={member.id}
                                name={member.name} 
                                description={member.description || ''} 
                                picture={member.picture || ''} 
                                links={member.links || {}}
                            /> 
                        ))}
                    </section>
                </section>

                {/* Collaborators */}
                <section className="main__background py-14 grid gap-8">
                    <header className="section__header">
                        <h2 className="section__title text-center text-3xl font-bold">Colaboradores Externos</h2>
                    </header>

                    <section className="section__cards grid grid-cols-1 xmd:grid-cols-2 md:grid-cols-3 gap-8">
                        {collaborates.map((member) => (
                            <MemberCard 
                                key={member.id}
                                name={member.name} 
                                description={member.description || ''} 
                                picture={member.picture || ''} 
                                links={member.links || {}}
                            /> 
                        ))}
                    </section>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default TeamPage