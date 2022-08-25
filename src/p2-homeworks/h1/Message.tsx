import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({avatar, name, message, time}: MessagePropsType) {
    return (
        <div className={s.message}>

            <img src={avatar} alt="avatar"/>

            <div className={s.angle}/>

            <div className={s.contentContainer}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{message}</div>
                <div className={s.time}>{time}</div>
            </div>
        </div>

    )
}

export default Message
