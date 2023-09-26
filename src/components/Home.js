import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
const Home = () => {

  return (
    <section id='home' className="bg-light p-5 min-vh-100">
      <div className='container-fluid mainHome'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className=''>Hey! I'm Adam Azizi</h1>
            <h1 id='AboutMe' className='fw-bold custom-font'>Software Developer</h1>
          </div>

          <div>
            <Player
            src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
            className="player"
              loop
              autoplay
              style={{ maxHeight: '500px', maxWidth: '500px' }}
            />
          </div>
        </div>
      </div>
      <hr /><br />
      <div className='displayFlexT'>
        <div>
          <Player
            src='https://assets4.lottiefiles.com/packages/lf20_5ko2mBiWUp.json'
            className="player spLottie"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>
        <div>
          <h1 className='fw-bold custom-font DescMe DescMe2'>About me</h1>
          <p className='DescMe'>
            As a driven and dedicated Computer Software Engineering student at Toronto Metropolitan University, I have gained valuable experience in a range of programming languages, frameworks and technologies. In addition to my technical skills, I have a strong foundation in object-oriented programming languages such as Java, Python, C++ and JavaScript. I am proficient in working with relational databases such as MySQL, PostgreSQL, Oracle Database and Microsoft SQL Server, as well as conducting JUnit and Selenium testing in both Java and Python. I am passionate about utilizing my skills to solve complex problems and create innovative solutions.<br /><br />
            As a Full Stack Developer, I have successfully applied my knowledge of React.js, Node.js and Express.js to develop functional and aesthetically pleasing websites. In addition, I have completed projects using Python for scripting, web scraping, web development, machine learning and data science, as well as Selenium testing.<br /><br />
            During my internship at Salumatics, I had the opportunity to contribute to the development of a web application for the company. Working as part of a team, I gained practical experience in agile development methodologies, as well as collaborating with stakeholders to ensure the successful delivery of the project.<br /><br />
            As a highly adaptable individual, I thrive in dynamic environments and am always eager to learn new technologies and methodologies. In my free time outside of work, I find joy in engaging in sports such as soccer and basketball. Additionally, my passion for soccer drives me to stay well-informed about the sport by following current news and matches. I'm very approachable and easy to talk to so feel free to reach out to me :D<br /><br />
            <a href='https://www.linkedin.com/in/adamazizi/' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
              <FaLinkedin style={{ color: '#3edd8e' }} />
            </a>
            <a href='https://github.com/adamazizi10' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
              <FaGithub style={{ color: '#3edd8e' }} />
            </a>
            <a href='mailto:adamazizi101@gmail.com' target='_blank' rel='noreferrer' style={{ fontSize: '20px' }}>
              <FaEnvelope style={{ color: '#3edd8e' }} />
            </a>

          </p>
        </div>
      </div>

      <br /><hr id='skills' /><br /><br /><br />
      <About />
      <hr id='experience' />
      <Experiences />
      <hr id='projects' />
      <Projects />
      <hr id='contact' />
      <Contact />
    </section>
  )
}

export default Home