export const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const SKILLS = {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    frameworks: ["FastAPI", "Flask", "SvelteKit", "Next.js", "React", "OpenCV"],
    cloud: [
        "Docker",
        "Kubernetes",
        "Google Cloud Platform (Vertex AI, Cloud Functions)",
        "Microsoft Azure",
        "CI/CD (GitHub Actions)",
        "Linux",
    ],
    databases: ["PostgreSQL", "MySQL", "Redis"],
    concepts: [
        "Data Structures & Algorithms",
        "System Design",
        "Microservices",
        "Event-Driven Architecture",
        "Agentic AI Patterns",
    ],
};

export const EXPERIENCE = [
    {
        company: "Code Vipassana",
        role: "Community Lead & Technical Mentor",
        period: "Aug 2023 – Present",
        description:
            "Spearheaded technical initiatives and community growth for a developer ecosystem.",
        achievements: [
            "Designed and delivered advanced curriculum on Google Cloud, AI/ML, and Data Warehousing.",
            "Mentored 200+ developers, driving a 40% increase in community engagement and cloud certification rates.",
            "Collaborated with core engineering teams to align educational content with emerging industry trends.",
        ],
    },
    {
        company: "MathWorks (AICTE-NEAT)",
        role: "AI Research Intern",
        period: "May 2023 – Sep 2023",
        description:
            "Focused on applied AI research and rapid prototyping using MATLAB and Simulink.",
        achievements: [
            "Completed the 'Getting Started with AI' track, building functional models for predictive maintenance and signal processing.",
            "Developed and deployed proof-of-concept AI applications, demonstrating practical utility of core ML algorithms.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "BestHire",
        subtitle: "AI-Powered Recruitment Platform",
        tags: ["Next.js 14", "TypeScript", "TensorFlow.js", "Google Cloud"],
        description:
            "An event-driven recruitment platform leveraging a multi-agent AI system to automate candidate screening and matching.",
        highlights: [
            "Architected a multi-agent system (Auth, Ingestion, Profiling, Matching) achieving 94% matching accuracy.",
            "Optimized processing time to ~2.4s per resume using parallelized Node.js workers.",
            "Implemented resilient macro-agents with auto-retry policies, ensuring 99.9% system uptime.",
            "Built a high-performance PDF/DOCX parsing engine with >95% field extraction accuracy.",
        ],
        links: {
            demo: "https://mohanmahesh10.github.io/BestHire/recruit-agentic",
            code: "https://github.com/MohanMahesh10/BestHire",
        },
    },
    {
        title: "Text Summarizer",
        subtitle: "Enterprise-Grade NLP Service",
        tags: ["Python", "Vertex AI", "Cloud Functions", "SvelteKit"],
        description:
            "A scalable, cloud-native text summarization service built on Google Cloud's Vertex AI.",
        highlights: [
            "Designed a serverless architecture using Cloud Functions for auto-scaling based on load.",
            "Integrated Vertex AI PaLM API for high-quality, context-aware summaries.",
            "Achieved 30% efficiency gain in document processing workflows for early adopters.",
        ],
        links: {
            demo: "https://github.com/MohanMahesh10/Text_Summarizer1",
            code: "https://github.com/MohanMahesh10/Text_Summarizer1",
        },
    },
    {
        title: "Face Cut AI",
        subtitle: "Intelligent Style Recommendation",
        tags: ["FastAPI", "OpenCV", "Docker", "SvelteKit"],
        description:
            "A computer vision application that recommends personalized hairstyles based on facial geometry.",
        highlights: [
            "Developed a custom face shape detection pipeline using OpenCV and dlib.",
            "Built a high-performance FastAPI backend serving real-time inference results.",
            "Containerized the entire application with Docker for consistent deployment across environments.",
        ],
        links: {
            demo: "https://mohanmahesh10.github.io/FaceCut-AI/",
            code: "https://github.com/MohanMahesh10/FaceCut-AI",
        },
    },
];

export const SOCIAL_LINKS = {
    github: "https://github.com/MohanMahesh10",
    linkedin: "https://www.linkedin.com/in/mohan-mahesh-boggavarapu-b1a48b249/",
    email: "boggavarapumohanmahesh@gmail.com",
    phone: "+91 8919601172",
};
