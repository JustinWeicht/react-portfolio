import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoJ from '../../assets/images/LogoJ.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFilePdf, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoJ} alt='logo' />
    </Link>
    <nav>
      <NavLink exact='true' activeclassname='active' to='/'>
        <FontAwesomeIcon icon={faHome} color='#edd8ca' />
      </NavLink>
      <NavLink className='about-link' exact='true' activeclassname='active' to='/about'>
        <FontAwesomeIcon icon={faUser} color='#edd8ca' />
      </NavLink>
      <NavLink className='works-link' exact='true' activeclassname='active' to='/works'>
        <FontAwesomeIcon icon={faScrewdriverWrench} color='#edd8ca' />
      </NavLink>
      <NavLink className='contact-link' exact='true' activeclassname='active' to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color='#edd8ca' />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/1x3B4CLv3EHs6PhZKTPOu1hwl7Q9YyQOc/edit?usp=sharing&ouid=113811089123579226749&rtpof=true&sd=true'>
          <FontAwesomeIcon icon={faFilePdf} color='#edd8ca' />
        </a>
      </li>
      <li>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/justin-weicht/'>
          <FontAwesomeIcon icon={faLinkedin} color='#edd8ca' />
        </a>
      </li>
      <li>
        <a target='_blank' rel='noreferrer' href='https://github.com/JustinWeicht'>
          <FontAwesomeIcon icon={faGithub} color='#edd8ca' />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar;