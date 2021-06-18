import underConst from '../img/under_construction.png'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Project.css';
import { useState } from 'react';

export default function Project(props) {
    const [isHover, setIsHover] = useState('')
    const [isDisplayMore, setIsDisplayMore] = useState(false)
    const [whoseDisplay, setWhoseDisplay] = useState('')

    let handleClick = (e) => {
        if(isDisplayMore) {
            setIsDisplayMore(false)
        } else {
            setIsDisplayMore(true)
        }
    }
    
    let stopHoverImage = () => {
        //
    }
    let hoverImage = () => {
        let img= document.querySelector('.hoverimage')
        
    }

    return (
       <>
        <div className='Project__container' 
          onMouseEnter={() => hoverImage()} 
          onMouseLeave={() => stopHoverImage()}
          onClick={() => handleClick()}>
            <h3 className='Project__name'>{props.project.name}</h3>
           
           {isDisplayMore && 
            <div className='Project__display-more'>
                <p>{props.project.desc}</p>
                <div className='Project__buttons'>
                    <Link to={props.project.url} target='_blank'><Button type='button' label='website' link={props.project.url} /></Link>
                    <Link to={props.project.github} target='_blank'><Button type='button' label='github' link={props.project.github} /></Link>
                </div>
            </div>
            }
            <div id='hoverimage' className='hoverimage' style={{ 'display': 'none' }}>
            <img src={underConst} alt='placeholder'/>
        </div>
        </div>

      </>
    )
}