
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Project.css';

export default function Project(props) {
    return (
        <div className='Project__container'>
            <h3 className='Project__name'>{props.project.name}</h3>
            <div className='Project__buttons'>
                <Link to={props.project.url} target='_blank'><Button type='button' label='website' link={props.project.url} /></Link>
                <Link to={props.project.github} target='_blank'><Button type='button' label='github' link={props.project.github} /></Link>
            </div>
        </div>
    )
}