import React, {memo} from "react";
import s from './Scoreboard.module.css'

type ScoreboardPropsType = {
    counter: number
    maxValue: number
    isSetting:boolean
    error: boolean
}

export const Scoreboard = memo((props:ScoreboardPropsType) => {

    return (
        <div className={s.board}>

            {
                props.isSetting && props.error? <div className={s.error}>Incorrect value</div>:
                props.isSetting
                ? <div className={s.setting}>Enter values and press 'set'</div>
                : <div className={props.counter === props.maxValue ? s.scoreRed: s.score}> {props.counter}</div>
            }
        </div>
    );
});

