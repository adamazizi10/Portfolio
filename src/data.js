import facedetector4 from "./assets/portfolioImages/face-detector4.png"
import Book1 from "./assets/portfolioImages/Book1.png"
import game1 from "./assets/portfolioImages/game1.png"
import wristband1 from "./assets/portfolioImages/wristband1.png"
import fuelfinder16 from "./assets/portfolioImages/fuelfinder16.png"
import fuelfinder2 from "./assets/portfolioImages/fuelfinder2.png"
import autolib from './assets/portfolioImages/autolib3.png'

const ProjectsData = [
  {
    id: "Face-Detector",
    img: facedetector4,
    img2: facedetector4,
    name: "Face Detector Full Stack Application",
    Tech: "Reactjs | Node.js | Express.js | PostgreSQL | Figma",
    date: "Aug 2022 - Sep 2022",
    live: "https://www.face-detector.live/",
    source: "https://github.com/adamazizi10/Face-Detector",
    description1:
      "Developed a secure and scalable web application using Reactjs, Node.js, Express.js, and PostgreSQL to detect faces in images using Clarafai’s Face Recognition API, resulting in an accurate and efficient detection rate of 97%",
    description2:
      "Implemented a robust registration system with frontend and backend validation to ensure maximum security",
    description3:
      "Users are able to keep track of their face detection entries, change password and profile info",
    description4:
      "Created user-friendly profile pages that enable users to manage their detection entries, change passwords, and view relevant information with ease",

    description5:
      "Designed and implemented a secure and scalable web application using a tech stack comprising Reactjs, Node.js, Express.js, and PostgreSQL. Leveraging Clarafai’s Face Recognition API, the system achieves an impressive 97% accuracy in detecting faces in images, showcasing a high level of precision and efficiency in image recognition technology.",

    description6:
      "Established a robust registration system that prioritizes security through meticulous frontend and backend validation processes. This system ensures that user data remains protected, reflecting a dedication to creating a trustworthy and secure environment for user registration and engagement.",

    description7:
      "Authorized users with comprehensive control over their account activities by enabling features such as tracking face detection entries, facilitating password changes, and updating profile information. This user-centric approach enhances the overall experience, showing a sense of ownership and personalization within the application.",

    description8:
      "Created user-friendly profile pages that seamlessly integrate with the web application, providing an intuitive interface for users to manage their face detection entries, change passwords, and access relevant information effortlessly. This emphasis on user experience promotes accessibility and ease of use, enhancing overall user satisfaction and engagement."
  },
  {
    id: "capstoneWristband",
    img: wristband1,
    img2: wristband1,
    name: "Parkinson Disease Detection Wristband with Full Stack GUI",
    Tech: "Python | React.js | Node.js | Express.js | Figma",
    date: "Sep 2023 - Dec 2023",
    live: "https://parkinson-wristband.vercel.app/",
    source: "https://github.com/adamazizi10/Parkinson-Wristband-GUI",
    description1:
      "Engineered a Parkinson's Disease Simulation and detection wristband by utilizing motors on two rails controlled by an ESP32 microcontroller and MPU6050 motion-tracker to retrieve accelerometer data",
    description2:
      "Implemented the K-Nearest Neighbours Machine Learning algorithm to assess Parkinson's severity from the data and categorizing it as None, Low, Medium, or High",
    description3:
      "Developed the GUI using React.js and Node.js for interaction and 3D visualization of Parkinson's detection results, and an account system for healthcare professionals, assigning each doctor a dashboard for patient profile management",
    description4:
      "Secured seamless data transfer with RESTful APIs, utilizing password hashing and salting for robust user account protection",

    description5:
      "Engineered a fully functional Parkinson's Disease Simulation and detection wristband, employing innovative technologies such as motors on two rails controlled by an ESP32 microcontroller and an MPU6050 motion-tracker to capture precise accelerometer data. This meticulous approach ensures accuracy and reliability in detecting Parkinson's Disease symptoms.",

    description6:
      "Implemented the K-Nearest Neighbours Machine Learning algorithm to analyze accelerometer data and assess Parkinson's severity. The system intelligently categorizes the severity into distinct levels of None, Low, Medium, or High, providing valuable insights for healthcare professionals in evaluating and managing patients' conditions effectively.",

    description7:
      "Developed an intuitive graphical user interface (GUI) using React.js and Node.js, facilitating user interaction and 3D visualization of Parkinson's detection results. Additionally, a sophisticated account system tailored for healthcare professionals was created, assigning each doctor a personalized dashboard for efficient patient profile management and data interpretation.",

    description8:
      "Ensured high security in data transfer through RESTful APIs, incorporating advanced measures such as password hashing and salting.",
  },
  {
    id: "autolib",
    img: autolib,
    img2: autolib,
    name: "Autolib - Automated Public Library System",
    Tech: "React.js | Node.js | Flask | Figma",
    date: "Sep 2023 - Dec 2023",
    live: "https://autolib-one.vercel.app/",
    source: "https://github.com/adamazizi10/Autolib-Automated-Library",
    description1:
      "Developed a responsive React.js and Flask web application by integrating AI-powered bias detection tools in systematic evidence synthesis, containerized with Docker and hosted on live server",
    description2:
      "Created an annotation tool for volunteers, simplifying PDF annotation for AI training, resulting in over 80% productivity gains and increased annotated PDFs for data collection",
    description3:
      "Implemented UI/UX design principles to ensure a visually appealing interface, simplifying accessibility to AI functionalities for bias detection and analysis",
    description4:
      "Contributed to project documentation to ensure comprehensive documentation for future AI Tool volunteers",

    description5:
      "Developed a responsive web application using React.js and Flask, integrating AI-powered bias detection tools for systematic evidence synthesis. Containerized the application with Docker and hosted it on a live server for real-time access.",

    description6:
      "Designed and implemented an annotation tool to simplify PDF annotation for AI training, resulting in over 80% productivity gains and increased annotated PDFs for enriched data collection.",

    description7:
      "Applied UI/UX design principles to ensure a visually appealing interface, making AI functionalities for bias detection and analysis accessible to users of varying technical backgrounds.",

    description8:
      "Contributed extensively to project documentation, creating comprehensive guides for future volunteers to understand the application's architecture, functionality, and deployment procedures, ensuring seamless project continuity.",
  },
  {
    id: "Fuel-Finder",
    img: fuelfinder16,
    img2: fuelfinder2,
    name: "Fuel Finder Detector Web Application",
    Tech: "Next.js | Reactjs | Typescript | Tailwind CSS | Figma",
    date: "Aug 2022 - Sep 2022",
    live: "https://www.fuelfinder.live/",
    source: "https://github.com/adamazizi10/Fuel-Finder",
    description1:
      "Developed a responsive Fuel Finder Web Application utilizing Next.js, ReactJS, TypeScript, and Tailwind CSS, enabling users to locate the nearest gas stations with a user-friendly interface",
      description2:
      "Integrated interactive maps and real-time data fetching to display gas stations' locations, addresses, and navigation links",
    description3:
      "Designed and implemented a detailed gas station profile page for each listing, providing users with essential information",
    description4:
      "Incorporated precise geolocation data, providing users with the exact longitude and latitude coordinates for each gas station accessed",
      description5:
      "Developed a responsive Fuel Finder Web Application utilizing Next.js, ReactJS, TypeScript, and Tailwind CSS, enabling users to locate the nearest gas stations with a user-friendly interface, contributing to an enhanced user experience and engagement",
      description6:
      "Integrated interactive maps and real-time data fetching to display gas stations' locations, addresses, and navigation links, ensuring users can access accurate and up-to-date information for efficient route planning",
    description7:
      "Incorporated precise geolocation data, providing users with the exact longitude and latitude coordinates for each gas station accessed, enabling more accurate and efficient navigation planning and enhancing the utility of the application for location-specific searches",
    description8:
      "Designed and implemented a detailed gas station profile page for each listing, providing users with essential information including a direct link for navigation",

  },
  {
    id: "PongGame",
    img: game1,
    img2: game1,
    name: "Full Stack Application with Multiplayer Pong Game",
    Tech: "Reactjs | Django | SQLite | Python | Figma | Websockets",
    date: "Sep 2023 - Nov 2023",
    live: "",
    source: "https://github.com/adamazizi10/Multiplayer-Pong-Game",
    description1:
      "Created an online multiplayer pong game enabling participation of up to 8 guest or registered players at once",
    description2:
      "Utilized Reactjs for frontend and Django for backend, to create the account system allowing players to save and view their match history as well as the access a dynamic leaderboard",
    description3:
      "Implemented WebSocket technology in JavaScript to enable real-time multiplayer functionality for the game",
    description4:
      "Added authTokens to enhance session management, ensuring secure player tracking and efficient management of game room IDs",
    description5:
      "Developed and deployed a cutting-edge online multiplayer pong game, elevating the gaming experience by accommodating up to 8 concurrent players, whether they are guests or registered users. The emphasis was on creating a seamless and engaging platform for players to connect and compete in real-time.",

    description6:
      "Employed Reactjs for the frontend and Django for the backend, crafting a robust account system that empowers players to not only participate in exhilarating matches but also save and review their match history. The incorporation of a dynamic leaderboard adds a competitive edge, showing a sense of achievement and recognition within the gaming community.",

    description7:
      "Integrated WebSocket technology in JavaScript, a pivotal step in achieving real-time multiplayer functionality for the game. This technology facilitates instantaneous communication, creating an immersive gaming environment where players can experience the thrill of live competition with minimal latency.",

    description8:
      "Implemented authTokens to elevate session management, ensuring a secure and efficient way to track players and manage game room IDs. This addition not only enhances the overall security of player data but also streamlines the gaming experience by providing a stable and reliable framework for tracking player activity and ensuring seamless transitions within the gaming environment."
  },
];

const exportObject = {
  ProjectsData,
};

export default exportObject;
