import { BrowserRouter } from "react-router-dom";
import Router from "./utilities/Router/Router";
import { useTheme } from "./utilities/hooks/useTheme/useTheme";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";

function App() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="wrapper">
            <ThemeToggler theme={theme} setTheme={setTheme} />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </div>
    );
}

export default App;
