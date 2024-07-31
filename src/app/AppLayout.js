import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SubredditsSlider from "../features/Subreddits/Subreddits";
import { Outlet } from "react-router-dom";




export default function AppLayout() {
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