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
    spiderman,
    guardian,
    media,
    vision
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
      title: "ML Engineer",
      icon: vision,
    },
    {
      title: "Fullstack Web Developer",
      icon: spiderman,
    },
    {
      title: "Flutter/ReactN Developer",
      icon: guardian,
    },
    {
      title: "Content Creator",
      icon: media,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company_name: "Rutgers",
      icon: starbucks,
      iconBg: "#383E56",
      date: "September 2024 - Present Day (You can change this!!!)",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "Applify AI",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Most flexible kid I've ever met. He was part of our social media, design, and AI team doing random but damn good work. Any other startup or company would be lucky to have Dhruv in their ranks. ",
      name: "Max Tang",
      designation: "CEO",
      company: "ApplifyAI",
      image: "https://media.licdn.com/dms/image/v2/C5603AQGldMO-GW8CpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1607540484674?e=1740614400&v=beta&t=3eZZ2i3bzpmfe3tRG9GRwBvpvxanRaqZ0vCKrOnfTvc",
    },
    {
      testimonial:
        "He joined us at the lab before he was even a student, helping out with numerous tasks and showed real initiative and work ethic.",
      name: "Dr.Stephanie Rossi",
      designation: "Research Assiociate",
      company: "Rutgers Center for Turfgrass",
      image: "https://plantbiology.rutgers.edu/sites/default/files/styles/3x4_one_third_full_1024_2x/public/2024-08/SRossi-portrait.jpg?h=18e44ed0&itok=f8cVZqwF",
    },
    {
      testimonial:
        "Dhruv was incredibly reliable, learning everything he needed on the fly to build AmeriTax's website, and delivered with everything I needed.",
      name: "Narendra Lalwani",
      designation: "CEO",
      company: "AmeriTax",
      image: "https://media-lga3-2.cdn.whatsapp.net/v/t61.24694-24/465895905_1601668273891342_1281141175549618614_n.jpg?stp=dst-jpg_s96x96_tt6&ccb=11-4&oh=01_Q5AaICY2LHJ7L_zqVKEQG7FMewcVId7RVAVYwudEZpM5uSCE&oe=6777CDD5&_nc_sid=5e03e0&_nc_cat=103",
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