import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainRouteLink.module.scss";

interface MainLinkProps {
    link: string;
    children: React.ReactNode;
}
const MainButton = (props: MainLinkProps) => {
    return (
        <Link to={props.link} className={styles.mainLink}>
            {props.children}
        </Link>
    );
};

export default MainButton;
