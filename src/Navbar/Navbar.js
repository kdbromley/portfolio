import './Navbar.css';

export default function Navbar(props) {
    if(props.classes === 'Navbar__mobile') document.querySelector('.mobile-detail').style.display = 'inherit';
    return (
        <nav className={props.classes} aria-hidden={props.aria}>
            <ul className='Navbar__links'>
                <a href='#about'><li>about<span className='mobile-detail' style={{'display': 'none'}}>||</span> </li></a>
                <a href='#projects'><li>projects<span className='mobile-detail' style={{'display': 'none'}}>||</span> </li></a>
                <a href='#contact'><li>contact</li></a>
            </ul>
        </nav>
    )
}