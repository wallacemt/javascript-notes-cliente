import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import HomeScreen from "./screens/home";
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesIndexScreen from './screens/notes/index';
import UserEditScreen from './screens/users/edit';
    
import './App.scss';

const AppRoutes = () => {
    const location = useLocation();
    return (
        <div className="app-container">
            <TransitionGroup className="content-container">
                <CSSTransition
                    key={location.key}
                    timeout={100}
                    classNames="fade"
                >
                    <div className="route-content">
                        <Routes location={location}>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/register" element={<RegisterScreen />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path="/notes" element={<NotesIndexScreen />} />
                            <Route path="/users/edit" element={<UserEditScreen />} />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

const AppR = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);

export default AppR;
