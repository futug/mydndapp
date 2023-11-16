import { useState } from "react";
import { Rules } from "../useValidation/useValidation";
import useValidation from "../useValidation/useValidation";

const useInput = (initialValue: string, rules: Rules) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, rules);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onBlur = () => {
        setDirty(!isDirty);
    };

    return { value, onChange, onBlur, isDirty, ...valid };
};

export default useInput;
