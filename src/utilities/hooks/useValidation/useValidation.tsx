import { useEffect, useState } from "react";

export type Rules = {
    passwordTooEasy?: boolean;
    isEmail?: boolean;
    isEmpty?: boolean;
    minLength?: number;
    passwordUnSimilar?: boolean;
    passwordSimilar?: boolean;
};

type ValidationResults = {
    isEmpty: boolean;
    passwordTooEasy: boolean;
    isEmail: boolean;
    minLength: boolean;
    isValid?: boolean;
    errorMessages: {
        isEmpty: string;
        passwordTooEasy: string;
        isEmail: string;
        minLength: string;
    };
};

type UseValidation = (value: string, rules: Rules) => ValidationResults;

const useValidation: UseValidation = (value, rules) => {
    const [isEmpty, setEmpty] = useState<boolean>(true);
    const [passwordTooEasy, setPasswordTooEasy] = useState<boolean>(true);
    const [isEmail, setEmail] = useState<boolean>(false);
    const [minLength, setMinLength] = useState<boolean>(false);
    const [isValid, setIsValid] = useState<boolean>(false);

    useEffect(() => {
        for (const rule in rules) {
            switch (rule) {
                case "minLength": {
                    value.length < rules[rule] ? setMinLength(true) : setMinLength(false);

                    break;
                }
                case "passwordTooEasy": {
                    const isShort: boolean = value.length < 6;
                    const hasNoDigitsOrUppercase: boolean = !/\d/.test(value) || !/[A-Z]/.test(value);

                    if (isShort || hasNoDigitsOrUppercase) {
                        setPasswordTooEasy(true);
                    } else {
                        setPasswordTooEasy(false);
                    }
                    break;
                }

                case "isEmail": {
                    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                    re.test(String(value).toLowerCase()) ? setEmail(false) : setEmail(true);

                    break;
                }

                case "isEmpty": {
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                }
            }
        }
    }, [value, rules]);

    useEffect(() => {
        if (isEmpty || isEmail || minLength) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [isEmpty, passwordTooEasy, isEmail, minLength]);

    const errorMessages = {
        isEmpty: "This field is required",
        minLength: "Minimum length should be " + rules.minLength,
        isEmail: "Please enter a valid email",
        passwordTooEasy: "At least 6 characters, 1 uppercase letter and 1 number",
    };

    return {
        isEmpty,
        passwordTooEasy,
        isEmail,
        minLength,
        isValid,
        errorMessages,
        rules,
    };
};

export default useValidation;
