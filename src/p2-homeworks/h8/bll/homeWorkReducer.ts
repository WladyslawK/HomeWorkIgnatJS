import {typeOptions} from "@testing-library/user-event/dist/type/typeImplementation";
import {UserType} from "../HW8";
const SORT_UP = "SORT-UP"
const SORT_DOWN = "SORT-DOWN"
const CHECK_AGE = "CHECK-AGE"

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case "SORT-UP":
            return [...state.sort((a, b) => a.name.localeCompare(b.name))]
        case "SORT-DOWN":
            return [...state.sort((a, b) => b.name.localeCompare(a.name))]
        case "CHECK-AGE":
            return state.filter(person => person.age > action.payload.age)
        default: return state
    }
}

type ActionType = sortUpACType | sortDownACType | checkACType


type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: SORT_UP
    } as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: SORT_DOWN
    } as const
}

type checkACType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
    return {
        type: CHECK_AGE,
        payload: {
            age
        }
    } as const
}

