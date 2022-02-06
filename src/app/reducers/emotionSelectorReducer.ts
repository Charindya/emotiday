export const emotionSelectorReducer = (state = 0, action: any) => {
    switch (action.type) {
        case "ANGRY":
            return state + 1;
        case "SAD":
            return state + 2;
        case "NEUTRAL":
            return state + 3;
        case "HAPPY":
            return state + 4;
        case "ECSTATIC":
            return state + 5;
        default:
            return 0;
    }
}

// used to export a single class. function or primitive from a script file, makes it available to the rest of the app
export type emotionSelectorReducerType = ReturnType<typeof emotionSelectorReducer>