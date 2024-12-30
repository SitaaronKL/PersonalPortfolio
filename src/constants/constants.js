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
    cjcphacks
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
  
  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company_name: "Rutgers",
      icon: rutgers,
      iconBg: "#383E56",
      date: "September 2024 - Present Day (You can change this!!!)",
      points: [
        "Conducted AI research on brain-based machine learning models using TensorFlow and PyTorch; directly contributed to three innovative prototype models aimed at improving patient recovery outcomes; increasing overall lab to clinical trial efficiency by 15%.",
        "Preprocessed and analyzed datasets with 10,000+ brain MRI data points, achieving a 20% increase in predictive accuracy for neuro-degenerative disease progression."
      ],
    },
    {
      title: "Machine Learning Engineer",
      company_name: "Applify AI",
      icon: applifyai_logo,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Created ProDream, an AI-powered writing tool using Python and LangChain, analyzing user documents to generate personalized writing styles; specifically engineered the document upload feature to enhance user experience by tailoring LLM models.",
        "Composed front-end button and panel layouts using Figma & Tailwind CSS , resulting in a 15% increase in user engagement during the sign on process as measured by A/B testing with 500 users.",
        "Reduced token costs by 10% by implementing optimized prompt engineering strategies in Python and a custom LLaMA 3 model, resulting in savings of $500 per month based on 10,000 monthly API calls."
      ],
    },
    {
      title: "Fullstack Software Engineer",
      company_name: "AmeriTax Inc",
      icon: ameritax,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Designed and maintained the front and back end for the official website, utilizing HTML5, Tailwind CSS,  JavaScript, and React.js for a responsive and user-friendly interface.",
        "Implemented backend functionality using MongoDB, Node.js, and Express, managing routing and APIs for seamless client-server interaction to handle customer data and tax-related information.",
        "Deployed the website using cloud-based services such as AWS, ensuring scalability, security, and performance optimization for over 4000+ users."
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
      name: "Medify",
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
      name: "Princeton Soccer Robotics",
      description:
        "Was the captain for team Dragons in PSR during 2023, where I led my team of 4 to create and design a autonomous soccer robot that placed 5th in the RoboCupJr USA nationals!", 
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
      name: "CJCP Hacks",
      description:
        "Founded and led my high school's CS club, taught hundreds of lower classmen how to code and hosted annual hackathons with 100+ participants across the tristate area, $9k in prizes, and 10+ workshops!",
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
  
  export { services, technologies, experiences, testimonials, projects };