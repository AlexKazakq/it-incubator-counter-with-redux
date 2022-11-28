export type initialStateType = {
    counter: number
    maxValue: number
    startValue: number
    isSetting: boolean
    error: boolean
}

let initialState: initialStateType = {
    counter: 0,
    maxValue: 1,
    startValue: 0,
    isSetting: true,
    error: false
}

export type CounterActionType = setCounterAT | setMaxValueAT | setStartValueAT | setIsSettingAT | setErrorAT

type setCounterAT = ReturnType<typeof setCounterAC>
type setMaxValueAT = ReturnType<typeof setMaxValueAC>
type setStartValueAT = ReturnType<typeof setStartValueAC>
type setIsSettingAT = ReturnType<typeof setIsSettingAC>
type setErrorAT = ReturnType<typeof setErrorAC>

const SET_COUNTER = 'SET_COUNTER'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_START_VALUE = 'SET_START_VALUE'
const SET_IS_SETTING = 'SET_IS_SETTING'
const SET_ERROR = 'SET_ERROR'

export const stateReducer = (state = initialState, action: CounterActionType) => {
    switch (action.type) {
        case SET_COUNTER:
            return {
                ...state,
                counter: action.counter
            }
        case SET_MAX_VALUE:
            return {
                ...state,
                maxValue: action.maxValue
            }
        case SET_START_VALUE:
            return {
                ...state,
                startValue: action.startValue
            }
        case SET_IS_SETTING:
            return {
                ...state,
                isSetting: action.isSetting
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const setCounterAC = (counter: number) => ({type: SET_COUNTER, counter} as const)
export const setMaxValueAC = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue} as const)
export const setStartValueAC = (startValue: number) => ({type: SET_START_VALUE, startValue} as const)
export const setIsSettingAC = (isSetting: boolean) => ({type: SET_IS_SETTING, isSetting} as const)
export const setErrorAC = (error: boolean) => ({type: SET_ERROR, error} as const)