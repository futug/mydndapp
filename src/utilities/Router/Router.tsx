import { BrowserRouter as RouterProvider, Route, Routes } from "react-router-dom";
import EntryPage from "../../pages/EntryPage/EntryPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegiserPage/RegisterPage";
import SuccesActivation from "../../pages/SuccesActivation/SuccesActivation";
import NotFoundPage from "../../pages/404/NotFoundPage";

const Router = () => {
    return (
        <RouterProvider>
            <Routes>
                <Route path="/" element={<EntryPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/success" element={<SuccesActivation />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </RouterProvider>
    );
};

export default Router;
