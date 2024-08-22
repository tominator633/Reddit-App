import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigate, useParams } from "react-router-dom";


export default function AppLayout() {
    const navigate = useNavigate();
    let {subredditName} = useParams();
    useEffect(() => {
        if (!subredditName) {
            navigate("/popular");
        }
    }, [navigate, subredditName]);
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