import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EntryPage from "../../pages/EntryPage/EntryPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegiserPage/RegisterPage";
import SuccesActivation from "../../pages/SuccesActivation/SuccesActivation";
import NotFoundPage from "../../pages/404/NotFoundPage";
import PrevPageSign from "../../components/PrevPageSign/PrevPageSign";
import MainPage from "../../pages/MainPage/MainPage";

const Router = () => {
    const navi = useNavigate();
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/" && <PrevPageSign onClick={() => navi(-1)} />}

            <Routes>
                <Route path="/" element={<EntryPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/success" element={<SuccesActivation />} />
                <Route path="/*" element={<NotFoundPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </>
    );
};

export default Router;
