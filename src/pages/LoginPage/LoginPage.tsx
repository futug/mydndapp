//Libs components
import { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store/store";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";
import { loginUser } from "../../redux/actions/loginAction";

const LoginPage = () => {
    const navigation = useNavigate();
    const { passwordType, togglePassword } = usePasswordToggle();
    const loginState = useSelector((state: RootState) => state.login);
    const [error, setError] = useState("");
    const email = useInput("", { isEmail: true, isEmpty: true, minLength: 6 });
    const password = useInput("", { isEmpty: true, minLength: 6 });
    const dispatch = useDispatch();
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        (dispatch as ThunkDispatch<RootState, void, AnyAction>)(
            loginUser({
                email: email.value,
                password: password.value,
            })
        );
    };

    useEffect(() => {
        if (loginState.user) {
            if (loginState.user.user.hasActivated) {
                navigation("/Main");
            } else {
                navigation("/ActivateAccount");
            }
        } else if (loginState.error) {
            setError(loginState.error);
        }
    }, [loginState, navigation]);

    return (
        <Container>
            {loginState.loading && <Loader />}
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
