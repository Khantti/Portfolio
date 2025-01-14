import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    bootstrap,
    jquery,
    php,
    mysql,
    firebase,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    iot,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logicmaster,
    internship,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "achievement",
      title: "Achievement",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "IoT Developer",
      icon: mobile,
    },
    {
      title: "Electrical Engineer",
      icon: backend,
    },
    {
      title: "Industrial Automation",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Jquery",
      icon: jquery,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Freelance",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "IoT Developer",
      company_name: "Freelance",
      icon: iot,
      iconBg: "#7cd9cb",
      date: "Jan 2021 - Present",
      points: [
        "Designed and implemented IoT-based solutions", 
        "Integrating microcontrollers such as Arduino, ESP32 and sensors for real-time monitoring and control",
        "Developed responsive and interactive web applications using HTML, CSS, JavaScript, and PHP, with MySQL database integration.",
      ],
    },
    {
      title: "Electrical Engineer",
      company_name: "Logic Master",
      icon: logicmaster,
      iconBg: "#E6DEDD", 
      date: "Jan 2023 - Present",
      points: [
        "Developed Panel Design & Installation for industrial applications ensuring high quality, efficient and safe system", 
        "Experienced in PLC and HMI Programming", 
        "Designed and installed solar energy systems, including panel configurations, inverters, and battery storage solutions",
        "Assisted in project planning and implementation, ensuring compliance with safety and industry standards."
      ],
    },
    {
      title: "Internships",
      company_name: "",
      icon: internship,
      iconBg: "#E6DEDD",
      date: "2018 - 2021",
      points: [
        "Embedded Developer Internship at Everything Electronics Co., Ltd ",
        "Industrial Automation Engineer Internship at Logic Master Co., Ltd ",
        "Electronics Engineer Internship at Logic Master Co., Ltd ",
        "Solar Energy System Internship at Solar Pro Co.,Ltd",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };