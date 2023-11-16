import Container from "../Container/Container";
import styles from "./Popup.module.scss";
import { IoMdClose } from "react-icons/io";

interface PopupProps {
    userEmail: string;
    success: boolean;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    occurredError: string;
}
const Popup = (props: PopupProps) => {
    return (
        <Container>
            <div onClick={() => props.setSuccess(false)} className={props.success ? `${styles.popup} ${styles.popup__isActive}` : styles.popup}>
                <div className={props.success ? `${styles.popup__inner} ${styles.popup__innerIsActive}` : styles.popup__inner}>
                    <div className={styles.popup__close} onClick={() => props.setSuccess(false)}>
                        <IoMdClose size={30} />
                    </div>
                    <h2>{props.occurredError != "" ? "Something went wrong" : "Almost there!"}</h2>
                    <p>
                        {props.occurredError != ""
                            ? props.occurredError
                            : `Right now, an email with an activation link should have come to your email ${props.userEmail}, check it out!`}
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Popup;
