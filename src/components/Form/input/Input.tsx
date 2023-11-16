import React from "react";
import Label from "../Label/Label";
import styles from "./Input.module.scss";

interface InputProps {
    inputType: string;
    inputName: string;
    inputPlaceholder: string;
    inputRequired: boolean;
    iconComponent?: React.ReactNode;
    onClick?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    cursor?: string;
    value?: string;
    className?: string;
}
const Input = ({ inputType, inputName, inputPlaceholder, inputRequired, iconComponent, onClick, onChange, onBlur, cursor, value, className }: InputProps) => {
    return (
        <Label className={className}>
            <input
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                style={{ cursor: cursor }}
                type={inputType}
                name={inputName}
                required={inputRequired}
                className={`${styles.input}`}
            />
            <span className={styles.inputPlaceholder}>{inputPlaceholder}</span>
            {iconComponent && (
                <div className={styles.input__IconWrapper} onClick={onClick}>
                    {iconComponent}
                </div>
            )}
        </Label>
    );
};

export default Input;
