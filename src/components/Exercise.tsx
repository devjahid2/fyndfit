import React, { useContext } from "react";
import { LANGUAGE } from "../../data";
import { AppContext } from "@/app/layout";

const Exercise = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="exercise-section">
            <div className="xl:container mx-auto px-4 xl:px-0">
                <div className="text-center">
                    <h2 className="title">{Lang[context.language].exercises.title}</h2>
                    <p className="subtitle mx-auto">{Lang[context.language].exercises.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

export default Exercise;