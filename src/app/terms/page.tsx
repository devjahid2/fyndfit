'use client'
import React, { useContext } from "react";
import Nav from '@/components/Nav'
import { AppContext } from "../layout";
import { LANGUAGE } from "../../../data";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
const Terms = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <>
            <div className="cookie mb-80 xl:container mx-auto px-4 xl:px-0">
            <Nav/>
            <div className="header mt-10 mb-80">
                <h2>{Lang[context.language].terms.title}</h2>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.welcomeText}</h3>
                
            </div>

            
        </div>
        <Footer/>
        <Copyright/>
        </>
    );
}

export default Terms