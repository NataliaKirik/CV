import React from 'react';
import s from './skills.module.css'
import stylesCommon from './../common/container/commonContainer.module.css'
import Skill from "./Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesCommon.commonContainer} ${s.container}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'Css'} description={'A, ab asperiores consectetur corporis cumque\n' +
                    '                deserunt eius est eveniet fugit illo nam'}/>
                    <Skill title={'React'}
                           description={'Accusantium adipisci consequuntur culpa distinctio dolore eveniet excepturi expedita' +
                           'fuga itaque magnam'}/>
                </div>
            </div>
        </div>
    )
}
export default Skills