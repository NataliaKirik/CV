import React from 'react';
import s from './contacts.module.css'
import stylesCommon from './../common/container/commonContainer.module.css'


const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${stylesCommon.commonContainer} ${s.container}`}>
                <h3 className={s.title}>Contacts</h3>
                <form action="" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <button className={s.button}>Send</button>
            </div>
        </div>

    )
}
export default Contacts