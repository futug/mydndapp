import React from "react";
import styles from "./FormButton.module.scss";

type FormButtonProps = {
    children: React.ReactNode;
    className?: string;
    buttonType: "button" | "submit" | "reset";
};
const FormButton = ({ buttonType, className, ...props }: FormButtonProps) => {
    return (
        <button className={`${styles.formButton} ${className}`} type={buttonType}>
            {props.children}
        </button>
    );
};

export default FormButton;
