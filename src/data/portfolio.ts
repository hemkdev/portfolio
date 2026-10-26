export const PERSON = {
    name: "Lucas Hemkemeier",
    email: "lucas.hemkemeier007@gmail.com",
    github: "https://github.com/hemkdev",
    avatar: "https://github.com/hemkdev.png",
    linkedin: "https://www.linkedin.com/in/hemkemeier",
    location: { city: "Joinville", region: "SC", country: "BR" },
};

const REPO = {
    racha: "https://github.com/hemkdev/racha-api",
    noar: "https://github.com/hemkdev/noar-badge",
    tremzz: "https://github.com/hemkdev/tremzz",
    tremzzIot: "https://github.com/hemkdev/tremzz-iot",
    folio: "https://github.com/miguelrcha/folio",
    timezonefinder: "https://github.com/jannikmi/timezonefinder",
};

const PROD = {
    racha: "https://racha.hemk.dev/api/docs/",
    noar: "https://status.hemk.dev",
};

const HEALTH = {
    racha: "https://racha.hemk.dev/health/",
    folio: "https://meufolio.dev",
};

// TODO: Tino entra quando estiver no ar (deploy na VM Oracle + página de produto).

export type Lang = "pt" | "en";

export type Link = { label: string; url: string };

export type Project = {
    title: string;
    description: string;
    stack?: string[];
    status?: string;
    links: Link[];
};

export type Content = {
    meta: { title: string; description: string };
    role: string;
    about: string;
    ui: { email: string; themeToDark: string; themeToLight: string; langSwitch: string };
    cv: Link;
    sections: Record<"projects" | "openSource" | "experience" | "skills" | "education", string>;
    projects: Project[];
    openSource: Project[];
    experience: { role: string; company: string; period: string; note?: string; bullets?: string[] }[];
    skills: { label: string; items: string[] }[];
    education: { degree: string; institution: string; period: string }[];
};

// Record<Lang, Content> garante a paridade PT/EN em tempo de compilação
export const CONTENT: Record<Lang, Content> = {
    pt: {
        meta: {
            title: "Lucas Hemkemeier — Desenvolvedor Backend",
            description: "Desenvolvedor backend com Python e Django, em Joinville, SC.",
        },
        role: "Desenvolvedor Backend Júnior · Joinville, SC",
        about: "Desenvolvedor backend com Python e Django. Desde maio de 2026 respondo pelo sistema de gestão em produção de uma empresa de Joinville, do modelo de dados ao deploy. Técnico em Desenvolvimento de Sistemas pelo SENAI e cursando Engenharia de Software na Católica SC. Hoje estudando Java e Spring Boot.",
        ui: {
            email: "E-mail",
            themeToDark: "Ativar tema escuro",
            themeToLight: "Ativar tema claro",
            langSwitch: "Switch to English",
        },
        cv: { label: "Baixar currículo", url: "/lucas-hemkemeier-curriculo-backend.pdf" },
        sections: {
            projects: "Projetos",
            openSource: "Open source",
            experience: "Experiência",
            skills: "Skills",
            education: "Formação",
        },
        projects: [
            {
                title: "racha-api",
                description: "API REST para locação de quadras esportivas: grade de horários do dia, compra de vários horários numa transação só, pedidos, paginação e filtros.",
                stack: ["Django", "PostgreSQL"],
                status: HEALTH.racha,
                links: [
                    { label: "repositório", url: REPO.racha },
                    { label: "documentação da API", url: PROD.racha },
                ],
            },
            {
                title: "noar-badge",
                description: "Selo de status ao vivo para README e sites: faz um GET no endpoint de saúde do app e mostra se ele está no ar e quanto tempo levou para responder. Roda na borda, com proteção contra SSRF em cada redirecionamento.",
                stack: ["TypeScript", "Cloudflare Workers", "Vitest"],
                links: [
                    { label: "repositório", url: REPO.noar },
                    { label: "status.hemk.dev", url: PROD.noar },
                ],
            },
            {
                title: "Tremzz",
                description: "Plataforma web de gestão de operações ferroviárias: rotas, usuários e comunicação em tempo real com sensores via MQTT. Projeto em equipe da formação técnica no SENAI, em que fui responsável pela modelagem de dados, pelo backend, pelas telas, pela integração MQTT e pela montagem dos sensores.",
                stack: ["PHP", "MySQL", "JavaScript", "MQTT"],
                links: [
                    { label: "repositório", url: REPO.tremzz },
                    { label: "repositório iot", url: REPO.tremzzIot },
                ],
            },
        ],
        openSource: [
            {
                title: "folio",
                description: "15 pull requests mergeados no folio, que gera portfólio e currículo a partir do perfil do GitHub: features, cobertura de testes, configuração de CI, tratamento de erro, correções de segurança e acessibilidade.",
                status: HEALTH.folio,
                links: [
                    { label: "meufolio.dev", url: "https://meufolio.dev" },
                    { label: "repositório", url: REPO.folio },
                ],
            },
            {
                title: "timezonefinder",
                description: "Biblioteca Python de fuso horário por coordenada, com cerca de 5 milhões de downloads mensais. 4 pull requests aceitos e 2 issues resolvidas, com crédito nominal no CHANGELOG: automação do pipeline de atualização dos dados de fronteira, da detecção de versão nova ao merge automático com a integração contínua aprovada.",
                links: [
                    { label: "repositório", url: REPO.timezonefinder },
                    { label: "CHANGELOG", url: `${REPO.timezonefinder}/blob/master/CHANGELOG.rst` },
                ],
            },
        ],
        experience: [
            {
                role: "Desenvolvedor Full-Stack (Django · Next.js)",
                company: "Origetec",
                period: "mai/2026 – presente",
                note: "Cargo interno: Integrador de IA",
                bullets: [
                    "Projetei e mantenho a API REST do sistema de gestão que integra diversas áreas da empresa, usado por mais de 30 pessoas, em Django e DRF, com autenticação JWT e regras de negócio numa camada de serviço.",
                    "Modelei o banco em PostgreSQL, com as regras críticas em constraints e bloqueio transacional onde há concorrência.",
                    "Montei o CI/CD no GitHub Actions e opero a produção: Docker, Nginx, VM Ubuntu, Cloudflare Tunnel e Sentry.",
                    "Integrei o sistema ao ERP legado por uma API própria, mantida como serviço separado.",
                ],
            },
            {
                role: "Aprendiz industrial (logística)",
                company: "Tupy S.A.",
                period: "mar–mai/2026",
            },
        ],
        skills: [
            { label: "Linguagens", items: ["Python", "SQL", "JavaScript", "TypeScript"] },
            { label: "Back-end", items: ["Django", "Django REST Framework", "APIs REST", "JWT", "tarefas assíncronas"] },
            { label: "Banco", items: ["PostgreSQL", "MySQL", "modelagem relacional"] },
            { label: "Testes", items: ["pytest", "factory-boy"] },
            { label: "Infra", items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Cloudflare"] },
            { label: "Front-end", items: ["Next.js", "React"] },
        ],
        education: [
            { degree: "Bacharelado em Engenharia de Software", institution: "Católica SC", period: "fev/2026 – dez/2029 · em curso" },
            { degree: "Técnico em Desenvolvimento de Sistemas", institution: "SENAI", period: "fev/2024 – dez/2025" },
        ],
    },
    en: {
        meta: {
            title: "Lucas Hemkemeier — Back-end Developer",
            description: "Back-end developer working with Python and Django, based in Joinville, Brazil.",
        },
        role: "Junior Back-end Developer · Joinville, Brazil",
        about: "Back-end developer working with Python and Django. Since May 2026 I have been responsible for a production management system at a company in Joinville, from the data model to deployment. Systems Development technician (SENAI) and Software Engineering student at Católica SC. Currently studying Java and Spring Boot.",
        ui: {
            email: "Email",
            themeToDark: "Switch to dark theme",
            themeToLight: "Switch to light theme",
            langSwitch: "Mudar para português",
        },
        cv: { label: "Download résumé", url: "/lucas-hemkemeier-resume-backend.pdf" },
        sections: {
            projects: "Projects",
            openSource: "Open source",
            experience: "Experience",
            skills: "Skills",
            education: "Education",
        },
        projects: [
            {
                title: "racha-api",
                description: "REST API for sports court rentals: daily time-slot grid, booking several slots in a single transaction, orders, pagination and filters.",
                stack: ["Django", "PostgreSQL"],
                status: HEALTH.racha,
                links: [
                    { label: "repository", url: REPO.racha },
                    { label: "API docs", url: PROD.racha },
                ],
            },
            {
                title: "noar-badge",
                description: "Live status badge for READMEs and websites: it sends a GET to the app's health endpoint and shows whether it is up and how long it took to answer. Runs at the edge, with SSRF protection on every redirect.",
                stack: ["TypeScript", "Cloudflare Workers", "Vitest"],
                links: [
                    { label: "repository", url: REPO.noar },
                    { label: "status.hemk.dev", url: PROD.noar },
                ],
            },
            {
                title: "Tremzz",
                description: "Web platform for railway operations management: routes, users and real-time communication with sensors over MQTT. Team project from the technical program at SENAI, where I was responsible for the data model, the back-end, the screens, the MQTT integration and the sensor assembly.",
                stack: ["PHP", "MySQL", "JavaScript", "MQTT"],
                links: [
                    { label: "repository", url: REPO.tremzz },
                    { label: "iot repository", url: REPO.tremzzIot },
                ],
            },
        ],
        openSource: [
            {
                title: "folio",
                description: "15 merged pull requests to folio, which generates a portfolio and résumé from a GitHub profile: features, test coverage, CI setup, error handling, security fixes and accessibility improvements.",
                status: HEALTH.folio,
                links: [
                    { label: "meufolio.dev", url: "https://meufolio.dev" },
                    { label: "repository", url: REPO.folio },
                ],
            },
            {
                title: "timezonefinder",
                description: "Python library for offline timezone lookup by coordinates, with around 5 million monthly downloads. 4 merged pull requests and 2 resolved issues, credited by name in the CHANGELOG: automation of the boundary-data update pipeline, from detecting a new release to auto-merging once CI passes.",
                links: [
                    { label: "repository", url: REPO.timezonefinder },
                    { label: "CHANGELOG", url: `${REPO.timezonefinder}/blob/master/CHANGELOG.rst` },
                ],
            },
        ],
        experience: [
            {
                role: "Full-Stack Developer (Django · Next.js)",
                company: "Origetec",
                period: "May 2026 – present",
                note: "Internal title: AI Integrator",
                bullets: [
                    "Designed and maintain the REST API for the company-wide management system, used by 30+ people across several departments, built with Django and DRF, JWT authentication and business rules in a dedicated service layer.",
                    "Modeled the PostgreSQL database, enforcing critical rules as constraints and using transactional locking where concurrency matters.",
                    "Built the CI/CD pipelines on GitHub Actions and run production: Docker, Nginx, Ubuntu VM, Cloudflare Tunnel and Sentry.",
                    "Integrated the system with the legacy ERP through a separate API service I wrote and maintain.",
                ],
            },
            {
                role: "Industrial Apprentice (Logistics)",
                company: "Tupy S.A.",
                period: "Mar–May 2026",
            },
        ],
        skills: [
            { label: "Languages", items: ["Python", "SQL", "JavaScript", "TypeScript"] },
            { label: "Back-end", items: ["Django", "Django REST Framework", "REST APIs", "JWT", "background tasks"] },
            { label: "Databases", items: ["PostgreSQL", "MySQL", "relational modeling"] },
            { label: "Testing", items: ["pytest", "factory-boy"] },
            { label: "Infrastructure", items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Cloudflare"] },
            { label: "Front-end", items: ["Next.js", "React"] },
        ],
        education: [
            { degree: "Bachelor's in Software Engineering", institution: "Católica SC", period: "Feb 2026 – Dec 2029 · in progress" },
            { degree: "Systems Development Technician", institution: "SENAI", period: "Feb 2024 – Dec 2025" },
        ],
    },
};
