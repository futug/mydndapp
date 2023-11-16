import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainRouteLink.module.scss";

interface MainLinkProps {
    link: string;
    children: React.ReactNode;
    className?: string;
}
const MainButton = (props: MainLinkProps) => {
    return (
        <Link to={props.link} className={`${styles.mainLink} ${props.className}`}>
            {props.children}
        </Link>
    );
};

export default MainButton;
