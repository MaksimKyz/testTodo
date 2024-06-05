import React, {ChangeEvent, useEffect, useState} from 'react';
import {TextField} from "@mui/material";
export interface TextFieldComponentProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onEnter: () => void;
    label: string;
}

const TextFieldComponent = (props: TextFieldComponentProps) => {
    const [isFocused, setFocused] = useState(false)

    useEffect(() => {
        if (isFocused){
            window.addEventListener('keydown', handleOnEnterClick )
        }
        return () => {
            window.removeEventListener('keydown', handleOnEnterClick)
        }
    }, [isFocused, props.value])

    const handleOnEnterClick = (event: KeyboardEvent) => {
        if (event.code === 'Enter'){
            props.onEnter()
        }
    }

    return (
            <TextField
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={props.value}
                onChange={props.onChange}
                fullWidth
                label={props.label}
            />
    );
};

export default TextFieldComponent