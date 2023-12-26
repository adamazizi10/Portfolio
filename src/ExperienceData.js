import Salumatics from "./assets/portfolioImages/face-detector4.png"
import tetra from "./assets/portfolioImages/face-detector4.png"
const ExperiencesData = [
  {
    id: "PMC",
    job: "Software Developer",
    img: tetra,
    Type: "",
    date: "Sep 2023 - Dec 2023",
    stack: ["React.js | Django | SQLite | Python | Figma | Agile"],
    name: "PMC",
    location: "Toronto, ON, Canada",
    live: "",
    source: "",
    colour: "orange",
    description1: 
    "Implemented a comprehensive Full-Stack application using Reactjs for the frontend, Django for the backend, and SQLite for the database, used as the tool to interact with users and create events",
    description2:
    "Strengthened security measures by implementing password hashing and salting techniques, while utilizing authtokens for secure session management between the backend and frontend",
    description3: 
    "Applied Agile methodologies by conducting frequent spring meetings, using Gantt charts, sprint backlogs, and burndown charts, to streamline the development process, resulting in successful delivery of the project",
    description4:  
    "Created RESTful APIs with endpoints for user registration, login, event creation, event history, profile updates, password updates and more, resulting in enhanced user experience and improved functionality",
    description5:
    "" 

  },
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
  
   
];

const exportObject = {
  ExperiencesData,
};

export default exportObject;