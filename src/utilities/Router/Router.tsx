import React from "react";
import { BrowserRouter as RouterProvider, Route, Routes } from "react-router-dom";
import EntryPage from "../../pages/EntryPage/EntryPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegiserPage/RegisterPage";

const Router = () => {
    return (
        <RouterProvider>
            <Routes>
                <Route path="/" element={<EntryPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </RouterProvider>
    );
};

export default Router;
