import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// more simple and understandable
// function GreetingContainer(props: GreetingPropsType) {

// more complex and modern
// level of local logic
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // destructive assign
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
    }
    const addUser = () => {
        if(name.trim()!==""){
            alert(`Hello ${name} !`) // need to fix
            addUserCallback(name)
            setName("")
        }else{
            setError("Name can not be space")
        }

    }

    const onKeyDownAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key==="Enter") addUser()
    }

    const totalUsers = users.length// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDownAddUser={onKeyDownAddUser}
        />
    )
}

export default GreetingContainer
