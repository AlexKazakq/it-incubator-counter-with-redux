import React, {ChangeEvent, memo, useCallback} from "react";
import s from "./StartValue.module.css"

type StartValuePropsType = {
    setMaxValue?: (maxValue:number) => void
    setStartValue?: (startValue:number) => void
    setIsSetting: (isSetting:boolean) => void
    startValue: number
    maxValue: number
    setError: (error:boolean) => void
}

export const StartValue = memo((props: StartValuePropsType) => {

    const onChangeHandlerMax = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (props.setMaxValue) {
            props.setMaxValue(+e.currentTarget.value)
            props.setIsSetting(true);
        }
    }, [props.setMaxValue, props.setIsSetting])
    const onChangeHandlerMin = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (props.setStartValue) {
            props.setStartValue(+e.currentTarget.value)
            props.setIsSetting(true);
        }
    }, [props.setStartValue, props.setIsSetting])

    props.setError(props.maxValue <= props.startValue)

    let inputClass = props.maxValue <= props.startValue ? s.error : ''


    return (
        <div className={s.board}>
            <div className={s.text}>
                <span>max value:</span>
                <input className={inputClass} value={props.maxValue}  min={0} type="number"   onChange={onChangeHandlerMax}></input>
            </div>
            <div className={s.text}>
                <span>start value:</span>
                <input className={inputClass} value={props.startValue} min={0} type="number"  onChange={onChangeHandlerMin}></input>
            </div>

        </div>
    );
});

