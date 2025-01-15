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
    librarymanagementsystem,
    waterdistributionscada,
    socialmedia,
    travelwebsite,
    fooddelivery,
    admindashboard,
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
      name: "Smart Library System",
      description:
        "A smart library management system that combines a web-based platform and RFID-enabled ESP32 microcontroller to simplify book searching, borrowing, and management, ensuring efficient resource utilization and user convenience.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "esp32",
          color: "orange-text-gradient",
        },
      ],
      image: librarymanagementsystem,
      source_code_link: "https://github.com/Khantti/LibraryManagementSystem",
    },
    {
      name: "Water Distribution SCADA",
      description:
        "A real-time water distribution SCADA system that integrates IoT sensors, ESP32 microcontroller, and a web-based platform to monitor, control, and optimize water quality, consumption, and distribution efficiently.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
        {
          name: "esp32",
          color: "orange-text-gradient",
        },
      ],
      image: waterdistributionscada,
      source_code_link: "https://github.com/Khantti/WaterDistributionSystem",
    },
    {
      name: "Social Media",
      description:
        "A feature-rich social media user interface that allows users to connect, share posts, photos, and videos, engage through real-time messaging and comments, customize profiles, and build communities for meaningful interactions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialUI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: socialmedia,
      source_code_link: "https://github.com/Khantti/SocialMedia",
    },
    {
      name: "Travel Website",
      description:
        "A visually appealing and user-friendly travel website UI designed to help users explore destinations, compare prices, book flights, hotels, and activities seamlessly, with personalized recommendations and an intuitive navigation experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "aos",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: travelwebsite,
      source_code_link: "https://github.com/Khantti/TravelWebsite",
    },
    {
      name: "Food Delivery UI",
      description:
        "A sleek and streamlined food delivery UI for a single restaurant, allowing users to browse the menu, customize orders, select delivery or pickup options, track their order status in real time, make secure payments, and enjoy a personalized dining experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "materialUI",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "red-text-gradient",
        },
      ],
      image: fooddelivery,
      source_code_link: "https://github.com/Khantti/FoodDelivery",
    },
    {
      name: "Ecommerce Dashboard",
      description:
        "A dashboard UI for an eCommerce website, offering real-time sales analytics, inventory management, order processing, customer insights, and order tracking, empowering administrators to efficiently manage products, transactions, and calendar",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "syncfusion",
          color: "green-text-gradient",
        },
        {
          name: "react-icon",
          color: "red-text-gradient",
        },
      ],
      image: admindashboard,
      source_code_link: "https://github.com/Khantti/AdminDashboard",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };