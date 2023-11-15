import React from "react";
import styles from "./MainLogo.module.scss";
import mainLogoPng from "../../assets/main_logo.png";
import mainLogoWebp from "../../assets/main_logo.webp";

const MainLogo = () => {
    return (
        <div className={styles.mainLogo}>
            <picture>
                <source srcSet={mainLogoWebp} type="image/webp" />
                <img src={mainLogoPng} className={styles.logoImg} alt="logo" />
            </picture>
        </div>
    );
};

export default MainLogo;
