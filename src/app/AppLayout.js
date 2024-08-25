import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";


export default function AppLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        if (path === "/") {
            navigate("/popular");
        }
    }, [navigate, path]);
    
    return (
        <>
        <Header/>
        <main>
           <Outlet/>
        </main>
        <Footer/>
        </>
    );
}