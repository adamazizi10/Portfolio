import facedetector from "./assets/portfolioImages/face-detector.png"
import facedetector2 from "./assets/portfolioImages/face-detector2.png"
import Book1 from "./assets/portfolioImages/Book1.png"
import Book2 from "./assets/portfolioImages/Book2.png"
import PortfolioPic from "./assets/portfolioImages/PortfolioPic.png"
import PortfolioPic2 from "./assets/portfolioImages/PortfolioPic2.png"
import pass1 from "./assets/portfolioImages/pass1.png"
import pass2 from "./assets/portfolioImages/pass2.png"
const ProjectsData = [
   
  {
    id: "Face-Detector",
    img: facedetector2,
    img2: facedetector,
    name: "Face Detector | Image Detection API",
    Tech: "Reactjs | Node.js | Express.js | PostgreSQL",
    date: "Aug 2022 - Sep 2022",
    live: "https://adamazizi10.github.io/face-detector/",
    source: "https://github.com/adamazizi10/face-detector-frontend",
    description1:
    "Developed a secure and scalable web application using Reactjs, Node.js, Express.js, and PostgreSQL to detect faces in images using Clarafai’s Face Recognition API, resulting in an accurate and efficient detection rate of 97%",
    description2:  
    "Implemented a robust registration system with frontend and backend validation to ensure maximum security",
    description3: 
    "Users are able to keep track of their face detection entries, change password and profile info",
    description4:  
    "Created user-friendly profile pages that enable users to manage their detection entries, change passwords, and view relevant information with ease",
    description5:  
    "",
    description6:  
    "",
  },
  {
    id: "Leaked-Password-Detector",
    img: pass1,
    img2: pass2,
    name: "Leaked Password Detector | Python Scripting",
    Tech: "Python | SHA-1 Hashing",
    date: "Apr 2023 - May 2023",
    live: "",
    source: "https://github.com/adamazizi10/Leaked-Password-Detector",
    description1:
    "Developed a password detector using Python and libraries such as requests and hashlib that enables users to verify if their passwords have been compromised, resulting in improved online security for users",
    description2: 
    "Achieved a reliable and accurate password check rate of 95% by integrating the application with the pwned passwords API and implementing SHA-1 hashing for password encryption",
    description3:  
    "Implemented a command-line interface for secure password checking, enabling users to avoid typing their full password on the web and minimizing the risk of sensitive information exposure",
    description4:  
    "",
    description5:  
    "",
    description6:  
    "",
  },
  // {
  //   id: "E-Portfolio",
  //   img: PortfolioPic,
  //   img2: PortfolioPic2,
  //   name: "E-Portfolio",
  //   Tech: "Reactjs | Hooks | Redux",
  //   date: "Sep 2022 - Oct 2022",
  //   live: "https://adamazizi.ml/",
  //   source: "https://github.com/adamazizi10/react-portfolio",
  //   description1:
  //   "Utilized Redux to manage state and improve application performance by minimizing the number of unnecessary re-renders",
  //   description2: 
  //   "Implemented React Hooks, such as useState and useEffect, to simplify the management of component state and lifecycle methods",
  //   description3:  
  //   "Employed responsive design principles and CSS media queries to ensure optimal rendering and user experience across a wide range of devices and screen sizes",
  //   description4:  
  //   "Utilized React Router to create a smooth, seamless navigation experience, allowing users to easily move between pages without needing to refresh the entire page",
  //   description5:  
  //   "Incorporated React components and props to organize and modularize code, improving readability and maintainability of the project",
  //   description6:  
  //   "",
  // },
  {
    id: "Bookstore",
    img: Book1,
    img2: Book2,
    name: "Bookstore Management App",
    Tech: "Java | Security | Authorizations | Testing",
    date: "Mar 2022 - Apr 2022",
    live: "",
    source: "https://github.com/adamazizi10/Bookstore-Management-System",
    description1: 
    `Utilized Java Swing to design a user-friendly and responsive graphical user interface that allows administrators to manage books, users, and orders with ease`,
    description2:
    "Designed and implemented a database schema using Java Database Connectivity (JDBC) to store and retrieve information about books, users, and orders in an efficient and organized manner",
    description3: 
    "Implemented an authentication and authorization system using Java's built-in security libraries to ensure that only authorized users can access sensitive data",
    description4:  
    "",
    description5:  
    "",
    description6:  
    "",
  },
];

export default {ProjectsData}