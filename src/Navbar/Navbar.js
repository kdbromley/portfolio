import './Navbar.css';

export default function Navbar(props) {
    return (
        <nav className={props.classes} aria-hidden={props.aria}>
            <div className='Navbar__links'>
                <p><a href='#about' className='Nav__link'>about/</a></p>
                <p><a href='#projects' className='Nav__link'>projects/</a></p>
                <p><a href='#contact' className='Nav__link'>contact/</a></p>
            </div>
        </nav>
    )
}