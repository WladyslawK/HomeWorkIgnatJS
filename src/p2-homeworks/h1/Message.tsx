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
            <div className={s.imgContainer}>
                <div className={s.styleContainer}>
                    <img src={avatar} alt="avatar"/>
                </div>

            </div>

            <div className={s.messageContainer}>
                <span className={s.name}>{name}</span>
                <span>{message}</span>
                <span className={s.time}>{time}</span>
            </div>
        </div>
    )
}

export default Message
