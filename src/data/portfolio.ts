export const PERSON = {
    name: "Lucas Hemkemeier",
    email: "lucashemkemeierr@gmail.com",
    github: "https://github.com/hemkdev",
    avatar: "https://github.com/hemkdev.png",
    linkedin: "https://www.linkedin.com/in/hemkemeier",
    location: { city: "Joinville", region: "SC", country: "BR" },
};

const REPO = {
    racha: "https://github.com/hemkdev/racha-api",
    noar: "https://github.com/hemkdev/noar-badge",
    tino: "https://github.com/hemkdev/Tino",
    folio: "https://github.com/miguelrcha/folio",
    timezonefinder: "https://github.com/jannikmi/timezonefinder",
};

const PROD = {
    racha: "https://racha.hemk.dev/api/docs/",
    noar: "https://status.hemk.dev",
    tino: "https://discord.com/oauth2/authorize?client_id=1535474778180292628",
};

const HEALTH = {
    racha: "https://racha.hemk.dev/health/",
    folio: "https://meufolio.dev",
};

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
            description: "Desenvolvedor backend com Python, Django e IA aplicada, em Joinville, SC.",
        },
        role: "Desenvolvedor Backend Júnior · IA aplicada · Joinville, SC",
        about: "Desenvolvedor backend com Python e Django, com foco em IA aplicada. Sou o único dev da Origetec, onde construí e opero o sistema de gestão do modelo de dados ao deploy; técnico pelo SENAI e cursando Engenharia de Software na Católica SC.",
        ui: {
            email: "E-mail",
            themeToDark: "Ativar tema escuro",
            themeToLight: "Ativar tema claro",
            langSwitch: "Switch to English",
        },
        cv: { label: "Baixar currículo", url: "/lucas-hemkemeier-curriculo.pdf" },
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
                title: "Tino",
                description: "Finanças pessoais por conversa no Discord: você escreve o gasto como falaria (\"50 mercado, 30 uber\") e ele anota, categoriza e resume o mês. Núcleo independente do canal, dinheiro em centavos inteiros, toda query filtrada pela conta e valor fora do normal pedindo confirmação antes de gravar.",
                stack: ["Java", "PostgreSQL", "JDA", "Flyway"],
                links: [
                    { label: "repositório", url: REPO.tino },
                    { label: "adicionar ao Discord", url: PROD.tino },
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
                role: "Integrador de IA Pleno (Desenvolvedor Full-Stack)",
                company: "Origetec",
                period: "mai/2026 – presente",
                note: "Título interno; Trainee de mai a out/2026, promovido em 5 meses",
                bullets: [
                    "Reduzi a emissão de propostas comerciais de cerca de 4 horas para 10 minutos: a geração automatizada substituiu planilhas e um sistema legado e emite 100% das propostas de máquinas desde agosto de 2026.",
                    "Eliminei a digitação manual de preços nas cotações de compra com a API do Claude: o fornecedor envia PDF, planilha ou foto, o LLM extrai os dados validados por schema e o comprador exporta para o ERP.",
                    "Construí dois servidores MCP, um no sistema de gestão (116 ferramentas, OAuth 2.0) e outro na API do ERP, para agentes de IA consultarem dados e montarem cotações, propostas e vendas com as permissões do usuário. Toda escrita exige confirmação humana e é auditada.",
                    "Conduzo o ERP da Injepress, fundição do grupo, em Java 21, Spring Boot, PostgreSQL e Next.js. Está em fase de fundação e foi desenhado AI-first: conector MCP dentro da API e OAuth 2.1.",
                    "Projetei a API REST do sistema de gestão em Django REST Framework (JWT, camada de serviço, fila django-q2) e modelei o PostgreSQL com constraints e bloqueio de linha onde há concorrência. A integração com o ERP legado é uma API própria em FastAPI, com mais de 400 testes.",
                    "Montei o CI/CD no GitHub Actions (mais de 4.000 testes, imagens Docker) e opero a produção com Docker Compose, Nginx, Cloudflare Tunnel e Sentry: mais de 99,9% das requisições com sucesso e p95 abaixo de 250 ms.",
                ],
            },
            {
                role: "Aprendiz industrial (logística)",
                company: "Tupy S.A.",
                period: "mar–mai/2026",
            },
        ],
        skills: [
            { label: "Linguagens", items: ["Python", "Java", "SQL", "TypeScript", "JavaScript"] },
            { label: "Back-end", items: ["Django", "Django REST Framework", "FastAPI", "Spring Boot", "APIs REST", "JWT", "OAuth 2.0", "OpenAPI"] },
            { label: "IA aplicada", items: ["API do Claude", "saída estruturada", "MCP", "tool use"] },
            { label: "Banco", items: ["PostgreSQL", "MySQL", "modelagem relacional", "controle de concorrência"] },
            { label: "Testes", items: ["pytest", "TDD"] },
            { label: "Infra", items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Cloudflare", "Sentry"] },
            { label: "Front-end", items: ["Next.js", "React"] },
            { label: "Idiomas", items: ["português nativo", "inglês avançado (C1)"] },
        ],
        education: [
            { degree: "Bacharelado em Engenharia de Software", institution: "Católica SC", period: "fev/2026 – dez/2029 · em curso" },
            { degree: "Técnico em Desenvolvimento de Sistemas", institution: "SENAI", period: "fev/2024 – dez/2025" },
        ],
    },
    en: {
        meta: {
            title: "Lucas Hemkemeier — Back-end Developer",
            description: "Back-end developer working with Python, Django and applied AI, based in Joinville, Brazil.",
        },
        role: "Junior Back-end Developer · Applied AI · Joinville, Brazil",
        about: "Back-end developer working with Python and Django, focused on applied AI. I am the sole developer at Origetec, where I built and run the management system from the data model to deployment; Systems Development technician (SENAI) and Software Engineering student at Católica SC.",
        ui: {
            email: "Email",
            themeToDark: "Switch to dark theme",
            themeToLight: "Switch to light theme",
            langSwitch: "Mudar para português",
        },
        cv: { label: "Download CV", url: "/lucas-hemkemeier-resume.pdf" },
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
                title: "Tino",
                description: "Personal finance by conversation on Discord: you type an expense the way you would say it (\"50 groceries, 30 uber\") and it records, categorizes and summarizes the month. Channel-independent core, money as integer cents, every query scoped to the account, and unusual amounts ask for confirmation before saving.",
                stack: ["Java", "PostgreSQL", "JDA", "Flyway"],
                links: [
                    { label: "repository", url: REPO.tino },
                    { label: "add to Discord", url: PROD.tino },
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
        ],
        openSource: [
            {
                title: "folio",
                description: "15 merged pull requests to folio, which generates a portfolio and CV from a GitHub profile: features, test coverage, CI setup, error handling, security fixes and accessibility improvements.",
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
                role: "AI Integrator, Mid-level (Full-Stack Developer)",
                company: "Origetec",
                period: "May 2026 – present",
                note: "Internal title; Trainee from May to Oct 2026, promoted in 5 months",
                bullets: [
                    "Cut commercial proposal issuing from about 4 hours to 10 minutes: automated generation replaced spreadsheets and a legacy system, and has issued 100% of machine proposals since August 2026.",
                    "Eliminated manual price entry in purchase quotes with the Claude API: suppliers send a PDF, spreadsheet or photo, the LLM extracts schema-validated data and the buyer exports it to the ERP.",
                    "Built two MCP servers, one in the management system (116 tools, OAuth 2.0) and one in the ERP API, so AI agents can query data and draft quotes, proposals and sales with the user's permissions. Every write requires human confirmation and is audited.",
                    "Lead the ERP for Injepress, the group's foundry, in Java 21, Spring Boot, PostgreSQL and Next.js. It is in its foundation stage and designed AI-first: MCP connector inside the API and OAuth 2.1.",
                    "Designed the management system's REST API in Django REST Framework (JWT, service layer, django-q2 queue) and modeled PostgreSQL with constraints and row locking where concurrency matters. The legacy ERP integration is a separate FastAPI service with 400+ tests.",
                    "Built CI/CD on GitHub Actions (4,000+ tests, Docker images) and run production with Docker Compose, Nginx, Cloudflare Tunnel and Sentry: 99.9%+ successful requests and p95 under 250 ms.",
                ],
            },
            {
                role: "Industrial Apprentice (Logistics)",
                company: "Tupy S.A.",
                period: "Mar–May 2026",
            },
        ],
        skills: [
            { label: "Languages", items: ["Python", "Java", "SQL", "TypeScript", "JavaScript"] },
            { label: "Back-end", items: ["Django", "Django REST Framework", "FastAPI", "Spring Boot", "REST APIs", "JWT", "OAuth 2.0", "OpenAPI"] },
            { label: "Applied AI", items: ["Claude API", "structured output", "MCP", "tool use"] },
            { label: "Databases", items: ["PostgreSQL", "MySQL", "relational modeling", "concurrency control"] },
            { label: "Testing", items: ["pytest", "TDD"] },
            { label: "Infrastructure", items: ["Docker", "GitHub Actions", "Nginx", "Linux", "Cloudflare", "Sentry"] },
            { label: "Front-end", items: ["Next.js", "React"] },
            { label: "Spoken languages", items: ["Portuguese (native)", "English (advanced, C1)"] },
        ],
        education: [
            { degree: "Bachelor's in Software Engineering", institution: "Católica SC", period: "Feb 2026 – Dec 2029 · in progress" },
            { degree: "Systems Development Technician", institution: "SENAI", period: "Feb 2024 – Dec 2025" },
        ],
    },
};
