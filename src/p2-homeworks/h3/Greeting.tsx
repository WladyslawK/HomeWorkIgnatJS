import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDownAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// presentational component
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownAddUser} // destruction of props
) => {
    const inputClass = error ? s.error + " " + s.input : s.input // need to fix with (?:)

    return (
        <div className={s.container}>
            <h3>Homework 3</h3>
            <input value={name} onChange={setNameCallback} onKeyDown={onKeyDownAddUser} className={inputClass} onBlur={setNameCallback}/>
            <button disabled={error? true : false} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div className={s.errorMessage}>{error}</div>
        </div>
    )
}

export default Greeting
