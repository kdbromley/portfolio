import './Contact.css';

export default function Contact(props) {
    return(
        <div className='Contact__container' id='contact'>
            <form>
                <label htmlFor='name'>
                    Name: 
                    <input id='name' name='name' type='text' />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input id='email' name='email' type='text' />
                </label>
                <label htmlFor='message'>
                    Message:
                    <input id='message' name='message' type='textarea' />
                </label>
            </form>
        </div>
    )
}