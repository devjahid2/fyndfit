'use client'
import React, { useContext } from "react";
import { LANGUAGE } from "../../data";
import { AppContext } from "@/app/layout";
import FeatureCard from "./headerCard/FeatureCard";

const Feature = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="feature">
            <div className=" xl:container mx-auto px-4 xl:px-0">
                <div className="lg:flex mt-5 lg:items-start gap-5">
                    <div className="lg:w-1/2">
                        <h2 className="title">{Lang[context.language].features.title}</h2>
                        <p className="subtitle">{Lang[context.language].features.subtitle}</p>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="md:flex md:items-start md:justify-center md:gap-5">
                        <div className="md:w-1/2">
                            <FeatureCard title={Lang[context.language].features.card1.title} description={Lang[context.language].features.card1.subtitle} iconName={'note-pen'}/>
                            <FeatureCard title={Lang[context.language].features.card3.title} description={Lang[context.language].features.card3.subtitle} iconName={'filter'}/>
                        </div>
                        <div className="md:w-1/2">
                            <FeatureCard title={Lang[context.language].features.card2.title} description={Lang[context.language].features.card2.subtitle} iconName={'img-search'}/>
                            <FeatureCard title={Lang[context.language].features.card4.title} description={Lang[context.language].features.card4.subtitle} iconName={'weight-green'}/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature;