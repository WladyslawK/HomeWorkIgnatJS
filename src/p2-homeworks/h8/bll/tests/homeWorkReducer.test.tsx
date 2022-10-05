import React from 'react'
import {checkAC, homeWorkReducer, sortDownAC, sortUpAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC())

    expect(newState[0].age).toBe(66)
    expect(newState[1].age).toBe(55)
    expect(newState[5].name).toBe('Кот')

    console.log(newState)
    // expect(...).toBe(...)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortDownAC())

    expect(newState[0].age).toBe(3)
    expect(newState[1].age).toBe(16)
    expect(newState[5].name).toBe('Александр')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC(18))

    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(newState.length).toBe(4)
})
