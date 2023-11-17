import { GrFormPreviousLink } from "react-icons/gr";
import styles from "./PrevPageSign.module.scss";

interface PrevPageSignProps {
    onClick: () => void;
    className?: string;
}

const PrevPageSign = ({ onClick, className }: PrevPageSignProps) => {
    return (
        <div onClick={onClick} className={`${styles.prevPageSign} ${className}`}>
            <GrFormPreviousLink size={30} />
        </div>
    );
};

export default PrevPageSign;
