import linkIcon from '../icons/external-link.svg';
import githubIcon from '../icons/github.svg';
import descIcon from '../icons/book-open.svg';
import menuIcon from '../icons/menu.svg';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button(props) {
    let renderIcon = () => { 
        switch(props.label) {
           case 'website': return <img src={linkIcon} alt='Website Link Icon' />;
           case 'github': return <img src={githubIcon} alt='Github Link Icon' />;
           case 'desc': return <img src={descIcon} alt='Description Link Icon' />;
           case 'menu': return <img src={menuIcon} alt='Navbar Menu Icon' />
           default: return `${props.label}`;
         }
       }
     
    
    return (
        <Link to={`${props.link}`}>
            <button className={`button ${props.class}`}
            type='button'
            aria-label={`${props.label}`}>
              {renderIcon()}
            </button>
        </Link>
    );
}