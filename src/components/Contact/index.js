import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_gd6ccvb', 'template_8vvt9xq', form.current, 'XRHWhlCwqPErS8_sk')
      .then(() => {
          alert('Message successfully sent!')
          window.location.reload(false)
        }, () => {
          alert('Failed to send the message, please try again!')
        });
  };
  
  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C','o','n','t','a','c','t',' ','m','e','.']}
              ind={15}
            />
          </h1>
          <p></p>
          <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Name' required />
                </li>
                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                <li>
                  <input type='text' name='subject' placeholder='Subject' required />
                </li>
                <li>
                  <textarea name='message' placeholder='Message' required></textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='ball-pulse' />
    </>
  );
};

export default Contact;