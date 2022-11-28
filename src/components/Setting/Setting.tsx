import React, {memo, useState} from "react";
import {SetButton} from "./SetButton/SetButton";
import {StartValue} from "./StartValue/StartValue";
import s from "./Setting.module.css"

type SettingPropsType = {
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    counter: number
    startValue: number
    maxValue: number
    setCounter: (counter: number) => void
    setIsSetting: (isSetting: boolean) => void
    isSetting: boolean
    setError: (error: boolean) => void
}


export const Setting = memo((props: SettingPropsType) => {

    return (
        <div className={s.container}>
            <StartValue
                setMaxValue={props.setMaxValue}
                setIsSetting={props.setIsSetting}
                setStartValue={props.setStartValue}
                startValue={props.startValue}
                maxValue={props.maxValue}
                setError={props.setError}/>
            <SetButton
                setIsSetting={props.setIsSetting}
                counter={props.counter}
                startValue={props.startValue}
                maxValue={props.maxValue}
                setCounter={props.setCounter}
                isSetting={props.isSetting}/>
        </div>
    );
});

