import React, {memo, useCallback} from "react";
import s from "./Control.module.css"
import {Button} from "../../Button/Button";


type ControlPropsType = {
    counter: number
    setCounter: (counter: number) => void
    maxValue: number
    startValue:number
    isSetting: boolean
}

export const Control = memo((props:ControlPropsType) => {

    const onClickIncHandler = useCallback(() => {
        props.setCounter(props.counter + 1)
    }, [props.setCounter, props.counter])
    const onClickResetHandler = useCallback(() => {
        props.setCounter(props.startValue)
    }, [props.setCounter, props.startValue])

    return (
        <div className={s.control}>
            {/*<button disabled={props.counter === 5} className={s.button} onClick={onClickIncHandler}>inc</button>*/}
            {/*<button disabled={props.counter === 0} className={s.button} onClick={onClickResetHandler}>reset</button>*/}
            <Button className={s.button} name={'inc'} callBack={onClickIncHandler} disabled={props.counter === props.maxValue || props.isSetting}/>
            <Button className={s.button} name={'reset'} callBack={onClickResetHandler} disabled={props.counter === props.startValue || props.isSetting}/>
        </div>
    );
});

