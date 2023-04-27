import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import s from './SuperButton.module.css';

interface SuperButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    disabled: boolean;
    onClick: () => void;
}
export const SuperButton = (props: SuperButtonPropsType) => {
    const resultClassName = `${props.disabled ? s.disabledBtn : s.defaultBtn}`
    return (
        <button
            disabled={props.disabled}
            className={resultClassName}
            onClick={props.onClick}>
            { props.children }
        </button>
    );
};