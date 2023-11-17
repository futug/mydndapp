//My components
import MainButton from "../../components/MainRouteLink/MainRouteLink";
import Container from "../../components/Container/Container";
import MainLogo from "../../components/MainLogo/MainLogo";
//Styles
import styles from "./EntryPage.module.scss";

const EntryPage = () => {
    return (
        <Container>
            <div className={`${styles.entryPage} page-style`}>
                <MainLogo />
                <MainButton link="/login">Sign In</MainButton>
                <p className={styles.entryPage__text}>or</p>
                <MainButton link="/register">Sign Up</MainButton>
            </div>
        </Container>
    );
};

export default EntryPage;
