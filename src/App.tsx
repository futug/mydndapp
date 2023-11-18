import { BrowserRouter } from "react-router-dom";
import Router from "./utilities/Router/Router";
import { useTheme } from "./utilities/hooks/useTheme/useTheme";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
    const { theme, setTheme } = useTheme();

    return (
        <Provider store={store}>
            <div className="wrapper">
                <ThemeToggler theme={theme} setTheme={setTheme} />
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
