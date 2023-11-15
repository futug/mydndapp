import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import styles from "./LoginPage.module.scss";
import Input from "../../components/Form/input/Input";
import FormButton from "../../components/Form/Button/FormButton";
import MainLogo from "../../components/MainLogo/MainLogo";
import { GiVikingHelmet, GiEnergyShield } from "react-icons/gi";
import MainForm from "../../components/Form/MainForm/MainForm";
import usePasswordToggle from "../../utilities/hooks/passwordTypeToggler/passwordTypeToggler";

const LoginPage = () => {
    const { passwordType, togglePassword } = usePasswordToggle();
    return (
        <Container>
            <div className={`${styles.loginPage} page-style`}>
                <MainLogo />
                <MainForm>
                    <Input inputType="text" inputName="email" inputRequired={true} inputPlaceholder="Enter email" iconComponent={<GiVikingHelmet />} />
                    <Input
                        inputType={passwordType}
                        inputName="password"
                        inputRequired={true}
                        inputPlaceholder="Enter password"
                        iconComponent={<GiEnergyShield />}
                        onClick={togglePassword}
                    />
                    <FormButton buttonType="submit" className={styles.loginPage__formButton}>
                        Login
                    </FormButton>
                </MainForm>
                <Link to="/forgot-password" className={styles.loginPage__restoreLink}>
                    Forgot password? Click here
                </Link>
            </div>
        </Container>
    );
};

export default LoginPage;
