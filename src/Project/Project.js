import Button from '../Button/Button';
import './Project.css';

export default function Project(props) {
    return (
        <div className='Project__container'>
            <h3 className='Project__name'>{props.project.name}</h3>
            <div className='Project__buttons'>
                <Button type='button' label='website' link={props.project} />
                <Button type='button' label='github' link={props.project} />
                <Button type='button' label='desc' link={props.project}/>
            </div>
        </div>
    )
}