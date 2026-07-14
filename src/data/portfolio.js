// Dados pessoais

export const PERSON = {
    name: "Lucas Hemkemeier",
    title: "Fullstack Developer",
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
        company: "Origetec",
        role: "Fullstack Developer",
        Period: "May 2026 - Present",
        description: "I own features end to end — understanding the problem behind the request, designing the solution, building it with TypeScript, Node and Python, and running it in production with Docker, GitHub Actions and Cloudflare. My daily work includes ERP API integrations and internal automation tools used by the team every day.",
        tags: ["TypeScript", "Node.js", "Python", "Docker", "GitHub Actions", "Cloudflare"],
    },
    {
        company: "Tupy S.A.",
        role: "Industrial Apprentice - Logistics",
        Period: "Mar 2026 - May 2026",
        description: "I worked at Tupy as an Industrial Apprentice, supporting the Shipping team with third-party and subcontracting routines. In my daily work, I used management systems and built spreadsheets that turned data into clear indicators, helping the team keep control of processes and make faster decisions.",
        tags: ["Excel"],
    },
];

export const FORMATION = [
    {
        institution: "Centro Universitário Católica de Santa Catarina",
        degree: "Bachelor's Degree in Software Engineering",
        period: "Feb 2026 - Dec 2029",
        description: "",
    },
];

export const PROJECTS = [
    {
        title: "Tremzz - railway operations management platform",
        description: "Creation of an intuitive web platform to optimize the management of railway operations, allowing efficient control of routes, users, and other components involving railway logistics. The project was developed using PHP for the backend, MySQL for the database, JavaScript for interactivity, and MQTT for real-time communication between different types of sensors and the application.",
        tags: ["PHP", "MySQL", "JavaScript", "MQTT"],
        url: "https://github.com/hemkdev/tremzz"
    },
    {
        title: "timezonefinder - open source contribution",
        description: "Contribution to timezonefinder, a widely used Python library for offline timezone lookup. Proposed and shipped a data-release tracking pipeline: a DATA_VERSION file written by the data parsing flow and a scheduled GitHub Actions workflow that detects new timezone boundary data releases and notifies the maintainer. Merged upstream, and currently working with the maintainer on automating the full data update flow.",
        tags: ["Python", "GitHub Actions", "CI/CD"],
        url: "https://github.com/jannikmi/timezonefinder/pull/429"
    },
    {
        title: "folio - open source contributions",
        description: "Eleven merged pull requests to folio, a collaborative open source project: features, test coverage, CI setup, error handling, security fixes and accessibility improvements, all following the project's contribution standards and review process.",
        tags: ["CI", "Testing", "Accessibility"],
        url: "https://github.com/miguelrcha/folio"
    },
];

export const SKILLS = [
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "C",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Supabase",
    "Docker",
    "GitHub Actions",
    "Cloudflare",
    "Git",
    "Figma",
];

export const ABOUT_TEXT = "Software developer with a back-end focus and a growing interest in AI and agentic development, focused on writing clean, reusable and maintainable code. Systems Development technician and currently pursuing a Software Engineering degree. At Origetec I work across the whole product cycle, from understanding the problem behind the request to running the solution in production. I believe good code is built through collaboration and shared knowledge.";