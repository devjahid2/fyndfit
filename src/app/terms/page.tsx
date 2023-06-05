'use client'
import React, { useContext } from "react";
import Nav from '@/components/Nav'
import { AppContext } from "../layout";
import { LANGUAGE } from "../../../data";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
const Terms = ({select}:any) => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <>
            <div className={`cookie mb-80 xl:container mx-auto px-4 xl:px-0 ${context.language === "ARABIC" ? 'text-end':''}`}>
            <Nav  middleware={'terms'} select={select||0}/>
            <div className="header mt-10 mb-80">
                <h2>{Lang[context.language].terms.title}</h2>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.welcomeText}</h3>
                <p>{Lang[context.language].terms.text}</p>
                <p>{Lang[context.language].terms.text2}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].terms.li}</li>
                    <li><a href={Lang[context.language].terms.li2}>{Lang[context.language].terms.li2}</a></li>
                </ul>
                <p>{Lang[context.language].terms.text3}</p>
                <p>{Lang[context.language].terms.text4}</p>
                <p>{Lang[context.language].terms.text5}</p>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.one.title}</h3>
                <p>{Lang[context.language].terms.points.one.text}</p>
                
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.two.title}</h3>
                <p>{Lang[context.language].terms.points.two.text}</p>
                <p>{Lang[context.language].terms.points.two.text2}</p>
                <p>{Lang[context.language].terms.points.two.text3}</p>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.three.title}</h3>
                <p>{Lang[context.language].terms.points.three.text}</p>
                <p>{Lang[context.language].terms.points.three.text2}</p>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.four.title}</h3>
                <p>{Lang[context.language].terms.points.four.text}</p>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.five.title}</h3>
                <p>{Lang[context.language].terms.points.five.text}</p>
                
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.six.title}</h3>
                <p>{Lang[context.language].terms.points.six.text}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].terms.points.six.li}</li>
                    <li>{Lang[context.language].terms.points.six.li2}</li>
                    <li>{Lang[context.language].terms.points.six.li3}</li>
                    <li>{Lang[context.language].terms.points.six.li4}</li>
                    <li>{Lang[context.language].terms.points.six.li5}</li>
                    <li>{Lang[context.language].terms.points.six.li6}</li>
                </ul>
            </div>
            
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.seven.title}</h3>
                <p>{Lang[context.language].terms.points.seven.text}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].terms.points.seven.li}</li>
                    <li>{Lang[context.language].terms.points.seven.li2}</li>
                    <li>{Lang[context.language].terms.points.seven.li3}</li>
                    <li>{Lang[context.language].terms.points.seven.li4}</li>
                    <li>{Lang[context.language].terms.points.seven.li5}</li>
                    <li>{Lang[context.language].terms.points.seven.li6}</li>
                    <li>{Lang[context.language].terms.points.seven.li7}</li>
                </ul>
            </div>

            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.eight.title}</h3>
                <p>{Lang[context.language].terms.points.eight.text}</p>
                <p>{Lang[context.language].terms.points.eight.text2}</p>
                <p>{Lang[context.language].terms.points.eight.text3}</p>
                <p>{Lang[context.language].terms.points.eight.text4}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].terms.points.eight.li}</li>
                    <li>{Lang[context.language].terms.points.eight.li2}</li>
                    <li>{Lang[context.language].terms.points.eight.li3}</li>
                    <li>{Lang[context.language].terms.points.eight.li4}</li>
                    <li>{Lang[context.language].terms.points.eight.li5}</li>
                    <li>{Lang[context.language].terms.points.eight.li6}</li>
                </ul>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.nine.title}</h3>
                <p>{Lang[context.language].terms.points.nine.text}</p>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.ten.title}</h3>
                <p>{Lang[context.language].terms.points.ten.text}</p>
                <ul className="my-5">
                    <li>{Lang[context.language].terms.points.ten.li}</li>
                    <li>{Lang[context.language].terms.points.ten.li2}</li>
                    <li>{Lang[context.language].terms.points.ten.li3}</li>
                </ul>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.eleven.title}</h3>
                <p>{Lang[context.language].terms.points.eleven.text}</p>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.twelve.title}</h3>
                <p>{Lang[context.language].terms.points.twelve.text}</p>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.thirteen.title}</h3>
                <p>{Lang[context.language].terms.points.thirteen.text}</p>
                <p>{Lang[context.language].terms.points.thirteen.text2}</p>
                <p>{Lang[context.language].terms.points.thirteen.text3}</p>
                <p>{Lang[context.language].terms.points.thirteen.text4}</p>
                <p>{Lang[context.language].terms.points.thirteen.text5}</p>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.fourteen.title}</h3>
                <p>{Lang[context.language].terms.points.fourteen.text}</p>
                <p>{Lang[context.language].terms.points.fourteen.text2}</p>
                <p>{Lang[context.language].terms.points.fourteen.text3}</p>
            </div>
            <div className="mb-40">
                <h3>{Lang[context.language].terms.points.fifteen.title}</h3>
                <p>{Lang[context.language].terms.points.fifteen.text}</p>
                <p><span className=" text-white">{Lang[context.language].terms.points.fifteen.copyright}</span></p>
                <p><span className=" text-white">{Lang[context.language].terms.points.fifteen.address}</span></p>
            </div>

            
        </div>
        <Footer/>
        <Copyright/>
        </>
    );
}

export default Terms