import './index.scss';
import solidWorld from '../../../assets/images/world.png';
import outlineWorld from '../../../assets/images/world-outline.png'

const Logo = () => {
  return (
    <div className='world-container'>
      <img className='solid-world' src={solidWorld} alt='solid world' />
      <img className='outline-world' src={outlineWorld} alt='outline world' />
    </div>
  );
};

export default Logo;
