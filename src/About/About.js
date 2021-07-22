
import './About.css';

export default function About(props) {

  return (
    <div className='About__container' aria-live='polite'>
      <ul className='About__skills'>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Node.js</li>
        <li >Express.js</li>
        <li>Postgres</li>
        <li>SQL / Knex</li>
      </ul>
      <div className='About__desc'> 
        <p>
        I'm drawn to front-end development because I love to mix creativity with utility, turning design into a functional web page.
        I enjoy the logic and challenge of coding 
      <br />
        I also know that no website or app is the work of a singular person. My background in Neuroscience and 
        Writing gave me plenty of experience in teamwork and cooperation and I look forward to working on a team again.
        </p>
      </div>
    </div>
  )
}
