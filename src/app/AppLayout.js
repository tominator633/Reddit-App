import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";


export default function AppLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    let {subredditName} = useParams();
    useEffect(() => {
        if (!subredditName && path !== "/subreddits") {
            navigate("/popular");
        }
    }, [navigate, subredditName, path]);
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