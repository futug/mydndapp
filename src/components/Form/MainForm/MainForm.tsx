import React from "react";
import styles from "./MainForm.module.scss";

interface MainFormProps {
    children: React.ReactNode;
    className?: string;
    valid?: boolean;
}
const MainForm = (props: MainFormProps) => {
    return (
        <form datatype-valid={props.valid} className={`${styles.mainForm} ${props.className}`}>
            {props.children}
        </form>
    );
};

export default MainForm;
