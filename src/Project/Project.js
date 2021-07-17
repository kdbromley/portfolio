import underConst from '../img/under_construction.png'
import { Link } from 'react-router-dom';
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
                    <a href={project.url} target='_blank'><Button type='button' label='website' link={props.project.url} /></a>
                    <a href={project.github} target='_blank'><Button type='button' label='github' link={props.project.github} /></a>
                </div>
            </div>
        </div>

      </>
    )
}