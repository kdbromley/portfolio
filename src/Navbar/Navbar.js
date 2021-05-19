import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
    return (
        <nav className={props.classes} aria-hidden={props.aria}>
            <ul className='Navbar__links'>
                <Link to='#about'><li>about</li></Link>
                <Link to='#projects'><li>projects</li></Link>
                <Link to='#contact'><li>contact</li></Link>
            </ul>
        </nav>
    )
}