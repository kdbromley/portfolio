import Button from '../Button/Button';
import './Project.css';
import { useState } from 'react';

export default function Project(props) {
    const [isDisplayMore, setIsDisplayMore] = useState('no-display')
    
    let project = props.project;

    function handleClick() {
        if(isDisplayMore === 'no-display') {
            setIsDisplayMore('display')
        } else {
            setIsDisplayMore('no-display')
        }
    }

    return (
       <>
        <div className={`Project__container ${project.display} container-${isDisplayMore}`}
          onClick={() => handleClick()}>
            <h3 className='Project__name'>{project.name}</h3>
    
            <div className={`Project__display-more ${isDisplayMore}`}>
                <p>{props.project.desc}</p>
                <div className='Project__buttons'>
                    <a href={project.url} target='_blank' rel='noreferrer'><Button type='button' label='website' aria='Live website' class='project-icon' /></a>
                    <a href={project.github} target='_blank' rel='noreferrer'><Button type='button' label='github' aria='Github page' class='project-icon' /></a>
                </div>
            </div>
        </div>

      </>
    ) 
}