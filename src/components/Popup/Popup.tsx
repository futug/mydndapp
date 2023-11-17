import Container from "../Container/Container";
import styles from "./Popup.module.scss";
import { IoMdClose } from "react-icons/io";

interface PopupProps {
    userEmail: string;
    success: boolean;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    occurredError: string;
    problem: string;
    successEntry: string;
    succesMessage: string;
}
const Popup = (props: PopupProps) => {
    return (
        <Container>
            <div onClick={() => props.setSuccess(false)} className={props.success ? `${styles.popup} ${styles.popup__isActive}` : styles.popup}>
                <div className={props.success ? `${styles.popup__inner} ${styles.popup__innerIsActive}` : styles.popup__inner}>
                    <div className={styles.popup__close} onClick={() => props.setSuccess(false)}>
                        <IoMdClose size={30} />
                    </div>
                    <h2>{props.occurredError != "" ? `${props.problem}` : `${props.successEntry}`}</h2>
                    <p>{props.occurredError != "" ? props.occurredError : `${props.succesMessage}`}</p>
                </div>
            </div>
        </Container>
    );
};

export default Popup;
