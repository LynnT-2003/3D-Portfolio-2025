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
    href: "https://www.mahavertex.com/",
    texture: "/textures/project/mv-showcase.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 2,
        name: "NextJS",
        path: "/assets/nextjs.jpg",
      },
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 5,
        name: "Sanity Studio",
        path: "/assets/sanity.png",
      },
    ],
  },
  {
    title: "TBHChat - A Digital Chatbot Solution for TBH-Labs",
    desc: "TBHChat is a chatbot solution for Facebook Messenger that simplifies finding your dream smartphone by offering local prices and product recommendations. Mobile shops can easily update their prices through our CMS, ensuring that the chatbot always provides the latest specs and performance insights, helping customers make informed purchasing decisions effortlessly.",
    subdesc:
      "Singlehandedly led and deployed dynamic frontend pages and backend infrastructure for the chatbot using Next.js. Created and managed a database of 500+ smartphones with 17 entities each, with an admin panel dashboard with Firebase Authentication for secure admin access. Contributed towards the development of the chatbot to recognize and handle 5 different intents with average response times of 2-5 seconds for each request using Glitch and Wit.AI",
    href: "https://tbh-chatbot-product-page.vercel.app/",
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
        id: 2,
        name: "NextJS",
        path: "/assets/nextjs.jpg",
      },
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
        id: 2,
        name: "MongoDB",
        path: "/assets/mongodb.png",
      },
      {
        id: 2,
        name: "Firebase",
        path: "/assets/firebase.png",
      },
    ],
  },
  {
    title: "LynnStore - A Fully Functional E-commerce Platform",
    desc: "A fully functional E-Commerce Website with a user-friendly interface. The platform supports real time payment system and an admin panel dashboard for all purchase orders, customer emails, shipment details and more. The platform is powered by a customized CMS that allows easy management of products, banners, and latest information.",
    subdesc:
      "Powered by React for Frontend, Sanity.io CMS for backend and Stripe for payments. Browse products by category or search for specific products. View detailed product information, including images, descriptions, and prices. Add products to a shopping cart and update quantities as needed. Securely process payments using the Stripe payment processing API. Receive confirmation of successful orders via email.",
    href: "https://ecommerce-sanity-stripe-lynnt-2003.vercel.app/",
    texture: "/textures/project/store.mp4",
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
        name: "Sanity Studio",
        path: "/assets/sanity.png",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/stripe.png",
      },
    ],
  },
  {
    title: "Lynnime - A modern Animelist Application",
    desc: "An IOS application featuring Jikan API where users can seamlessly browse and explore for all the latest information on anime from MyAnimeList's unofficial API. From upcoming anime to all time best rankings, users can also search for anime and get every single detailed information about the anime. The application boasts a mordern minimalistic UI and is ensured to offer the best user experience for everyone.",
    subdesc:
      "Singlehandedly built and designed the entire application from scratch in 3 days after learning the basic foundations of Swift UIKit. Used Alamofire library for fetching the data and followed a clean code architecture for future re-usability and updates.",
    href: "https://github.com/LynnT-2003/Lynnime-iOS",
    texture: "/textures/project/lynnime.MOV",
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
        name: "Swift UIKit",
        path: "/assets/swift.png",
      },
      {
        id: 2,
        name: "Sanity Studio",
        path: "/assets/sanity.png",
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
    deskPosition: isMobile ? [0.5, -4.5, 0] : [1.25, -12.5, 0],
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
    name: "Baksters Co., Ltd.",
    pos: "Intern / Part-Time Developer",
    duration: "Oct 2024 - Present",
    title:
      "Responsible for the development of an image generation web application project that allows users to generate images based on their prompts and also allows users to upload their own images where they are modified using custom trained models from the team. My role is to develop and maintain a seamless pipelined workflow between the Frontend and the Backend where images are genereted using State-Of-the-Art Diffusion Models.",
    icon: "/assets/work/baksters.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "BehindTrader",
    pos: "Chief Technology Officer",
    duration: "Oct 2024 - Present",
    title:
      "Responsible for all technical and operational aspects of our startup, which currently has almost 200 clients, as CTO. I am also responsible for the launch of our first fully functional web platform for our clients, covering services from CopyTrade, Signal Rooms, Education Sections, and Trading Bot Development. My role is to be able to effectively spearhead our startup's scalability to be able to support our growing audience, while keeping the company's mission on track.",
    icon: "/assets/work/behindtrader.jpeg",
    animation: "victory",
  },
  {
    id: 4,
    name: "BehindTrader",
    pos: "MQL5 Trading Bot Developer",
    duration: "July 2024 - Present",
    title:
      "Developed an automated Expert Advisor Trading bot on MetaTrader, capable of serving concurrent clients. The bot is designed to execute buy/sell orders and trades algorithmically all on its own based on given parameters & strategies.",
    icon: "/assets/work/behindtrader.jpeg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Maha-Vertex Real Estate",
    pos: "Part-Time Lead Developer",
    duration: "May 2024 - Oct 2024",
    title:
      "Spearheaded the development of the company's first ever website. Led the development of the frontend while simultaneously working in backend roles, ensuring that the business requirements are always met through bi-weekly sprint meetings & agile methodologies.",
    icon: "/assets/work/mv.jpeg",
    animation: "clapping",
  },
  {
    id: 5,
    name: "TBH Chatbot",
    pos: "Part-Time Fullstack Developer",
    duration: "Nov 2023 - April 2024",
    title:
      "Singlehandedly developed the architecture of the backend infrastructure & database design, essential for the chatbot. Also developed dynamic frontend webpages to showcase product details through the chatbot through URLs.",
    icon: "/assets/work/tbh.jpg",
    animation: "salute",
  },
];
