import React from "react";
import styles from "./EntryPage.module.scss";
import mainLogoPng from "../../assets/main_logo.png";
import mainLogoWebp from "../../assets/main_logo.webp";
import MainButton from "../../components/MainRouteLink/MainRouteLink";
import Container from "../../components/Container/Container";
import MainLogo from "../../components/MainLogo/MainLogo";

const EntryPage = () => {
    return (
        <Container>
            <div className={`${styles.entryPage} page-style`}>
                <MainLogo />
                <MainButton link="/login">Sign In</MainButton>
                <p className={styles.entryPage__text}>or</p>
                <MainButton link="/register">Sign Un</MainButton>
            </div>
        </Container>
    );
};

export default EntryPage;
