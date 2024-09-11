export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "MaharVertex - Full Stack Web App for Real Estate",
    desc: "Maha Vertex (MV) is a realtor company in Bangkok, targeting customers from Myanmar. This project involves creating a full mobile-responsive and user-friendly website to enhance MV's online presence and streamline property listings, consequently improving property management and customer interactions. Overall the solution offers a promising seamless experience for both MV and its clients.",
    subdesc:
      "Led the development of a real estate web application, utilizing Next.js for the frontend and GoLang with Sanity.io for the backend. Integrated Firebase for secure user authentication and different services from Google Maps API for location services Contributed to expanding Mahar-Vertex's reach and improving service delivery through a seamless and enriched user interface",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "TBHChat - A Digital Chatbot Solution for TBH-Labs",
    desc: "TBHChat is a chatbot solution for Facebook Messenger that simplifies finding your dream smartphone by offering local prices and product recommendations. Mobile shops can easily update their prices through our CMS, ensuring users always see current information. The chatbot provides detailed specs and performance insights, helping customers make informed purchasing decisions effortlessly.",
    subdesc:
      "Singlehandedly led and deployed dynamic frontend pages and backend infrastructure for the chatbot using NextJS & NextJS-Serverless Created and managed a database of 500+ smartphones with 17 entities each, with an admin panel dashboard Integrated Firebase Authentication for secure admin access. Contributed towards the development of the chatbot to recognize and handle 5 different intents with average response times of 2-5 seconds for each request using Glitch and Wit.AI",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "LynnStore - A Fully Functional E-commerce Platform",
    desc: "A fully functional E-Commerce Website with a user-friendly interface. The platform supports real time payment system and an admin panel dashboard for all purchase orders, customer emails, shipment details and more. The platform is powered by a customized CMS that allows easy management of products, banners, and latest information.",
    subdesc:
      "Powered by React for Frontend, Sanity.io CMS for backend and Stripe for payments. Browse products by category or search for specific products. View detailed product information, including images, descriptions, and prices. Add products to a shopping cart and update quantities as needed. Securely process payments using the Stripe payment processing API. Receive confirmation of successful orders via email.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

// export const calculateSizes = (isSmall, isMobile, isTablet) => {
//   return {
//     deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.2,
//     deskPosition: isMobile ? [0.5, -4.5, 0] : [2, -19, 0],
//     cubePosition: isSmall
//       ? [4, -5, 0]
//       : isMobile
//       ? [5, -5, 0]
//       : isTablet
//       ? [5, -5, 0]
//       : [9, -5.5, 0],
//     reactLogoPosition: isSmall
//       ? [3, 4, 0]
//       : isMobile
//       ? [5, 4, 0]
//       : isTablet
//       ? [5, 4, 0]
//       : [12, 3, 0],
//     ringPosition: isSmall
//       ? [-5, 7, 0]
//       : isMobile
//       ? [-10, 10, 0]
//       : isTablet
//       ? [-12, 10, 0]
//       : [-24, 10, 0],
//     targetPosition: isSmall
//       ? [-5, -10, -10]
//       : isMobile
//       ? [-9, -10, -10]
//       : isTablet
//       ? [-11, -7, -10]
//       : [-13, -13, -10],
//   };
// };

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.12,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [1, -11.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "The Grand Dental",
    pos: "Lead Frontend Developer",
    duration: "2024 - Present",
    title:
      "Primarily leading the development in the Frontend department. My role is to build and maintain the frontend of the website according to the demand from both client and designers.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Mahar-Vertex Real Estate",
    pos: "Lead Frontend Developer",
    duration: "2024 - Present",
    title:
      "Leading the Frontend team while simultaneously working with Backend roles. My role is to build the frontend according to the designs given, and making it fully mobile-responsive.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "BehindTrader",
    pos: "MQL5 Trading Bot Developer",
    duration: "2024 - Present",
    title:
      "Developed an automated Expert Advisor Trading bot on MetaTrader, capable of serving concurrent clients. The bot is designed to execute buy/sell orders and trades algorithmically.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 4,
    name: "TBH Chatbot",
    pos: "Full Stack Web Developer & Chatbot Developer",
    duration: "2023 - 2024",
    title:
      "Singlehandedly led the development of the backend infrastructure & database design for the chatbot. Also developed dynamic web urls to showcase product details through the chatbot.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
