import linkedInIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import emailIcon from '../img/mail.svg';
import './Contact.css';


export default function Contact(props) {
    return(
        <div className='Contact__container'>
            <a href='https://github.com/kdbromley' target='_blank' rel="noreferrer"><img src={githubIcon} alt=''/></a>
            <a href='https://www.linkedin.com/in/kd-bromley1' target='_blank' rel="noreferrer"><img src={linkedInIcon} alt='' /></a>
            <button aria-label='Email me! Click to copy email address to clipboard'><img src={emailIcon} alt='' className='email-button'/></button>
        </div>
    )
}