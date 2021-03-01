import React from 'react';
import s from './project.module.css'

const Project = (props) => {
    return (
        <div className={s.projectWrapper}>
            <div className={s.backGroundImage}>
                <button>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>

    )
}
export default Project