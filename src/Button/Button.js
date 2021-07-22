import linkIcon from '../img/external-link.svg';
import githubIcon from '../img/github.svg';
import emailIcon from '../img/mail.svg';
import './Button.css';

export default function Button(props) {
  let renderIcon = () => { 
  switch(props.label) {
      case 'website': return <img src={linkIcon} alt='Website Link Icon' className={props.class}/>;
      case 'github': return <img src={githubIcon} alt='Github Link Icon' className={props.class}/>;
      case 'email': return <img src={emailIcon} alt='Email icon' className='contact-icon'/>;
      default: return `${props.label}`;
    }
  }
     
    
  return (
    <button type='button' 
    onClick={props.onClick}
    aria-label={props.aria}>
      {renderIcon()}
    </button>
);
}