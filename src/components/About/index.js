import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCss3Alt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A','b','o','u','t',' ','m','e','.']}
              idx={15}
              />
          </h1>
          <p>
            I have recently completed a Coding Bootcamp program at University of Toronto and am looking forward to switching careers from HVAC/R into web development. 
            </p>
          <p>
            I have a lot of passion for computers, learning about new technologies, creating new projects, and troubleshooting/problem-solving issues or problems in current systems. This made me explore new career paths which led to web development. 
          </p>
          <p>
            I look forward to continuously developing my skill-set as a web developer.
          </p>
        </div>
        
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faAws} />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faReact} />
            </div>
          </div>
        </div>
      </div>
      <Loader type='ball-pulse' />
    </>
  )
};

export default About;