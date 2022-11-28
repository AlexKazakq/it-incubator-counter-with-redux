import React, {memo, useCallback, useEffect} from "react";
import {Button} from "../../Button/Button";
import s from "./SetButton.module.css"

type SetButtonPropsType = {
    counter: number
    startValue: number
    maxValue: number
    setCounter: (counter: number) => void
    setIsSetting: (isSetting: boolean) => void
    isSetting: boolean
}


export const SetButton = memo((props: SetButtonPropsType) => {

    const onClickHandler = useCallback(() => {
        props.setCounter(props.startValue);
        props.setIsSetting(false);
    }, [props.setCounter, props.startValue, props.setIsSetting])
    return (
        <div className={s.control}>
            <Button name={"set"} callBack={onClickHandler} disabled={!props.isSetting || props.maxValue <= props.startValue} className={s.button}/>
        </div>
    );
});

