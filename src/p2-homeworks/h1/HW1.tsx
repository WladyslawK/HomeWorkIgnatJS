import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'did you click npm start?',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div>
                homeworks 1
                should work (должно работать)
            </div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}

        </div>
    )
}

export default HW1
