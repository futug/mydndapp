//Libs components
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiVikingHelmet, GiEnergyShield, GiTiedScroll } from "react-icons/gi";
//My components
import Container from "../../components/Container/Container";
import MainLogo from "../../components/MainLogo/MainLogo";
import MainForm from "../../components/Form/MainForm/MainForm";
import Input from "../../components/Form/input/Input";
import FormButton from "../../components/Form/Button/FormButton";
import Popup from "../../components/Popup/Popup";
import Loader from "../../components/Loader/Loader";
//Styles
import styles from "./RegisterPage.module.scss";
import services from "../../ServiceClasses.module.scss";
//Utilities & Custom hooks
import usePasswordToggle from "../../utilities/hooks/passwordTypeToggler/passwordTypeToggler";
import useInput from "../../utilities/hooks/useInput/useInput";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { registerUser } from "../../redux/actions/registerAction";
import { ThunkDispatch, AnyAction } from "@reduxjs/toolkit";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const registrationState = useSelector((state: RootState) => state.register);
    const email = useInput("", { isEmail: true, isEmpty: true, minLength: 6 });
    const username = useInput("", { isEmpty: true, minLength: 3 });
    const password = useInput("", { isEmpty: true, minLength: 6, passwordTooEasy: true });
    const [succsessRegister, setSuccsessRegister] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [occurredError, setOccurredError] = useState("");
    const navigation = useNavigate();

    const { passwordType, togglePassword } = usePasswordToggle();
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        (dispatch as ThunkDispatch<RootState, void, AnyAction>)(
            registerUser({
                email: email.value,
                username: username.value,
                password: password.value,
            })
        );
    };

    useEffect(() => {
        if (registrationState.user) {
            const email = registrationState.user.user.email;
            setTimeout(() => {
                navigation("/Login");
            }, 1200);
            setUserEmail(email);
            setSuccsessRegister(true);
        } else if (registrationState.error) {
            setOccurredError(`Error: ${registrationState.error}`);
        }
    }, [registrationState, navigation]);

    return (
        <Container>
            {registrationState.loading && <Loader />}
            <Popup
                problem="Something went wrong"
                successEntry="Almost there"
                occurredError={occurredError}
                userEmail={userEmail}
                success={succsessRegister}
                setSuccess={setSuccsessRegister}
                succesMessage={`Right now, an email with an activation link should have come to your email ${userEmail}, check it out!`}
            />
            <div className={`${styles.registerPage} page-style`}>
                <MainLogo />
                <MainForm>
                    <Input
                        value={username.value}
                        onChange={(e) => username.onChange(e)}
                        onBlur={() => username.onBlur()}
                        cursor="pointer"
                        inputType="text"
                        inputName="username"
                        inputRequired={true}
                        inputPlaceholder={
                            username.isDirty && username.isEmpty
                                ? username.errorMessages.isEmpty
                                : username.isDirty && username.minLength
                                ? username.errorMessages.minLength
                                : "What's your name?"
                        }
                        iconComponent={<GiVikingHelmet />}
                        className={(username.isDirty && username.isEmpty) || (username.isDirty && username.minLength) ? services.invalid : ""}
                    />
                    <Input
                        value={email.value}
                        onChange={(e) => email.onChange(e)}
                        onBlur={() => email.onBlur()}
                        cursor="pointer"
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
                    />
                    <Input
                        value={password.value}
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
                        onChange={(e) => password.onChange(e)}
                        onBlur={() => password.onBlur()}
                        onClick={togglePassword}
                        cursor="pointer"
                        className={(password.isDirty && password.isEmpty) || (password.isDirty && password.minLength) ? services.invalid : ""}
                    />
                    <FormButton
                        disabled={!username.isValid || !email.isValid || !password.isValid}
                        buttonType="button"
                        onClick={onSubmit}
                        className={styles.registerPage__formButton}
                    >
                        Register
                    </FormButton>
                </MainForm>
            </div>
        </Container>
    );
};

export default RegisterPage;
