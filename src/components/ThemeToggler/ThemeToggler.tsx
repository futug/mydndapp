import styles from "./ThemeToggler.module.scss";
import { GiEvilMoon, GiHeraldicSun } from "react-icons/gi";

interface ThemeTogglerProps {
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
}

const ThemeToggler = ({ theme, setTheme }: ThemeTogglerProps) => {
    return (
        <div onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={styles.themeToggler}>
            {theme === "light" ? <GiEvilMoon size={30} /> : <GiHeraldicSun size={30} />}
        </div>
    );
};

export default ThemeToggler;
