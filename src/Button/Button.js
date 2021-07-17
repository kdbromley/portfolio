import linkIcon from '../img/external-link.svg';
import githubIcon from '../img/github.svg';
import './Button.css';

export default function Button(props) {
  let renderIcon = () => { 
  switch(props.label) {
      case 'website': return <img src={linkIcon} alt='Website Link Icon' />;
      case 'github': return <img src={githubIcon} alt='Github Link Icon' />;
      default: return `${props.label}`;
    }
  }
     
    
  return (
    <button className={`button ${props.class}`}
    type='button' onClick={props.onClick}
    aria-label={`${props.label}`}>
      {renderIcon()}
    </button>
);
}