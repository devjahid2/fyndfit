import React, { useContext } from "react";
import { LANGUAGE } from "../../data";
import { AppContext } from "@/app/layout";
import Image from "next/image";

const Exercise = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="exercise-section mb-80">
            <div className="xl:container mx-auto px-4 xl:px-0">
                <div className="text-center">
                    <h2 className="title">{Lang[context.language].exercises.title}</h2>
                    <p className="subtitle mx-auto">{Lang[context.language].exercises.subtitle}</p>
                </div>

                <div className="lg:flex gap-5 items-center">
                    <div className="lg:w-1/2 flex justify-center flex-col items-center text-center relative image_text">
                        <Image alt="exercise image" height={450} width={450} src={Lang[context.language].exercises.card1.image}/>
                        <h3>{Lang[context.language].exercises.card1.title}</h3>
                        <p className="lg:w-10/12">{Lang[context.language].exercises.card1.subtitle}</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center flex-col items-center text-center relative image_text">
                    <Image alt="exercise image" height={450} width={450} src={Lang[context.language].exercises.card2.image}/>
                    <h3>{Lang[context.language].exercises.card2.title}</h3>
                        <p className="lg:w-10/12">{Lang[context.language].exercises.card2.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exercise;