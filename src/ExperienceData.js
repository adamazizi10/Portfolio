 
import Salumatics from "./assets/portfolioImages/Salumatics.png";
import tetra from "./assets/portfolioImages/tetra.jpg"
 
const ExperiencesData = [
  {
    id: "salumatics",
    job: "Software Developer",
    img: Salumatics,
    Type: "Internship",
    date: "May 2022 - Oct 2022",
    name: "Salumatics",
    location: "Mississauga, Ontario, Canada",
    stack: ["  C#  |  ",".NET  |  ",  "  MS SQL Server | HTML/CSS/JavaScript"],
    live: "https://salumatics.com/",
    colour: "#005EB8",
    source: "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A1491242&keywords=salumatics%20inc.&origin=RICH_QUERY_SUGGESTION&position=0&searchId=76567613-5308-416e-ac49-9fb559fd26c6&sid=JGJ",
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
  {
    id: "tetra-ryerson",
    job: "Software Developer",
    img: tetra,
    Type: "",
    date: "Oct 2022 - Dec 2022",
    stack: ["Mobile Development  |  ",  "Object-Oriented Programming"],
    name: "Tetra",
    location: "Toronto, Ontario, Canada",
    live: "https://tetraryerson.ca/",
    source: "https://www.linkedin.com/company/tetraryerson/mycompany/",
    colour: "#3edd8e",
    description1: 
    "Developed and launched a mobile application that allows hospital patients to control the positioning of their beds, resulting in a 30% increase in patient satisfaction",
    description2:
    "Utilized Figma to create a user-friendly and visually appealing application design, and developed the application's functionality, ensuring optimal performance and ease of use",
    description3: 
    "Analyzed and tested builds to identify and resolve any bugs, leading to a 90% decrease in application crashes",
    description4:  
    "Incorporated stakeholder feedback throughout the development process, collaborating closely with hospital staff and patients to ensure that the application's functionality aligned with their needs and expectations",
    description5:
    "Designed and implemented an in-app tutorial feature to guide new users through the application's features" 

  },
  
   
];

const exportObject = {
  ExperiencesData,
};

export default exportObject;