

export type initialStateType = {
    counter: number
    maxValue: number
    startValue: number
    isSetting: boolean
    error: boolean
}

let initialState: initialStateType = {
    counter: 0,
    maxValue: 0,
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

// export const setCounterTC = (counter: number): any => (dispatch: Dispatch) => {
//     localStorage.setItem('counter', JSON.stringify(counter))
//     dispatch(setCounterAC(counter))
// }
//
// export const setMaxValueTC = (maxValue: number): any => (dispatch: Dispatch) => {
//     localStorage.setItem('maxValue', JSON.stringify(maxValue))
//     dispatch(setMaxValueAC(maxValue))
// }
// export const setStartValueTC = (startValue: number): any => (dispatch: Dispatch) => {
//     localStorage.setItem('startValue', JSON.stringify(startValue))
//     dispatch(setStartValueAC(startValue))
// }
//
// export const setCounterFromLocalStorageTC = (): any => (dispatch: Dispatch) => {
//     let valueAsString = localStorage.getItem('counter')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         dispatch(setCounterAC(newValue))
//     }
// }
//
// export const setMaxValueFromLocalStorageTC = (): any => (dispatch: Dispatch) => {
//     let valueAsString = localStorage.getItem('maxValue')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         dispatch(setMaxValueAC(newValue))
//     }
// }
// export const setStartValueFromLocalStorageTC = (): any => (dispatch: Dispatch) => {
//     let valueAsString = localStorage.getItem('startValue')
//     if (valueAsString) {
//         let newValue = JSON.parse(valueAsString)
//         dispatch(setStartValueAC(newValue))
//     }
// }
//
// export type CounterThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, CounterActionType>


