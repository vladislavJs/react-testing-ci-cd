import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import User from "../user/User";
import UserInfo from "../pages/UserInfo";
import ErrorPage from "../pages/ErrorPage";
import Counter from "../pages/Counter";
import HelloWorldPage from "../pages/HelloWorldPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/users" element={<User/>} />
            <Route path="/users/:id" element={<UserInfo/>} />
            <Route path="/counter" element={<Counter/>} />
            <Route path="/hello" element={<HelloWorldPage/>} />
            <Route path="/*" element={<ErrorPage/>} />
        </Routes>
    );
};

export default AppRouter;