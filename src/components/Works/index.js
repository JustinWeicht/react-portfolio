import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, } from 'react';
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Works = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  return (
    <>
      <div className='container works-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['W','o','r','k','s','.']}
              idx={15}
              />
          </h1>
          
          <div className="row">
            <div className="column">

              {/* Booklyst */}
              <div className="img-container">
                <img src={require("../../assets/small/work/1.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Booklyst</div>
                </div>
                <a className='top-button' href="https://booklyst-project.herokuapp.com/" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/group3uoft/booklyst" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>

              {/* Tech Blog */}
              <div className="img-container">
                <img src={require("../../assets/small/work/4.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Tech&nbsp;Blog</div>
                </div>
                <a className='top-button' href="https://module-14-tech-blog.herokuapp.com/" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/JustinWeicht/14-tech-blog" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>

            </div>
            <div className="column">

              {/* Bardic */}
              <div className="img-container">
                <img src={require("../../assets/small/work/0.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Bardic</div>
                </div>
                <a className='top-button' href="http://bardic.herokuapp.com/" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/FanCinco/Bardic" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>

              {/* Pizza Hunt */}
              <div className="img-container">
                <img src={require("../../assets/small/work/5.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Pizza&nbsp;Hunt</div>
                </div>
                <a className='top-button' href="https://creepy-nightmare-85054.herokuapp.com/" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/JustinWeicht/pizza-hunt" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>

            </div>
            <div className="column">

              {/* Nutriquotient */}
              <div className="img-container">
                <img src={require("../../assets/small/work/2.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Nutriquotient</div>
                </div>
                <a className='top-button' href="https://foodisfuel.github.io/gp5_project1/index.html" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/foodisfuel/gp5_project1" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>

              {/* Taskmaster Pro */}
              <div className="img-container">
                <img src={require("../../assets/small/work/6.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Taskmaster&nbsp;Pro</div>
                </div>
                <a className='top-button' href="https://justinweicht.github.io/taskmaster-pro/" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/JustinWeicht/taskmaster-pro" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>

            </div>
            <div className="column">

              {/* Budget Tracker */}
              <div className="img-container">
                <img src={require("../../assets/small/work/3.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Budget&nbsp;Tracker</div>
                </div>
                <a className='top-button' href="https://module-19-budget-tracker.herokuapp.com/" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/JustinWeicht/19-budget-tracker" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>

              {/* Run Buddy */}
              <div className="img-container">
                <img src={require("../../assets/small/work/7.jpg")} className="image" alt="gallery" />
                <div className="work-title">
                  <div className="work-title-text">Run&nbsp;Buddy</div>
                </div>
                <a className='top-button' href="ttps://JustinWeicht.github.io/run-buddy/" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGlobe} color='#6d9387' />
                </a>
                <a className='bot-button' href="https://github.com/JustinWeicht/run-buddy" rel="noreferrer" target="_blank">  
                  <FontAwesomeIcon className='fa-hover' icon={faGithub} color='#6d9387' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type='ball-pulse' />
    </>
  )
};

export default Works;