import React from 'react';
import s from './projects.module.css'
import stylesCommon from './../common/container/commonContainer.module.css'
import Project from "./Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${stylesCommon.commonContainer} ${s.container}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projectsWrapper}>
                    <Project title={'Название проекта'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus eos est eum hic incidunt ipsam labore soluta, veniam voluptatem?'}/>
                    <Project title={'Название проекта'} description={'Lorem ipsum dolor sit amet, consectetur' +
                    ' adipisicing elit. Assumenda delectus eos est eum hic incidunt ipsam labore soluta, veniam voluptatem?'}/>
                </div>
            </div>
        </div>
    )
}
export default Projects