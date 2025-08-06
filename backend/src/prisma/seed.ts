import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Seed news
  await prisma.news.createMany({
    data: [
      {
        title: 'ObaDrones: 1 Olimpíada Baiana de Drones',
        content: 'A primeira Olimpíada Baiana de Drones foi um grande sucesso, reunindo equipes de todo o estado da Bahia para competições emocionantes com drones. O evento promoveu a inovação tecnológica e o aprendizado na área de drones educacionais.',
        excerpt: 'Primeiro evento de competição de drones da Bahia reúne equipes de todo o estado.',
        image: 'imagens/news/OBaDrones.png',
        altImage: 'OBaDrones',
        published: true,
        featured: true,
      },
      {
        title: 'CROS 2025: Participação na 1 Conferência da Sociedade Brasileira de Robótica',
        content: 'Nossa equipe participou da primeira Conferência da Sociedade Brasileira de Robótica, apresentando nossos projetos inovadores na área de drones educacionais e robótica aplicada ao ensino.',
        excerpt: 'Participação na primeira conferência nacional de robótica.',
        image: 'imagens/news/cros.png',
        altImage: 'CROS 2025',
        published: true,
        featured: false,
      },
      {
        title: 'Drones IFSC 2024: Equipe Carcará Conquista o 3 lugar',
        content: 'A equipe Carcará do projeto Educa Drones conquistou o terceiro lugar na competição de drones do IFSC 2024, demonstrando excelência técnica e trabalho em equipe.',
        excerpt: 'Equipe Carcará conquista terceiro lugar em competição nacional.',
        image: 'imagens/news/IFSC.png',
        altImage: 'IFSC 2024',
        published: true,
        featured: true,
      },
      {
        title: 'IMAV 2024: Participação na International Micro Air Vehicle Conference and Competition',
        content: 'Participação internacional na IMAV 2024, representando o Brasil na conferência e competição internacional de micro veículos aéreos.',
        excerpt: 'Participação em evento internacional de micro veículos aéreos.',
        image: 'imagens/news/IMAV.png',
        altImage: 'IMAV 2024',
        published: true,
        featured: false,
      },
    ],
  });

  // Seed products
  await prisma.product.createMany({
    data: [
      {
        title: 'Kit Montagem Drone DIY',
        description: 'Kit completo para montagem de drone educacional. Inclui todas as peças necessárias, manual de instruções e acesso a plataforma online de suporte.',
        price: 899.00,
        image: '/imagens/pictures/formulaDrones/montagem.jpg',
        altImage: 'Kit de montagem de drone',
        category: 'Kits',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-3089147842-kit-drone-montagem-educacional-completo-diy-para-escolas-_JM',
        available: true,
        featured: true,
      },
      {
        title: 'Drone FPV Racing Kit',
        description: 'Kit completo para drone de corrida FPV com câmera e óculos inclusos. Perfeito para competições e diversão.',
        price: 1299.00,
        image: '/imagens/pictures/formulaDrones/todos-banner.jpg',
        altImage: 'Kit drone FPV racing',
        category: 'Kits',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-2849137456-drone-fpv-racing-kit-completo-camera-oculos-controle-_JM',
        available: true,
        featured: true,
      },
      {
        title: 'Controlador de Voo Programável',
        description: 'Controlador avançado com interface de programação visual. Permite programar missões autônomas e controlar múltiplos sensores.',
        price: 450.00,
        image: '/imagens/pictures/formulaDrone.png',
        altImage: 'Controlador programável',
        category: 'Acessórios',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-3156789234-controlador-voo-programavel-pixhawk-missoes-autonomas-_JM',
        available: true,
        featured: false,
      },
      {
        title: 'Câmera Gimbal 4K Profissional',
        description: 'Câmera ultra HD com estabilizador gimbal de 3 eixos. Perfeita para fotografia aérea profissional e filmagens.',
        price: 750.00,
        image: '/imagens/pictures/cros.jpg',
        altImage: 'Câmera 4K com gimbal',
        category: 'Acessórios',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-2967432189-camera-drone-4k-gimbal-3-eixos-estabilizador-profissional-_JM',
        available: true,
        featured: true,
      },
      {
        title: 'Simulador de Voo Profissional',
        description: 'Software de simulação realística para treinar pilotagem sem riscos. Compatible com diversos modelos de controle remoto.',
        price: 199.00,
        image: '/imagens/pictures/preIMAV-testes.png',
        altImage: 'Simulador de voo',
        category: 'Software',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-3201567890-simulador-voo-drone-realtime-treinamento-pilotagem-pc-_JM',
        available: true,
        featured: false,
      },
      {
        title: 'Software de Mapeamento Aéreo',
        description: 'Solução completa para criação de mapas e modelos 3D a partir de imagens aéreas. Inclui processamento em nuvem.',
        price: 399.00,
        image: '/imagens/pictures/MCD-petrolina.jpg',
        altImage: 'Software de mapeamento',
        category: 'Software',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-3089674532-software-mapeamento-aereo-3d-processamento-nuvem-drones-_JM',
        available: true,
        featured: false,
      },
      {
        title: 'Bateria Lítio Alta Performance',
        description: 'Bateria de alta capacidade com sistema de gerenciamento inteligente. Autonomia de até 45 minutos de voo contínuo.',
        price: 320.00,
        image: '/imagens/pictures/leo-piloto.jpg',
        altImage: 'Bateria profissional',
        category: 'Acessórios',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-2934578123-bateria-litio-drone-alta-capacidade-45min-voo-profissional-_JM',
        available: true,
        featured: false,
      },
      {
        title: 'Kit Educacional Básico',
        description: 'Kit perfeito para escolas e iniciantes. Inclui drone desmontável, material didático completo e curso online gratuito.',
        price: 599.00,
        image: '/imagens/pictures/mnr.jpg',
        altImage: 'Kit educacional básico',
        category: 'Kits',
        mercadoLivreUrl: 'https://produto.mercadolivre.com.br/MLB-3145628907-kit-educacional-drone-escolas-iniciantes-curso-online-_JM',
        available: true,
        featured: true,
      },
    ],
  });

  // Seed team members - DADOS REAIS
  await prisma.teamMember.createMany({
    data: [
      // Professores
      {
        name: 'Dr. Leandro Gonçalves dos Santos',
        description: 'Doutorado em Agronomia',
        picture: 'imagens/pictures/members/professors/Leandro.JPG',
        role: 'PROFESSOR',
        active: true,
        links: JSON.stringify({
          lattes: 'http://lattes.cnpq.br/8752533416247049'
        }),
      },
      {
        name: 'Dr. Reinaldo Cotrim',
        description: 'Doutorado em Ciência da Computação',
        picture: '',
        role: 'PROFESSOR',
        active: true,
        links: JSON.stringify({
          linkedin: '',
          lattes: ''
        }),
      },
      {
        name: 'Fábio Lima',
        description: '...',
        picture: '',
        role: 'PROFESSOR',
        active: true,
        links: JSON.stringify({
          linkedin: '',
          lattes: ''
        }),
      },
      
      // Estudantes
      {
        name: 'Gabriel Montalvão Santos',
        description: 'Técnico em informática para a Internet (incompleto)',
        picture: '',
        role: 'STUDENT',
        active: true,
        links: JSON.stringify({
          linkedin: 'www.linkedin.com/in/gabrielmontalvaosantos',
          lattes: 'http://lattes.cnpq.br/6885978171378349'
        }),
      },
      {
        name: 'Ana Júlia da Silva Almeida',
        description: 'Análise e Desenvolvimento de Sistemas (incompleto)',
        picture: '',
        role: 'STUDENT',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/anajulia-almeidaa/',
          lattes: 'https://lattes.cnpq.br/9889140718302743'
        }),
      },
      {
        name: 'Rian Cesar Oliveira Souza',
        description: 'Análise e Desenvolvimento de Sistemas (incompleto)',
        picture: '',
        role: 'STUDENT',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/rian-cesar-61a12b217/',
          lattes: 'https://lattes.cnpq.br/2359887482304923'
        }),
      },
      {
        name: 'Bruno Almeida Rodrigues',
        description: 'Análise e Desenvolvimento de Sistemas',
        picture: 'imagens/pictures/members/students/bruno.jpg',
        role: 'STUDENT',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/bruno-rodrigues-2b8701252/',
          github: 'https://github.com/bruno-rodrigues0',
          lattes: 'http://lattes.cnpq.br/8629008691522950'
        }),
      },
      {
        name: 'Brenda Vitória Teixeira Café',
        description: 'Técnico em informática para a Internet (incompleto)',
        picture: '',
        role: 'STUDENT',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/brenda-vit%C3%B3ria-48b8b2259/',
          lattes: 'https://lattes.cnpq.br/8866936568701318'
        }),
      },
      {
        name: 'Isaque Oliveira Santos',
        description: 'Técnico em informática para a Internet (incompleto)',
        picture: '',
        role: 'STUDENT',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/isaque-oliveira-santos-84a8a8253/',
          lattes: 'https://lattes.cnpq.br/8866936568701318'
        }),
      },
      
      // Colaboradores
      {
        name: 'Gustavo da Silva Nascimento Costa',
        description: 'Técnico em informática para a Internet',
        picture: 'imagens/pictures/members/collaborates/gustavo.jpg',
        role: 'COLLABORATOR',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/gustavosncosta/',
          lattes: 'https://lattes.cnpq.br/4638970324861784'
        }),
      },
      {
        name: 'Sávio Pessôa Afonso',
        description: 'Técnico em informática para a Internet',
        picture: 'public/imagens/pictures/members/collaborates/savio.jpg',
        role: 'COLLABORATOR',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/savioomio/',
          github: 'https://github.com/savioomio'
        }),
      },
      {
        name: 'João Vitor Nascimento de Souza',
        description: 'Técnico em informática para a Internet',
        picture: '',
        role: 'COLLABORATOR',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/joao-vitor-nascimento-de-souza/',
          lattes: 'https://lattes.cnpq.br/5043423299537988'
        }),
      },
      {
        name: 'Jander Moreira Borges',
        description: 'Técnico em informática para a Internet',
        picture: '',
        role: 'COLLABORATOR',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/jander-moreira-borges-5a5b85252/',
          lattes: 'https://lattes.cnpq.br/5716119528823648'
        }),
      },
      {
        name: 'Luiz Otávio Souza Teixeira',
        description: 'Técnico em informática para a Internet',
        picture: '',
        role: 'COLLABORATOR',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/luiz-ot%C3%A1vio-souza-teixeira-508b60253/',
          lattes: 'https://lattes.cnpq.br/1734701088041113'
        }),
      },
      {
        name: 'Rafael Rodrigues Cerqueira',
        description: 'Técnico em informática para a Internet',
        picture: 'imagens/pictures/members/collaborates/rafael.jpg',
        role: 'COLLABORATOR',
        active: true,
        links: JSON.stringify({
          linkedin: 'https://www.linkedin.com/in/rafael-rodrigues-cerqueira-370a17229/',
          lattes: 'https://lattes.cnpq.br/2998481808088374'
        }),
      },
    ],
  });

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
