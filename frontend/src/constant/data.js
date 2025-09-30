import {
    RiInstagramLine,
    RiMailLine,
    RiLinkedinBoxFill,
    RiGithubFill,
    RiMailFill,
} from "@remixicon/react"


export const navItems = [
    {
        id: 1,
        label: "Home",
        url: "#home",
    },
    {
        id: 2,
        label: "Services",
        url: "#services",
    },
    {
        id: 3,
        label: "About Us",
        url: "#about",
    },
    {
        id: 4,
        label: "Why Us",
        url: "#why-us",
    },
    {
        id: 5,
        label: "Works",
        url: "#works",
    },
];

export const servicesItems = [
    {
        id: 1,
        icon: "/images/icon-1.svg",
        title: "Creative UI/UX Design",
        text: "Fresh, innovative designs that capture your brand's identity.",
        width: 118,
        height: 133,
    },
    {
        id: 2,
        icon: "/images/icon-2.svg",
        title: "Web Development",
        text: "Modern, responsive, and performance-driven websites built with care.",
        width: 146,
        height: 135,
    },
    {
        id: 3,
        icon: "/images/icon-3.svg",
        title: "Content & Digital Solutions",
        text: "SEO content that builds authority, brand trust, and audience engagement.",
        width: 115,
        height: 143,
    },
];

export const statsItems = [
    {
        id: 1,
        value: "N/A",
        text: "Successful projects delivered across design, development, and strategy.",
    },
    {
        id: 2,
        value: "N/A",
        text: "Commitment to delivering creative, reliable, and quality solutions.",
    },
    {
        id: 3,
        value: "24/7",
        text: "Support and collaboration that ensures your ideas come alive.",
    },
];

export const whyChooseUsItems = [
    {
        id: 1,
        icon: "/images/icon-4.svg",
        title: "Personalized Approach",
        text: "We tailor every project to reflect your unique vision and goals.",
    },
    {
        id: 2,
        icon: "/images/icon-5.svg",
        title: "Creative & Modern",
        text: "Our designs and solutions stay fresh, relevant, and innovative.",
    },
    {
        id: 3,
        icon: "/images/icon-6.svg",
        title: "Collaborative Process",
        text: "We work with you at every step to ensure your satisfaction.",
    },
    {
        id: 4,
        icon: "/images/icon-7.svg",
        title: "On-Time Delivery",
        text: "Your deadlines are our priority — we deliver without compromise.",
    },
];

export const workItems = [
    {
        id: 1,
        img: "/images/img-4.png",
        subtitle: "Graphic Design",
        title: "Aura Branding Design",
        height: 540,
    },
    {
        id: 2,
        img: "/images/img-5.jpg",
        subtitle: "Graphic Design",
        title: "AB.S Snack Packaging",
        height: 346,
    },
    {
        id: 3,
        img: "/images/img-6.png",
        subtitle: "Web Development",
        title: "Responsive Website Development",
        height: 342,
    },
    {
        id: 4,
        img: "/images/img-7.png",
        subtitle: "Content Writing",
        title: "Magazine Content Writing",
        height: 540,
    },
];

export const teamsDataItems = [
    {
        id: 1,
        name: "Ankit Kumar",
        role: "Backend Developer",
        stack: ["JAVA", "Spring", "MySQL"],
        linkedinUrl: "https://www.linkedin.com/in/ankit-kumar-9a011421a/"
    },
    {
        id: 2,
        name: "Aditya Singh",
        role: "Frontend Developer",
        stack: ["React", "Tailwind", "JavaScript"],
        linkedinUrl: "https://www.linkedin.com/in/aditya-singh/"
    },
    {
        id: 3,
        name: "Shailja Shukla",
        role: "Full Stack Developer",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        linkedinUrl: "https://www.linkedin.com/in/shailja-shukla-1baba7343/"
    },
    {
        id: 4,
        name: "Khyati Mathpal",
        role: "UI/UX Designer",
        stack: ["Figma", "Framer Motion", "Illustrator"],
        linkedinUrl: "https://www.linkedin.com/in/khyati-mathpal-122858331/"
    },
    {
        id: 5,
        name: "Abhishek Tripathi",
        role: "SEO Consultant",
        stack: ["Google Analytics", "MOZ", "Sitebulb"],
        linkedinUrl: "https://www.linkedin.com/in/abhishek-tripathi-869809265/"
    },
];

export const testimonialsItems = [
    {
        id: 1,
        text: "Beryfy transformed our online presence. The design is modern, the site is fast, and the process was seamless.",
        img: "/images/testi-img-1.png",
        author: "Shailja Shukla",
        role: "Startup Founder",
    },
    {
        id: 2,
        text: "The team’s creativity and professionalism exceeded our expectations. Highly recommended for digital solutions.",
        img: "/images/testi-img-1.png",
        author: "Ankit Kumar",
        role: "Startup Founder",
    },
    {
        id: 3,
        text: "Working with Beryfy felt collaborative and fun. They really understood our brand and delivered perfectly.",
        img: "/images/testi-img-1.png",
        author: "Khyati Mathpal",
        role: "HR / Accountant",
    },
];

export const portfolioItems = [
    {
        id: 1,
        image: "/images/img-3.png",
        title: "E-commerce Platform",
        category: "Web Development",
        description: "Modern e-commerce solution with seamless user experience",
        width: 318,
        height: 332,
        featured: true
    },
    {
        id: 2,
        image: "/images/img-2.png",
        title: "Mobile App Design",
        category: "UI/UX Design",
        description: "Intuitive mobile application design",
        width: 160,
        height: 167,
        featured: false
    },
    {
        id: 3,
        image: "/images/img-1.png",
        title: "Brand Identity",
        category: "Graphic Design",
        description: "Complete brand identity package",
        width: 200,
        height: 200,
        featured: false
    },
    {
        id: 4,
        image: "/images/img-2.png",
        title: "Dashboard Design",
        category: "UI/UX Design",
        description: "Analytics dashboard with modern interface",
        width: 200,
        height: 200,
        featured: false
    }
];

export const mainProject = {
    image: "/images/img-1.png",
    title: "Premium Digital Solutions",
    category: "Full Stack Development",
    description: "A comprehensive digital platform that showcases our expertise in modern web technologies, featuring responsive design, seamless user experience, and cutting-edge functionality.",
    technologies: ["React", "Node.js", "Express"],
    liveUrl: "#",
    githubUrl: "#"
};


export const footerItems = [
    {
        id: 1,
        title: "Company",
        links: [
            { label: "About us", url: "#about" },
            { label: "Contact us", url: "#contact" },
            { label: "Careers", url: "#careers" },
        ],
    },
    {
        id: 2,
        title: "Product",
        links: [
            { label: "Features", url: "#features" },
            { label: "Pricing", url: "/Pricing.pdf", external: true },
            { label: "Support", url: "mailto:beryfy2@gmail.com" },
        ],
    },
    {
        id: 3,
        title: "Services",
        links: [
            { label: "UI Design", url: "#services" },
            { label: "Web Development", url: "#services" },
            { label: "SEO for Business", url: "#services" },
            { label: "Content Writing", url: "#services" },
        ],
    },
    {
        id: 4,
        title: "Legal",
        links: [
            { label: "Privacy Policy", url: "/Privacy-Policy.pdf", external: true },
            { label: "Terms & Conditions", url: "/Terms&Conditions.pdf", external: true },
        ],
    },
];

export const socialProfilesIcons = [
    {
        id: 1,
        icon: RiMailFill,
        name: "gmail",
        url: "mailto:beryfy2@gmail.com",
    },
    {
        id: 2,
        icon: RiLinkedinBoxFill,
        name: "linkedin",
        url: "https://www.linkedin.com/company/beryfy/",
    },
    {
        id: 3,
        icon: RiGithubFill,
        name: "github",
        url: "https://github.com/beryfy2/",
    },
    {
        id: 4,
        icon: RiInstagramLine,
        name: "instagram",
        url: "https://instagram.com/beryfy_tech/",
    },
];