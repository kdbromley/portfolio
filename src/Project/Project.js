import { Link } from 'react-router-dom';
import './Project.css';

export default function Project(props) {
    return (
        <div className='Project__container'>
        <Link to={`/${props.project.name}`}>
            <article className={props.project.id}>
                <h3>{props.project.name}</h3>
                <p>{props.project.description}</p>
            </article>
        </Link>
        </div>
    )
}