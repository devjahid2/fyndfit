'use client'
import React, { useContext } from "react";
import Nav from '@/components/Nav'
import { AppContext } from "../layout";
import { LANGUAGE } from "../../../data";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
const Policy = ({select}:any) => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <>
            <div className={`cookie mb-80 xl:container mx-auto px-4 xl:px-0 ${context.language === "ARABIC" ? 'text-end':''}`}>
            <Nav middleware={'cookie'} select={select}/>
            <div className="header mt-10 mb-80">
                <h2>{Lang[context.language].policy.title}</h2>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].policy.welcomeText}</h3>
                <p>{Lang[context.language].policy.text}</p>
                <p>{Lang[context.language].policy.text2}</p>
                <p>{Lang[context.language].policy.text3}</p>
                <p>{Lang[context.language].policy.text4}</p>
                <p>{Lang[context.language].policy.text5}</p>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.one.title}</h3>
                <p>{Lang[context.language].policy.points.one.text}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].policy.points.one.li}</li>
                    <li><a href={Lang[context.language].policy.points.one.li2}>{Lang[context.language].policy.points.one.li2}</a></li>
                </ul>
                <p>{Lang[context.language].policy.points.one.text2}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].policy.points.one.li3}</li>
                    <li>{Lang[context.language].policy.points.one.li4}</li>
                </ul>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.two.title}</h3>
                <p>{Lang[context.language].policy.points.two.text}</p>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.three.title}</h3>
                <p>{Lang[context.language].policy.points.three.text}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].policy.points.three.li}</li>
                    <li>{Lang[context.language].policy.points.three.li2}</li>
                    <li>{Lang[context.language].policy.points.three.li3}</li>
                </ul>
                <p>{Lang[context.language].policy.points.three.text2}</p>
                <p>{Lang[context.language].policy.points.three.text3}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].policy.points.three.li4}</li>
                    <li>{Lang[context.language].policy.points.three.li5}</li>
                    <li>{Lang[context.language].policy.points.three.li6}</li>
                </ul>
                <p><span className="text-white">{Lang[context.language].policy.points.three.app.bold}</span> {Lang[context.language].policy.points.three.app.normal}</p>
                <p>{Lang[context.language].policy.points.three.text4}</p>
                <ul className="my-5">
                    <li><a href={Lang[context.language].policy.points.three.link}>{Lang[context.language].policy.points.three.link}</a></li>
                </ul>
                <p><span className="text-white">{Lang[context.language].policy.points.three.contact.bold}</span> {Lang[context.language].policy.points.three.contact.normal}</p>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.four.title}</h3>
                <p>{Lang[context.language].policy.points.four.text}</p>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.five.title}</h3>
                <p>{Lang[context.language].policy.points.five.text}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].policy.points.five.li}</li>
                    <li>{Lang[context.language].policy.points.five.li2}</li>
                    <li>{Lang[context.language].policy.points.five.li3}</li>
                    <li>{Lang[context.language].policy.points.five.li4}</li>
                    <li>{Lang[context.language].policy.points.five.li5}</li>
                    <li>{Lang[context.language].policy.points.five.li6}</li>
                    <li>{Lang[context.language].policy.points.five.li7}</li>
                    <li>{Lang[context.language].policy.points.five.li8}</li>
                </ul>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.six.title}</h3>
                <p className="mb-5">{Lang[context.language].policy.points.six.text}</p>

                <p className="mb-5"><span className="text-white">{Lang[context.language].policy.points.six.providers.bold}</span>{Lang[context.language].policy.points.six.providers.normal}</p>
                <p className="mb-5"><span className="text-white">{Lang[context.language].policy.points.six.business.bold}</span>{Lang[context.language].policy.points.six.business.normal}</p>
                <p className="mb-5"><span className="text-white">{Lang[context.language].policy.points.six.protection.bold}</span>{Lang[context.language].policy.points.six.protection.normal}</p>
                <p className="mb-5"><span className="text-white">{Lang[context.language].policy.points.six.anonymous.bold}</span>{Lang[context.language].policy.points.six.anonymous.normal}</p>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.seven.title}</h3>
                <p className="mb-5">{Lang[context.language].policy.points.seven.text}</p>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.eight.title}</h3>
                <p className="mb-5">{Lang[context.language].policy.points.eight.text}</p>
                <ul className="my-5">
                    <li><span className="text-white">{Lang[context.language].policy.points.eight.li.bold}</span> {Lang[context.language].policy.points.eight.li.normal}</li>
                    <li><span className="text-white">{Lang[context.language].policy.points.eight.li2.bold}</span> {Lang[context.language].policy.points.eight.li2.normal}</li>
                    <li><span className="text-white">{Lang[context.language].policy.points.eight.li3.bold}</span> {Lang[context.language].policy.points.eight.li3.normal}</li>
                    <li><span className="text-white">{Lang[context.language].policy.points.eight.li4.bold}</span> {Lang[context.language].policy.points.eight.li4.normal}</li>
                    <li><span className="text-white">{Lang[context.language].policy.points.eight.li5.bold}</span> {Lang[context.language].policy.points.eight.li5.normal}</li>
                    <li><span className="text-white">{Lang[context.language].policy.points.eight.li6.bold}</span> {Lang[context.language].policy.points.eight.li6.normal}</li>
                    <li><span className="text-white">{Lang[context.language].policy.points.eight.li7.bold}</span> {Lang[context.language].policy.points.eight.li7.normal}</li>
                </ul>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.nine.title}</h3>
                <p className="mb-5">{Lang[context.language].policy.points.nine.text}</p>
            </div>
            
            <div className="mb-40">
                <h3>{Lang[context.language].policy.points.ten.title}</h3>
                <p className="mb-5">{Lang[context.language].policy.points.ten.text}</p>
            </div>

            <div className="mb-40">

                <h3>{Lang[context.language].policy.points.eleven.title}</h3>
                <p className="mb-5">{Lang[context.language].policy.points.eleven.text}</p>
                <p><span className=" text-white">{Lang[context.language].policy.points.eleven.copyright}</span></p>
                <p><span className=" text-white">{Lang[context.language].policy.points.eleven.address}</span></p>
            </div>
            

        
        </div>
        <Footer/>
        <Copyright/>
        </>
    );
}

export default Policy