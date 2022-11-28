import React, {memo, useCallback} from "react";

type ButtonType = {
    name: string,
    callBack: () => void
    disabled: boolean
    className: string
}

export const Button = memo((props: ButtonType) => {

    const onClickHandler = useCallback(() => {
        props.callBack()
    }, [props.callBack])

    return (
            <button className={props.className} disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
    );
});
