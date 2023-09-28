import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import '../index.css';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
const Home = ({theme}) => {
 
  return (
    <section id='home' className="background p-5 min-vh-100">
      <div className='container-fluid mainHome'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className='NameColour'>Hey! I'm Adam Azizi</h1>
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
      <hr style={{backgroundColor: theme}} /><br />
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
          <p className='DescMe aboutTextColour'>
          I am a Computer Software Engineering student at Toronto Metropolitan University with a strong foundation in various programming languages and technologies. My expertise includes Java, Python, C++, and JavaScript, along with proficiency in working with databases like MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server. Additionally, I have gained hands-on experience during my internship at Salumatics, where I contributed to the development of a web application, refining my skills in agile methodologies and stakeholder collaboration. I've also completed diverse projects using React.js, Node.js, Python for scripting, web scraping, web development, machine learning, data science, and testing.<br /><br />
          I thrive in dynamic environments and am always eager to learn new technologies and methodologies. In my free time outside of work, I find joy in engaging in sports such as soccer and basketball. Additionally, my passion for soccer drives me to stay well-informed about the sport by following current news and matches. I'm very approachable and easy to talk to so feel free to reach out to me.<br /><br />
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

      <br /><hr id='skills'  style={{backgroundColor: theme}}></hr><br /><br /><br />
      <About />
      <hr id='experience' style={{backgroundColor: theme}}/>
      <Experiences />
      <hr id='projects' style={{backgroundColor: theme}}/>
      <Projects />
      <hr id='contact' style={{backgroundColor: theme}}/>
      <Contact />
    </section>
  )
}

export default Home