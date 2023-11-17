//Libs components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiTiedScroll, GiEnergyShield } from "react-icons/gi";
//My components
import MainForm from "../../components/Form/MainForm/MainForm";
import Input from "../../components/Form/input/Input";
import FormButton from "../../components/Form/Button/FormButton";
import MainLogo from "../../components/MainLogo/MainLogo";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
//Styles
import styles from "./LoginPage.module.scss";
import services from "../../ServiceClasses.module.scss";
//Utilities & Custom hooks
import usePasswordToggle from "../../utilities/hooks/passwordTypeToggler/passwordTypeToggler";
import useInput from "../../utilities/hooks/useInput/useInput";

const LoginPage = () => {
    const navigation = useNavigate();
    const { passwordType, togglePassword } = usePasswordToggle();
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");
    const email = useInput("", { isEmail: true, isEmpty: true, minLength: 6 });
    const password = useInput("", { isEmpty: true, minLength: 6 });

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("https://dndapi.ru:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
            });
            const data = await response.json();
            setError(data.message);
            if (response.ok) {
                navigation("/Main");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            {loading && <Loader />}
            <div className={`${styles.loginPage} page-style`}>
                <MainLogo />
                {error && <p className={services.loginError}>The login-password combination is incorrect</p>}
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
                        iconComponent={<GiTiedScroll />}
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
                    <FormButton onClick={onSubmit} disabled={!email.isValid || !password.isValid} buttonType="submit" className={styles.loginPage__formButton}>
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
