import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    children: React.ReactNode;
}
const Container = (props: ContainerProps) => {
    return <div className={styles.container}>{props.children}</div>;
};

export default Container;
