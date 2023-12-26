import React, { useEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import '../index.css';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
const Home = ({ theme, isDarkMode }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id='home' className="background p-5 min-vh-100">
      <div className='container-fluid mainHome'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className='NameColour'>Hey! I'm Adam Azizi</h1>
            <h1 id='AboutMe' className='fw-bold custom-font'>Software Developer</h1>
          </div>

          {windowSize.width > 850  && windowSize.width < 1100 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '350px', maxWidth: '350px' }}
            />
          </div>}
          {windowSize.width > 1100 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '500px', maxWidth: '500px' }}
            />
          </div>}
        </div>
      </div>
      <hr style={{ backgroundColor: theme }} /><br />
      <div className='displayFlexT'>
        {windowSize.width > 1200 && <div>
          <Player
            src='https://assets4.lottiefiles.com/packages/lf20_5ko2mBiWUp.json'
            className="player spLottie"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>}
        <div>
          <h1 className='fw-bold custom-font DescMe DescMe2'>About me</h1>
          <p className='DescMe aboutTextColour'>
            I am a Computer Software Engineering student at Toronto Metropolitan University. I am graduating in April 2024 with a strong foundation in various programming languages and technologies. My expertise includes Java, Python, C++, and JavaScript, along with proficiency in working with databases like MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server. Additionally, I have gained hands-on experience during my time at PMC, Tetra, and Salumatics, where I contributed to the development of applications, refining my skills in agile methodologies. I've also completed diverse projects using React.js, Node.js, Django, Python for scripting, web scraping, web development, machine learning, data science, and testing.<br /><br />
            I thrive in dynamic environments and am always eager to learn new technologies and methodologies. In my free time outside of work, I find joy in engaging in sports such as soccer and basketball. Additionally, my passion for soccer drives me to stay well-informed about the sport by following current news and matches. I'm very approachable and easy to talk to so feel free to reach out: <a style={{'color': '#3EDD8e'}} href='mailto:adamazizi102@gmail.com'>adamazizi102@gmail.com</a><br /><br />
            <a href='https://www.linkedin.com/in/adamazizi/' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
              <FaLinkedin style={{ color: '#3edd8e' }} />
            </a>
            <a href='https://github.com/adamazizi10' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
              <FaGithub style={{ color: '#3edd8e' }} />
            </a>
          </p>
        </div>
      </div>

      <br /><hr id='skills' style={{ backgroundColor: theme }}></hr><br /><br /><br />
      <About isDarkMode={isDarkMode} />
      <hr id='experience' style={{ backgroundColor: theme }} />
      <Experiences />
      <hr id='projects' style={{ backgroundColor: theme }} />
      <Projects windowSize={windowSize} />
      <hr id='contact' style={{ backgroundColor: theme }} />
      <Contact />
    </section>
  )
}

export default Home