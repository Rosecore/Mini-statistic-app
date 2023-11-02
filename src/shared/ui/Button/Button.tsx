import { Link, LinkProps } from 'react-router-dom';
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, ...otherProps} = props
    return (
        <button>
            {children}
        </button>
    );
};
