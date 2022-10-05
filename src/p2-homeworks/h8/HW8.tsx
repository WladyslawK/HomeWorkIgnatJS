import React, {useReducer} from 'react'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

const divContainer = {
    display: "flex",
    justifyContent: "start",
    marginLeft: "8px"
}

function HW8() {
    const [people, peopleDispatch] = useReducer(homeWorkReducer, initialPeople)

    const sortUPHandler = () => peopleDispatch(sortUpAC())
    const sortDownHandler = () => peopleDispatch(sortDownAC())
    const checkAgeHandler = () => peopleDispatch(checkAC(18))


    const finalPeople = people && people.map((person: UserType) => (
        <div key={person._id} style={{color: "green", marginLeft: "10px"}}>
            {person.name} {person.age}
        </div>
    ))

    return (
        <div>
            <hr/>
            <h3>homeworks 8</h3>

            {finalPeople}
            <div style={divContainer}>
                <SuperButton onClick={sortUPHandler}>sort up</SuperButton>
                <SuperButton onClick={sortDownHandler}>sort down</SuperButton>
                <SuperButton onClick={checkAgeHandler}>check 18</SuperButton>
            </div>

        </div>
    )
}

export default HW8
