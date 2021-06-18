import linkIcon from '../img/external-link.svg';
import githubIcon from '../img/github.svg';
import descIcon from '../img/book-open.svg';
import moreIcon from '../img/more-horizontal.svg';
import './Button.css';

export default function Button(props) {
  let renderIcon = () => { 
  switch(props.label) {
      case 'website': return <img src={linkIcon} alt='Website Link Icon' />;
      case 'github': return <img src={githubIcon} alt='Github Link Icon' />;
      case 'desc': return <img src={descIcon} alt='Description Link Icon' />;
      case 'noshow': return <img src={moreIcon} alt='Read More Background Link Icon' />;
      case 'show': return <img src={moreIcon} alt='Read More Background Link Icon' />;
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