import React from 'react';
import s from './footer.module.css'
import stylesCommon from './../common/container/commonContainer.module.css'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesCommon.commonContainer} ${s.container}`}>
                <h3 className={s.title}>Natalia K</h3>
                <div className={s.imgContainer}>
                    <div className={s.img}></div>
                    <div className={s.img}></div>
                    <div className={s.img}></div>
                    <div className={s.img}></div>
                </div>
                <p className={s.title}>@2021 Все права защищены</p>
            </div>
        </div>

    )
}
export default Footer