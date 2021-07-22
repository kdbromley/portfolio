
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
        After deciding a year ago to change careers from Neuroscience, I found myself drawn to web development and am now an upcoming graduate of a certificate program in Software Engineering and looking for my first professional role as a Web Developer. 
        I'm mainly interested in front-end development because, though not a designer myself, I enjoy working with design and seeing the tangible results of my work, turning a concept into a functional product.
      <br />
        I also know that no project is the work of a singular person. My background in Neuroscience and 
        Writing gave me plenty of experience in teamwork and collaboration and I look forward to working on a team again.
        </p>
      </div>
    </div>
  )
}
