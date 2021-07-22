import linkedInIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import Button from '../Button/Button';
import './Contact.css';


export default function Contact(props) {
    function onClickEmail() {
        //window.
    }

    return(
        <div className='Contact__container'>
            <a href='https://github.com/kdbromley' target='_blank' rel="noreferrer"><img src={githubIcon} alt='' className='contact-icon'/></a>
            <a href='https://www.linkedin.com/in/kd-bromley1' target='_blank' rel="noreferrer"><img src={linkedInIcon} alt='' className='contact-icon'/></a>
            <Button aria='Email me! Click to copy email address to clipboard' onClick={onClickEmail} label='email' className='contact-icon'/>
        </div>
    )
}