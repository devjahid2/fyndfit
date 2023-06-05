'use client'
import React, { useContext } from "react";
import Nav from '@/components/Nav'
import { AppContext } from "../layout";
import { LANGUAGE } from "../../../data";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
const Cookie = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <>
            <div className={`cookie mb-80 xl:container mx-auto px-4 xl:px-0 ${context.language === "ARABIC" ? 'text-end':''}`}>
            <Nav select={0}/>
            <div className="header mt-10 mb-80">
                <h2>{Lang[context.language].cookie.title}</h2>
            </div>

            <h3>{Lang[context.language].cookie.welcomeText}</h3>
            <p>{Lang[context.language].cookie.text}</p>
            <p>{Lang[context.language].cookie.text2}</p>

            <a href={Lang[context.language].cookie.link}>{Lang[context.language].cookie.link}</a>
            
            <p>{Lang[context.language].cookie.text3}</p>
            <p>{Lang[context.language].cookie.text4}</p>
            <ul className="">
                <li>{Lang[context.language].cookie.li}</li>
                <li>{Lang[context.language].cookie.li2}</li>
            </ul>

            <div className="mb-40">
                <p>{Lang[context.language].cookie.text5}</p>
                <p>{Lang[context.language].cookie.text6}</p>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].cookie.points.one.title}</h3>
                <p>{Lang[context.language].cookie.points.one.text}</p>
            </div>
            
            <div className="mb-40">
                <h3>{Lang[context.language].cookie.points.two.title}</h3>
                <p>{Lang[context.language].cookie.points.two.text}</p>
                <p>{Lang[context.language].cookie.points.two.text2}</p>
                <ul className="my-5">
                <li>{Lang[context.language].cookie.points.two.link1.text} <a href={Lang[context.language].cookie.points.two.link1.link}>{Lang[context.language].cookie.points.two.link1.link}</a></li>
                <li>{Lang[context.language].cookie.points.two.link2.text} <a href={Lang[context.language].cookie.points.two.link2.link}>{Lang[context.language].cookie.points.two.link2.link}</a></li>
                <li>{Lang[context.language].cookie.points.two.link3.text} <a href={Lang[context.language].cookie.points.two.link3.link}>{Lang[context.language].cookie.points.two.link3.link}</a></li>
                <li>{Lang[context.language].cookie.points.two.link4.text} <a href={Lang[context.language].cookie.points.two.link4.link}>{Lang[context.language].cookie.points.two.link4.link}</a></li>
                <li>{Lang[context.language].cookie.points.two.link5.text} <a href={Lang[context.language].cookie.points.two.link5.link}>{Lang[context.language].cookie.points.two.link5.link}</a></li>
                
                
            </ul>
            <p>{Lang[context.language].cookie.points.two.text3}</p>
            <ul className="my-5">
            <li>{Lang[context.language].cookie.points.two.link6.text} <a href={Lang[context.language].cookie.points.two.link6.link}>{Lang[context.language].cookie.points.two.link6.link}</a></li>
                <li>{Lang[context.language].cookie.points.two.link7.text} <a href={Lang[context.language].cookie.points.two.link7.link}>{Lang[context.language].cookie.points.two.link7.link}</a></li>
            </ul>

            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].cookie.points.three.title}</h3>
                <p>{Lang[context.language].cookie.points.three.text}</p>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].cookie.points.fore.title}</h3>
                <p>{Lang[context.language].cookie.points.fore.text}</p>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].cookie.points.five.title}</h3>
                <p>{Lang[context.language].cookie.points.five.text}</p>
                <p><span className=" text-white">{Lang[context.language].cookie.points.five.strictlyNecessary.bold}</span>{Lang[context.language].cookie.points.five.strictlyNecessary.normal}</p>
                <p><span className=" text-white">{Lang[context.language].cookie.points.five.security.bold}</span>{Lang[context.language].cookie.points.five.security.normal}</p>
                <p><span className=" text-white">{Lang[context.language].cookie.points.five.performance.bold}</span>{Lang[context.language].cookie.points.five.performance.normal}</p>
                <p><span className=" text-white">{Lang[context.language].cookie.points.five.analytics.bold}</span>{Lang[context.language].cookie.points.five.analytics.normal}</p>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].cookie.points.six.title}</h3>
                <p>{Lang[context.language].cookie.points.six.text}</p>
                <p><span className=" text-white">{Lang[context.language].cookie.points.six.copyright}</span></p>
                <p><span className=" text-white">{Lang[context.language].cookie.points.six.address}</span></p>
                
            </div>

        </div>
            <Footer/>
        <Copyright/>
        </>
    );
}

export default Cookie