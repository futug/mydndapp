import React from "react";
import styles from "./MainForm.module.scss";

interface MainFormProps {
    children: React.ReactNode;
    className?: string;
}
const MainForm = (props: MainFormProps) => {
    return <form className={`${styles.mainForm} ${props.className}`}>{props.children}</form>;
};

export default MainForm;
