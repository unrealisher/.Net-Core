import React, { FC, RefObject } from 'react';

export interface IInputProps {
    placeholder?: string;
    inputRef?: RefObject<HTMLInputElement>
}

const Input: FC<IInputProps> = props => {
    const {
        inputRef,
        placeholder
    } = props;

    return (
        <input ref={inputRef} type='text' placeholder={placeholder}></input>
    )
};

export default Input;