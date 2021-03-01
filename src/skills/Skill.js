import React from 'react';
import s from './skill.module.css'

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.img}></div>
            <h3>{props.title}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    )
}
export default Skill