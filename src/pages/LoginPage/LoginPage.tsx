import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import styles from "./LoginPage.module.scss";
import services from "../../ServiceClasses.module.scss";
import Input from "../../components/Form/input/Input";
import FormButton from "../../components/Form/Button/FormButton";
import MainLogo from "../../components/MainLogo/MainLogo";
import { GiVikingHelmet, GiEnergyShield } from "react-icons/gi";
import MainForm from "../../components/Form/MainForm/MainForm";
import usePasswordToggle from "../../utilities/hooks/passwordTypeToggler/passwordTypeToggler";
import useInput from "../../utilities/hooks/useInput/useInput";

const LoginPage = () => {
    const { passwordType, togglePassword } = usePasswordToggle();

    const email = useInput("", { isEmail: true, isEmpty: true, minLength: 6 });
    const password = useInput("", { isEmpty: true, minLength: 6 });

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const data = {
            email: email.value,
            password: password.value,
        };

        email.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
        password.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
        console.log(data);
    };

    return (
        <Container>
            <div className={`${styles.loginPage} page-style`}>
                <MainLogo />
                <MainForm>
                    <Input
                        value={email.value}
                        onChange={(e) => email.onChange(e)}
                        onBlur={() => email.onBlur()}
                        inputType="text"
                        inputName="email"
                        inputRequired={true}
                        inputPlaceholder={
                            email.isDirty && email.isEmpty
                                ? email.errorMessages.isEmpty
                                : email.isDirty && email.isEmail
                                ? email.errorMessages.isEmail
                                : "Enter your email"
                        }
                        iconComponent={<GiVikingHelmet />}
                        className={(email.isDirty && email.isEmpty) || (email.isDirty && email.isEmail) ? services.invalid : ""}
                        cursor="pointer"
                    />
                    <Input
                        value={password.value}
                        onChange={(e) => password.onChange(e)}
                        onBlur={() => password.onBlur()}
                        inputType={passwordType}
                        inputName="password"
                        inputRequired={true}
                        inputPlaceholder={
                            password.isDirty && password.isEmpty
                                ? password.errorMessages.isEmpty
                                : password.isDirty && password.minLength
                                ? password.errorMessages.minLength
                                : "Enter your password"
                        }
                        iconComponent={<GiEnergyShield />}
                        onClick={togglePassword}
                        className={(password.isDirty && password.isEmpty) || (password.isDirty && password.minLength) ? services.invalid : ""}
                        cursor="pointer"
                    />
                    <FormButton
                        onClick={handleSubmit}
                        disabled={!email.isValid || !password.isValid}
                        buttonType="submit"
                        className={styles.loginPage__formButton}
                    >
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
