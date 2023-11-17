import React from "react";
import { CircleLoader } from "react-spinners";
import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <CircleLoader color="#e50513" size={150} />
        </div>
    );
};

export default Loader;
