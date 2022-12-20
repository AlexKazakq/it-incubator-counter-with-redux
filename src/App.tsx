import React, {useCallback} from "react";
import "./App.css";
import {Container} from "./components/Container/Container";
import {Setting} from "./components/Setting/Setting";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store/store";
import {
    initialStateType, setCounterAC,
    setErrorAC,
    setIsSettingAC, setMaxValueAC, setStartValueAC,
} from "./redux/store/stateReducer";

function App() {

    const state = useSelector<AppRootStateType, initialStateType>(state => state.state)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(setCounterFromLocalStorageTC())
    //     dispatch(setMaxValueFromLocalStorageTC())
    //     dispatch(setStartValueFromLocalStorageTC())
    //     if (localStorage.getItem('counter')) {
    //         dispatch(setIsSettingAC(false))
    //     }
    // }, [])

    const setCounter = useCallback((counter: number) => {
        dispatch(setCounterAC(counter))
    }, [dispatch])
    const setMaxValue = useCallback((maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }, [dispatch])
    const setStartValue = useCallback((startValue: number) => {
        dispatch(setStartValueAC(startValue))
    }, [dispatch])
    const setIsSetting = useCallback((isSetting: boolean) => {
        dispatch(setIsSettingAC(isSetting))
    }, [dispatch])
    const setError = useCallback((error: boolean) => {
        dispatch(setErrorAC(error))
    }, [dispatch])



    return (
        <div className="App">
            <Setting
                isSetting={state.isSetting}
                counter={state.counter}
                startValue={state.startValue}
                maxValue={state.maxValue}
                setMaxValue={setMaxValue}
                setIsSetting={setIsSetting}
                setStartValue={setStartValue}
                setCounter={setCounter}
                setError={setError}
            />
            <Container
                counter={state.counter}
                isSetting={state.isSetting}
                maxValue={state.maxValue}
                startValue={state.startValue}
                error={state.error}
                setCounter={setCounter}
            />
        </div>
    );
}

export default App;
