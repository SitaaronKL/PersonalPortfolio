import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    spiderman,
    guardian,
    media,
    vision,
    applifyai_logo,
    ameritax,
    rutgers,
    medify,
    psr,
    cjcphacks,
    naren,
    max,
    vodify,
    cvrve
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
  
  ];
  
const stuff = "I’m currently a Presidential Scholar at the Honors College of Rutgers, double majoring in CS and Neuroscience since I love the idea of neuro-technology and NeuroAI. In my spare time, I make gaming content as a professional Valorant player (Sitaaron#raja), run my own fashion brand, and add to my random list of skills!"

  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Rutgers University Computational Brain Lab",
      icon: cvrve,
      iconBg: "#383E56",
      date: "March 2025 - Present",
      points: [
        "Working on the biggest student-to-tech aggregation platform."
      ],
    },
    {
      title: "Incoming Aresty Research Assistant",
      company_name: "Rutgers University Computational Brain Lab",
      icon: rutgers,
      iconBg: "#383E56",
      date: "June 2025 - Present",
      points: [
        "Selected to be part of Rutger's presitgious Aresty Research Assistant Program, where I will be working on 3D insectoid robotics and publishing/presenting the results."
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "Rutgers University Computational Brain Lab",
      icon: rutgers,
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Currently working on developing ML models to improve the diagnosis of neurodegenerative diseases for Robert Wood Johnson Hospital using PyTorch and TensorFlow.",
        "Also responsible for preprocessing and analyzing large brain MRI datasets using NumPy and R to streamline our data pipeline and enhance efficiency by 25%."
      ],
    },
    {
      title: "Software Developer Intern ",
      company_name: "Rutgers University Center for Turfgrass Science",
      icon: rutgers,
      iconBg: "#383E56",
      date: " July 2024 – September 2024",
      points: [
        "Designed and maintained scalable data pipelines for root health dataset analysis, using SQL and Python to support ongoing research efforts on how we can make better soil!",
        "Automated statistical analysis and created data visualizations with Jupyter Notebooks and Matplotlib, making experimental results easier to interpret for stakeholders."],
    },
    {
      title: "SWE + ML + UI/UX Intern",
      company_name: "Applify AI",
      icon: applifyai_logo,
      iconBg: "#E6DEDD",
      date: "November 2023 – July 2024",
      points: [
        "I joined the start up as a software engineering intern but ended up working on a variety of projects/features.",
        "Built the document upload system with FastAPI and AWS S3 to let users upload their writing samples, and fine-tuned machine learning models with PyTorch which ended up saving us $500/month.",
        "Designed the UI/UX for the onboarding experience using Figma and Tailwind CSS, which increased our student user engagement by 15%!"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "AmeriTax Inc",
      icon: ameritax,
      iconBg: "#383E56",
      date: "November 2021 – September 2023",
      points: [
       "Made the company's website from scratch using React and Tailwind CSS for a responsive and user-friendly experience!",
       "Implemented the backend with so that clients could log in and see their data such as their tax returns and processed financial statements, and even check the progress of their payrolls!",
       "Deployed the website on AWS cloud services to make sure it was always up and running for the 4000+ clients we had!",
       "Made numerous other software projects for the company using OpenCV to automate data entry tasks, decreasing overall payroll processing time by 30%!"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Most flexible kid I've ever met. He was part of our social media, design, and AI team doing random but damn good work. Any other startup or company would be lucky to have Dhruv in their ranks. ",
      name: "Max Tang",
      designation: "CEO",
      company: "ApplifyAI",
      image: max,
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
      image: naren,
    },
  ];
  
  const projects = [
    {
      name: "Co-Founded Vodify.gg",
      description:
        "A startup dedicated to providing easy access to gaming coaching services for everyone. Accepted into Foundess's Hatch Accelerator W25 Cohort and backend ML models were accquired for $120,000. (No longer active)",
      tags: [
        {
          name: "fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
      ],
      image: vodify,
      source_code_link: "https://www.vodify.gg/",
    },
    {
      name: "HackNJIT 2023 - Medify",
      description:
        "An AI powered hardware hack that got our team 3rd place as freshman at HackNJIT 2023! It allows a user to scan a wound and be given a accurate diagnosis and narrated treatment plan based on the resourcs available to them via a Rasperry Pi contraption and our web app!",
      tags: [
        {
          name: "fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "raspberry-pi",
          color: "green-text-gradient",
        },
        {
          name: "pytorch",
          color: "pink-text-gradient",
        },
      ],
      image: medify,
      source_code_link: "https://devpost.com/software/medify-khoaid",
    },
    {
      name: "Team Captain - Princeton Soccer Robotics",
      description:
        "Led team Dragons in PSR during 2023, where I led a team of 4 to create and design a autonomous soccer robot that placed 5th in the RoboCupJr USA nationals!", 
      tags: [
        {
          name: "robotics",
          color: "blue-text-gradient",
        },
        {
          name: "arduino/c++",
          color: "green-text-gradient",
        },
        {
          name: "pcb design",
          color: "pink-text-gradient",
        },
      ],
      image: psr,
      source_code_link: "https://soccer-robotics.github.io/psr/",
    },
    {
      name: "Founder - CJCP Hacks",
      description:
        "Led my high school's CS club, taught hundreds of lower classmen how to code and hosted annual hackathons with 100+ participants across the tristate area, $9k in prizes, and 10+ workshops!",
      tags: [
        {
          name: "leadership",
          color: "blue-text-gradient",
        },
        {
          name: "python/java",
          color: "green-text-gradient",
        },
        {
          name: "fundraising",
          color: "pink-text-gradient",
        },
      ],
      image: cjcphacks,
      source_code_link: "https://www.cjcphacks.org/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, stuff};