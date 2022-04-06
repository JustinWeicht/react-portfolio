import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoJ from '../../assets/images/LogoJ.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
      <NavLink className='contact-link' exact='true' activeclassname='active' to='/contact'>
        <FontAwesomeIcon icon={faEnvelope} color='#edd8ca' />
      </NavLink>
    </nav>
    <ul>
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