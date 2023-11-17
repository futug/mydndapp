import { useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeHook {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const useTheme = (): ThemeHook => {
    const [theme, setTheme] = useState<Theme>("dark");

    useLayoutEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        return () => {
            document.documentElement.removeAttribute("data-theme");
        };
    }, [theme]);

    return { theme, setTheme };
};
