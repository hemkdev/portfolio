// Dados pessoais

export const PERSON = {
    name: "Lucas Hemkemeier",
    title: "Junior Backend Developer",
    bio: "Olá! Sou um desenvolvedor backend apaixonado por criar soluções eficientes e escaláveis. Com experiência em Node.js, Express e bancos de dados relacionais, estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Estou aberto a oportunidades de trabalho e projetos desafiadores. Vamos construir algo incrível juntos!",
    avatar: "https://github.com/hemkdev.png",
    email: "lucas.hemkemeier007@gmail.com",
    social: [
        { 
        name: "GitHub",
        url: "https://github.com/hemkdev",
        icon: "github",
        },
        {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lucas-hemkemeier",
        icon: "linkedin",
        },
        {
        name: "Email",
        url: "mailto:lucas.hemkemeier007@gmail.com",
        icon: "mail",
        },
    ],
};

export const WORK_EXPERIENCE = [
    {
        company: "Empresa XYZ",
        role: "Estagiário de Desenvolvimento Backend",
        Period: "Junho 2023 - Dezembro 2023",
        description: "Desenvolvimento de APIs RESTful utilizando Node.js e Express. Participação em projetos de integração com bancos de dados relacionais e otimização de consultas SQL. Colaboração com equipes multidisciplinares para entrega de soluções eficientes.",
        tags: ["Node.js", "Express", "SQL", "APIs RESTful"],
        highlights: [
            "Desenvolvimento de uma API para gerenciamento de usuários, resultando em uma redução de 30% no tempo de resposta.",
            "Implementação de autenticação JWT, aumentando a segurança da aplicação.",
        ],
    },
];

export const FORMATION = [
    {
        institution: "Universidade ABC",
        degree: "Bacharelado em Ciência da Computação",
        period: "Março 2020 - Dezembro 2024",
        description: "Durante minha graduação, adquiri conhecimentos sólidos em algoritmos, estruturas de dados, desenvolvimento de software e bancos de dados. Participei de projetos acadêmicos que envolveram o desenvolvimento de aplicações web e mobile, utilizando tecnologias como JavaScript, React e Node.js.",
        tags: ["Bacharelado", "Ciência da Computação", "Desenvolvimento de Software"],
    },
];

export const PROJECTS = [
    {
        title: "Projeto de Gerenciamento de Tarefas",
        description: "Desenvolvimento de uma aplicação web para gerenciamento de tarefas utilizando React para o frontend e Node.js com Express para o backend. A aplicação permite aos usuários criar, editar e excluir tarefas, além de organizar as tarefas em categorias.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        url: "https://github.com/hemkdev/task-manager"
    },
    {
        title: "API de Blog",
        description: "Criação de uma API RESTful para um sistema de blog utilizando Node.js e Express. A API permite operações CRUD para posts, comentários e usuários, além de implementar autenticação JWT para segurança.",
        tags: ["Node.js", "Express", "JWT", "SQL"],
        url: "https://github.com/hemkdev/blog-api"
    },
];

export const SKILLS = [
    "Node.js",
    "Express",
    "SQL",
    "MongoDB",
    "JavaScript",
    "Git",
    "Docker",
    "Testes Unitários",
];

export const ABOUT_TEXT = "I'm a software developer with a passion for creating innovative solutions. I have experience in various programming languages and frameworks, and I enjoy working on projects that challenge me to learn and grow.";