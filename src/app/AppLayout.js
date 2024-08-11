import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubredditsSlider from "../features/Subreddits/Subreddits";
import { Outlet, useNavigate, useParams } from "react-router-dom";




export default function AppLayout() {
    const navigate = useNavigate();
    let {subredditName} = useParams();
    useEffect(() => {
        if (!subredditName) {
            navigate("/popular");
        }
    }, []);
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