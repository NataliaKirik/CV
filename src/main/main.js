import React from 'react';
import s from './main.module.css'
import stylesCommon from './../common/container/commonContainer.module.css'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={`${s.container} ${stylesCommon.commonContainer}`}>
                <div className={s.title}>
                    <span>Hi there</span>
                    <h1>I am Natalia K</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    )
}
export default Main