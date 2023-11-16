import React from "react";
import styles from "./FormButton.module.scss";

type FormButtonProps = {
    children: React.ReactNode;
    className?: string;
    buttonType: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FormButton = ({ buttonType, className, disabled, onClick, ...props }: FormButtonProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`${styles.formButton} ${className}`} type={buttonType}>
            {props.children}
        </button>
    );
};

export default FormButton;
