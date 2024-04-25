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
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Designer",
      icon: backend,
    }
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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

  const education = [
    {
      title: "FrontEnd Developer",
      company_name: "SattvaSoft",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2023 - February 2024",
      points: [
        "Developing and maintaining web applications using html, css and javascript",
        "Upscaling from older technologies to make webiste for readable anf efficient",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "FrontEnd Developer",
      company_name: "Discovery Learning",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Ongoing",
      points: [
        "Developing and maintaining web applications using html, css and javascript",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Working with other experienced designers and developers to redesign the website frontend",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "College Project",
      icon: shopify,
      iconBg: "#383E56",
      date: "March 2024 - Ongoing",
      points: [
        "Developing and maintaining web applications using html, css and javascript",
        "Collaborating with my professor and team of developers to design a website frontend",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in a structured team led by our professor",
      ],
    },
  ];
  
  
  const experiences = [
    {
      title: "FrontEnd Developer",
      company_name: "SattvaSoft",
      icon: starbucks,
      iconBg: "#383E56",
      date: "December 2023 - February 2024",
      points: [
        "Developing and maintaining web applications using html, css and javascript",
        "Upscaling from older technologies to make webiste for readable anf efficient",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "FrontEnd Developer",
      company_name: "Discovery Learning",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - Ongoing",
      points: [
        "Developing and maintaining web applications using html, css and javascript",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Working with other experienced designers and developers to redesign the website frontend",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "College Project",
      icon: shopify,
      iconBg: "#383E56",
      date: "March 2024 - Ongoing",
      points: [
        "Developing and maintaining web applications using html, css and javascript",
        "Collaborating with my professor and team of developers to design a website frontend",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in a structured team led by our professor",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
      name: "Jane Doe",
      designation: "CEO",
      company: "Wayne Industries",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Chris Brown",
      designation: "COO",
      company: "Stark Industries",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
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