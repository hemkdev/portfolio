// Dados pessoais

export const PERSON = {
    name: "Lucas Hemkemeier",
    title: "Junior Backend Developer",
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
        company: "Tupy S.A.",
        role: "Industrial Apprentice - Logistics",
        Period: "Mar 2026 - Present",
        description: "I currently work at Tupy as an Industrial Apprentice, supporting the Shipping team with third-party and subcontracting routines. In my daily work, I use management systems and build spreadsheets that turn data into clear indicators, helping the team keep control of processes and make faster decisions.",
        tags: ["Excel"],
    },
];

export const FORMATION = [
    {
        institution: "Centro Universitário Católica de Santa Catarina",
        degree: "Bachelor's Degree in Software Engineering",
        period: "Feb 2026 - Dez 2029",
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
        title: "Habit tracker - application for habit monitoring",
        description: "Creation of a command-line application for tracking habits, allowing users to register and monitor their daily habits. The application was built using Python for the backend, with data storage in JSON files. The project includes features for adding, removing, and viewing habits, as well as generating progress reports over time.",
        tags: ["Python", "JSON"],
        url: "https://github.com/hemkdev/habit-tracker"
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

export const ABOUT_TEXT = "Software developer with a back-end soul, focused on writing clean, reusable and maintainable code. Systems Development technician and currently pursuing a Software Engineering degree. I enjoy crafting practical solutions for everyday challenges and believe good code is built through collaboration and shared knowledge.";