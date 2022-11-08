const CHANGE_THEME = "CHANGE-THEME"

type StateType = {
    theme: string
}

const initState = {
    theme: "red"
};

export const themeReducer = (state: StateType = initState, action: changeThemeCType): StateType => {
    switch (action.type) {
        case CHANGE_THEME:
            return {...state, theme: action.payload.theme}
        default: return state;
    }
};

type changeThemeCType = {
    type: "CHANGE-THEME"
    payload: {
        theme: string
    }
}

export const changeThemeC = (theme: string): changeThemeCType => ({type: CHANGE_THEME, payload: {theme}}as const); // fix any