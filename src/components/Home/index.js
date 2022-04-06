import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import './index.scss';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const worldArray = ['H','e','l','l','o',',',' ','W','o','r','l','d','!']
  const nameArray = ['M','y',' ','n','a','m','e',' ','i','s',' ','J', 'u', 's', 't', 'i', 'n']
  const jobArray = ['a','n','d',' ','I',`'m`,' ','a',' ','w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} 
            strArray={worldArray}
            idx={12}/>
            <br /> 
            <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray}
            idx={12}/>
            <br />
            <AnimatedLetters letterClass={letterClass} 
            strArray={jobArray}
            idx={12} />
            <br />
          </h1>
          <br />
          <h2>
            <br />
            Frontend Developer / Backend Developer
          </h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type='ball-pulse' />
    </>
  );
}

export default Home;