import Salumatics from "./assets/portfolioImages/face-detector4.png"
import tetra from "./assets/portfolioImages/face-detector4.png"
const ExperiencesData = [
  {
    id: "TMU1",
    job: "Lead Full Stack Developer",
    img: tetra,
    Type: "",
    date: "June 2024 - Present",
    stack: ["Next.js | FastAPI | Supabase | Auth0 | Docker"],
    name: "TMU",
    location: "Toronto, ON, Canada",
    live: "",
    source: "",
    colour: "orange",
    description1: 
    "Led the development of a Full-Stack dashboard application for AI services using Next.js, Supabase, and Auth0, allowing users to interact with AI-driven applications",
    description2:
    "Designed and implemented a microservice architecture for AI services, with FastAPI as the backend framework, ensuring high scalability and efficient integration of additional services",
    description3: 
    "Integrated Auth0 for secure and scalable authentication, managing access for over 150 users, enhancing user security and experience",
  description4:  
    "Architected a responsive and user-friendly dashboard applying UI/UX design principles, simplifying the interaction with AI services and improving user engagement",
    description5:
    "Optimized the system for performance and scalability, supporting future growth and increasing service uptime, contributing to a 25% increase in system adoption" 
  },
  // {
  //   id: "TMU2",
  //   job: "Full Stack Developer",
  //   img: tetra,
  //   Type: "",
  //   date: "March 2024 - Present",
  //   stack: ["React.js | Flask | PostgreSQL | Figma | Python"],
  //   name: "TMU",
  //   location: "Toronto, ON, Canada",
  //   live: "",
  //   source: "",
  //   colour: "orange",
  //   description1: 
  //   "Developed a responsive React.js and Flask web application by integrating AI-powered bias detection tools in systematic evidence synthesis, containerized with Docker and hosted on live server",
  //   description2:
  //   "Created an annotation tool for volunteers, simplifying PDF annotation for AI training, resulting in over 80% productivity gains and increased annotated PDFs for data collection",
  //   description3: 
  //   "Implemented UI/UX design principles to ensure a visually appealing interface, simplifying accessibility to AI functionalities for bias detection and analysis",
  //   description4:  
  //   "Contributed to project documentation to ensure comprehensive documentation for future AI Tool volunteers",
  //   description5:
  //   "" 

  // },
  {
    id: "tetra",
    job: "Software Developer",
    img: tetra,
    Type: "",
    date: "Sep 2022 - Dec 2022",
    stack: ["React.js | Node.js | Express.js | Figma | Agile | AWS"],
    name: "Tetra",
    location: "Toronto, ON, Canada",
    live: "",
    source: "",
    colour: "#3edd8e",
    description1: 
    "Developed an application that allows hospital patients to control the positioning of their beds",
    description2:
    "Utilized Figma to create a user-friendly and visually appealing application design and developed the application's functionality, ensuring optimal performance and ease of use",
    description3: 
    "Analyzed and tested builds to identify and resolve any bugs, leading to a 90% decrease in application crashes",
    description4:  
    "Incorporated patient feedback throughout the development process, collaborating closely with hospital staff and patients to ensure that the application's functionality aligned with their needs and expectations",
    description5:
    "Implemented Agile methodology, incorporating Gantt charts, sprint backlogs, and burndown charts to improve collaboration and development cycles, resulting in improved timely deliveries" 
  },

  {
    id: "salumatics",
    job: "Software Developer",
    img: Salumatics,
    Type: "Internship",
    date: "Jan 2022 - Aug 2022",
    name: "Salumatics",
    location: "Mississauga, ON, Canada",
    stack: ["  C#  |  ",".NET  |  ",  "  MS SQL Server | AWS | HTML/CSS/JavaScript"],
    live: "",
    colour: "#005EB8",
    source: "",
    description1: 
    "Developed a highly efficient and maintainable .NET web application used as the primary tool for business sales, by utilizing my expertise in ASP.NET, JS/jquery, HTML, and CSS resulting in a significant 40% increase in sales",
    description2:
    "Conducted comprehensive testing, including manual testing and unit testing, to ensure the application's quality and reliability, resulting in a smooth and seamless user experience",
    description3: 
    "Optimized all SQL and online components to achieve a 65% improvement in performance, ensuring timely response and data reliability in compliance with strict service level agreements",
    description4:  
    "Designed and implemented proper authorization protocols to enhance the application's overall security, ensuring users were granted access only to appropriate data and functionalities",
    description5:
    "Implemented a suite of useful features and functionalities, including automated client billing discounts and streamlined data entry forms, achieving a significant 30% increase in sales team productivity" 
  },
  // 
   
];

const exportObject = {
  ExperiencesData,
};

export default exportObject;
