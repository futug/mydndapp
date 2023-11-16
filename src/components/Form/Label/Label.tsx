import React from "react";
import styles from "./Label.module.scss";
interface LabelProps {
    children: React.ReactNode;
    className?: string;
}
const Label = (props: LabelProps) => {
    return <label className={`${styles.label} ${props.className}`}>{props.children}</label>;
};

export default Label;
