import React, { useState } from "react";
import styles from "./RegisterPage.module.scss";
import Container from "../../components/Container/Container";
import MainLogo from "../../components/MainLogo/MainLogo";
import MainForm from "../../components/Form/MainForm/MainForm";
import Input from "../../components/Form/input/Input";
import FormButton from "../../components/Form/Button/FormButton";
import { GiVikingHelmet, GiEnergyShield, GiTiedScroll } from "react-icons/gi";
import usePasswordToggle from "../../utilities/hooks/passwordTypeToggler/passwordTypeToggler";

const RegisterPage = () => {
    const { passwordType, togglePassword } = usePasswordToggle();
    return (
        <Container>
            <div className={`${styles.registerPage} page-style`}>
                <MainLogo />
                <MainForm>
                    <Input
                        cursor="pointer"
                        inputType="text"
                        inputName="username"
                        inputRequired={true}
                        inputPlaceholder="What's your name?"
                        iconComponent={<GiTiedScroll />}
                    />
                    <Input
                        cursor="pointer"
                        inputType="email"
                        inputName="email"
                        inputRequired={true}
                        inputPlaceholder="Enter email"
                        iconComponent={<GiVikingHelmet />}
                    />
                    <Input
                        inputType={passwordType}
                        inputName="password"
                        inputRequired={true}
                        inputPlaceholder="Enter password"
                        iconComponent={<GiEnergyShield />}
                        onClick={togglePassword}
                        cursor="pointer"
                    />
                    <Input
                        inputType={passwordType}
                        inputName="password"
                        inputRequired={true}
                        inputPlaceholder="Repeat password"
                        iconComponent={<GiEnergyShield />}
                        onClick={togglePassword}
                        cursor="pointer"
                    />
                    <FormButton buttonType="submit" className={styles.registerPage__formButton}>
                        Register
                    </FormButton>
                </MainForm>
            </div>
        </Container>
    );
};

export default RegisterPage;
