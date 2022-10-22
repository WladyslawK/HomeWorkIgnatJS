const SET_LOADING_ACTIVE = "SET-LOADING"
const SET_LOADING_END = "SET-LOADING-ENDED"
export type initStateType = {
    loading: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state: initStateType = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case SET_LOADING_ACTIVE:
            return {loading: true}
        case SET_LOADING_END:
            return {loading: false}
        default:
            return state
    }
}

type ActionsType = loadingACType | loadingDoneACType

type loadingACType = ReturnType<typeof loadingActiveAC>
export const loadingActiveAC = () => {
    return {
        type: SET_LOADING_ACTIVE
    } as const
}

type loadingDoneACType = ReturnType<typeof loadingDoneAC>
export const loadingDoneAC = () => {
    return {
        type: SET_LOADING_END
    } as const
}
