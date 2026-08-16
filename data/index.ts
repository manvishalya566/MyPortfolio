export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Achievements", link: "#achievements" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I build full-stack web applications with the MERN stack, Next.js, and React.",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[85vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I contribute to open source and enjoy collaborative development",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for web development and competitive programming.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building production-style apps with the MERN stack and exploring AWS cloud fundamentals",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const techStack = {
    left: ["React", "Next.js", "JavaScript", "Node.js"],
    right: ["Express.js", "MongoDB", "REST API"],
};

export const projects = [
    {
        id: 1,
        title: "IntervuAI",
        des: "Responsive interview-preparation platform built with Next.js, using server-side rendering for improved load performance, integrated third-party APIs, and React hooks for a smooth, dynamic user experience.",
        image: "/projects/intervuai.png",
        img: "/intervuai.svg",
        iconLists: ["/next.svg","/re.svg","/js.svg"],
        link: "https://intervuaii.vercel.app/",
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        des: "Full-stack e-commerce platform built with the MERN stack and Next.js, supporting product catalog, user authentication, cart, and order management end-to-end, with REST APIs and responsive mobile-friendly UI components.",
        image: "/projects/ecommerce.png",
        img: "/ecommerce.svg",
        iconLists: ["/next.svg","/re.svg","/node.svg","/mongo.svg","/express.svg"],
        link: "#",
    },
    {
        id: 3,
        title: "Employee Payroll System",
        des: "Developed an employee payroll management application with a server-side rendered interface (Express and EJS) for adding, editing, deleting, and managing employee payroll data and operations.",
        image: "/projects/employee-payroll.png",
        img: "/payroll.svg",
        iconLists: ["/js.svg","/node.svg"],
        link: "https://github.com/manvishalya566/Employee-payroll-system",
    },
    {
        id: 4,
        title: "Chat App",
        des: "Built a full-stack chat application with a React client and Node.js server, featuring real-time messaging via Socket.IO, secure JWT-based authentication, and MongoDB for data storage.",
        image: "/projects/chat-app.png",
        img: "/chatapp.svg",
        iconLists: ["/re.svg","/node.svg","/express.svg","/mongo.svg"],
        link: "https://github.com/manvishalya566/CHAT-APP",
    },
];

export const achievements = [
    {
        quote:
            "Earned the Microsoft Certified: Azure AI Fundamentals credential, building foundational knowledge of Azure AI workloads, services, and responsible AI principles.",
        name: "Microsoft",
        title: "Microsoft Certified: Azure AI Fundamentals",
    },
    {
        quote:
            "Completed the JPMorgan Chase & Co. Software Engineering Job Simulation on Forage, practicing real-world software engineering tasks in a simulated professional environment.",
        name: "JPMorgan Chase & Co.",
        link: "/jpmorgan.svg",
        title: "JPMorgan Chase & Co.: Software Engineering Job Simulation (Forage)",
    },
    {
        quote:
            "Solved over 300 Data Structures and Algorithms problems on LeetCode, strengthening problem-solving skills and algorithmic fundamentals.",
        name: "LeetCode",
        link: "/leetcode.svg",
        title: "LeetCode: Solved 300+ Data Structures and Algorithms Problems",
    },
    {
        quote:
            "Contributed to open-source projects through GirlScript Summer of Code (GSSoC), collaborating with mentors and maintainers on code reviews and feature improvements.",
        name: "GirlScript Summer of Code",
        link: "/gssoc.svg",
        title: "Open-Source Contributor through GirlScript Summer of Code (GSSoC)",
    },
];

export const companies = [
    {
        id: 1,
        name: "Microsoft",
        img: "/microsoft.svg",
        nameImg: "",
        link: "https://www.microsoft.com",
    },
    {
        id: 2,
        name: "JPMorgan Chase",
        img: "/jpmorgan.svg",
        nameImg: "",
        link: "https://www.jpmorganchase.com",
    },
    {
        id: 3,
        name: "LeetCode",
        img: "/leetcode.svg",
        nameImg: "",
        link: "https://leetcode.com",
    },
    {
        id: 4,
        name: "GSSoC",
        img: "/gssoc.svg",
        nameImg: "",
        link: "https://gssoc.girlscript.tech",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Open Source Contributor - GSSoC (May 2025)",
        desc: "Resolved open issues and shipped feature improvements across multiple pull requests, collaborating with mentors and maintainers on code review feedback. Followed a structured Git workflow with feature branching, atomic commits, and PR reviews, and improved project functionality and readability by refactoring components based on mentor guidance.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "AWS Cloud Training Trainee - Jovac",
        desc: "Completed hands-on training covering core AWS services - EC2, S3, IAM, and VPC - for cloud deployment, storage, and security. Built and deployed cloud-based project infrastructure, applying IAM policies and VPC networking fundamentals, and developed a practical understanding of virtualization, scalability, and secure cloud deployment practices.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/manvishalya566"
    },
    {
        id: 2,
        img: "/phone.svg",
        link: "+91 8533988858"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/manvi-shalya-06899a302/"
    },
];