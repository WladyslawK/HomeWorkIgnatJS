import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearTimeout(timerId)
        setTimerId(0)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
            return 1
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString() // fix with date

    return (
        <div style={{color: "white"}}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            <div style={{height: "20px"}}>
                {show ? stringDate : ""}
            </div>


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
