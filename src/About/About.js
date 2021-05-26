import { useState } from 'react';
import Button from '../Button/Button';
import './About.css';

export default function About(props) {
  const [isVis, setIsVis] = useState('more')

  let onButtonClick = () => {
    if(isVis === 'less'){
      setIsVis('more')
      document.querySelector('.bg').focus();
    } else {
      setIsVis('less')
      document.querySelector('.bg').focus();
    }
  }

  return (
    <div className='About__container'>
      <div className='About__skills'>
        <h3>Skills</h3>
        <ul className='skills__list'>
          <li>HTML5</li>
          <li className='stagger'>CSS3</li>
          <li>Javascript</li>
          <li className='stagger'>React</li>
          <li>Node.js</li>
          <li className='stagger'>Express.js</li>
          <li>Postgres</li>
          <li className='stagger'>SQL / Knex</li>
        </ul>
      </div>
      <div className='About__desc'> 
        <h3 className='bg'>Background</h3>
        <p>I'm a new web developer finishing a certification program in Software Engineering at Thinkful. I'm mainly interested in frontend development but I have experience with backend technologies as well.</p>
        <p>I'm drawn to web development because I love to mix creativity with utility.<span className='ellipses'>...</span><span className={`description ${isVis}`}>I get a sincere sense of gratification from seeing my work have a tangible outcome and 
        effect. Even better, if that work is attractive, appealing, that it's a positive experience for others. I notice when website and apps are aesthetically pleasing, 
        functional, intuitive, and intelligent - they're enjoyable to use! I'm excited to one day be on the other end, creating those experiences for other users, 
        especially as the world moves increasingly online.
      <br />
        I also know that none of these websites or apps were the work of a singular person. Creativity flourishes in collaboration. My background in Neuroscience and 
        Writing gave me plenty of experience in teamwork and cooperation: no piece of writing was done before getting feedback and input from other writers, constant 
        critique and revision and critique; experimental proposals were created by teams of researchers and vetted, shredded, critiqued, rewritten multiple times before 
        moving forward. I look forward to working on a team again, sharing inspiration and honing ideas and bringing unique skills and styles together to create attractive 
        and functional projects.
        </span></p>
        <Button link='' label={`${isVis}`} onClick={() => onButtonClick()} />
      </div>
    </div>
  )
}
