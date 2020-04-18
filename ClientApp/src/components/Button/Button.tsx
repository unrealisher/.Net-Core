import React, { FC } from 'react';

export interface IButtonProps {
    text?: string;
    onClick?: Function;
}

const Button: FC<IButtonProps> = props => {
    const {
        text,
        onClick
    } = props;

    return (
        <button
            className='Button' 
            onClick={() => {
                if (onClick !== undefined) {
                    onClick()
                }
            }}
        >
            {text}
        </button>
    )
};

export default Button;