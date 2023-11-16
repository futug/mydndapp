import Container from "../../components/Container/Container";
import MainRouteLink from "../../components/MainRouteLink/MainRouteLink";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
    return (
        <Container>
            <div className={`${styles.notFound} page-style`}>
                <h1 className={styles.notFound__title}>404 - Page not found</h1>
                <MainRouteLink link="/" className={`${styles.notFound__link} ${styles.notFound__link}`}>
                    To main page click here
                </MainRouteLink>
            </div>
        </Container>
    );
};

export default NotFoundPage;
