import Container from "../../components/Container/Container";
import MainRouteLink from "../../components/MainRouteLink/MainRouteLink";
import styles from "./SuccesActivation.module.scss";

const SuccesActivation = () => {
    return (
        <Container>
            <div className={`${styles.succesActivation} page-style`}>
                <h1 className={styles.succesActivation__title}>Congratulations! Your account has been successfully activated!</h1>
                <MainRouteLink link="/login" className={styles.succesActivation__link}>
                    To login click here
                </MainRouteLink>
            </div>
        </Container>
    );
};

export default SuccesActivation;
