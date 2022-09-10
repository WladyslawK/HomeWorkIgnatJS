import React, {useState} from 'react'
import { v1 } from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// global data
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([{_id: v1(), name}, ...users]) // need to fix
    }

    return (
        <div>
            <hr/>

            {/*should work */}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*additional*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
