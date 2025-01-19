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
    naren
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
  
const stuff = "Hi! My name is Dhruv and I’m a CS and Neuroscience student at Rutgers Honors College with a passion for pushing the boundaries of technology and understanding the human brain. From building AI-powered applications and autonomous robots to being a full-stack webhead, I love taking on challenges that combine innovation with real-world impact. I’m also deeply involved in esports and tech leadership, having organized hackathons, built communities, and contributed to meaningful projects with multidisciplinary teams. Whether it’s designing cutting-edge machine learning models or experimenting with new ideas in brain-inspired computing, I’m always looking to grow, create, and make a difference."

  const experiences = [
    {
      title: "Machine Learning Intern",
      company_name: "Rutgers University Computational Brain Lab",
      icon: rutgers,
      iconBg: "#383E56",
      date: "September 2024 - Present",
      points: [
        "Currently working on developing machine learning models with PyTorch and TensorFlow to improve the diagnosis of neurodegenerative diseases.",
        "Also responsible for preprocessing and analyzing large brain MRI datasets that we get from Robert Wood Johnson using NumPy and R to streamline the data pipeline and enhance efficiency by 25%."
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
      title: "Software Engineer/ML Intern",
      company_name: "Applify AI",
      icon: applifyai_logo,
      iconBg: "#E6DEDD",
      date: "November 2023 – July 2024",
      points: [
        "I joined the start up as a software engineering intern but ended up working on a variety of projects, from UI/UX to our LLM models.",
        "Built the document upload system with FastAPI and AWS S3 to let users upload their writing samples, and fine-tuned machine learning models with PyTorch which ended up saving us $500/month.",
        "Designed the UI/UX for the onboarding experience using Figma and Tailwind CSS, which increased our student user engagement by 15%!"
      ],
    },
    {
      title: "Fullstack Software Engineer",
      company_name: "AmeriTax Inc",
      icon: ameritax,
      iconBg: "#383E56",
      date: "November 2021 – September 2023",
      points: [
       "Made the company's website from scratch using React and Tailwind CSS for a responsive and user-friendly experience!",
       "Implemented the backend with so that clients could log in and see their data such as their tax returns and processed financial statements, and even check the progress of their payrolls!",
       "Deployed the website on AWS cloud services to make sure it was always up and running for the 4000+ clients we had!"
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
      image: naren,
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
  
  export { services, technologies, experiences, testimonials, projects, stuff};