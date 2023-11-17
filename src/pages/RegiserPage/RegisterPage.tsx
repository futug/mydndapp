import React, { useState } from "react";
import styles from "./RegisterPage.module.scss";
import services from "../../ServiceClasses.module.scss";
import Container from "../../components/Container/Container";
import MainLogo from "../../components/MainLogo/MainLogo";
import MainForm from "../../components/Form/MainForm/MainForm";
import Input from "../../components/Form/input/Input";
import FormButton from "../../components/Form/Button/FormButton";
import { GiVikingHelmet, GiEnergyShield, GiTiedScroll } from "react-icons/gi";
import usePasswordToggle from "../../utilities/hooks/passwordTypeToggler/passwordTypeToggler";
import useInput from "../../utilities/hooks/useInput/useInput";
import Popup from "../../components/Popup/Popup";
import Loader from "../../components/Loader/Loader";

const RegisterPage = () => {
    const email = useInput("", { isEmail: true, isEmpty: true, minLength: 6 });
    const username = useInput("", { isEmpty: true, minLength: 3 });
    const password = useInput("", { isEmpty: true, minLength: 6, passwordTooEasy: true });
    const [succsessRegister, setSuccsessRegister] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [occurredError, setOccurredError] = useState("");
    const [loading, setLoading] = useState(false);

    const { passwordType, togglePassword } = usePasswordToggle();

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await fetch("https://dndapi.ru:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.value,
                    username: username.value,
                    password: password.value,
                }),
            });

            setSuccsessRegister(true);
            const data = await response.json();

            if (!response.ok) {
                setOccurredError(`Error ${response.status}: ${data.message}`);

                return;
            }

            setUserEmail(data.user.email);
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            {loading && <Loader />}
            <Popup occurredError={occurredError} userEmail={userEmail} success={succsessRegister} setSuccess={setSuccsessRegister} />
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
                        iconComponent={<GiTiedScroll />}
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
                        iconComponent={<GiVikingHelmet />}
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
