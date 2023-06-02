import { AppContext } from "@/app/layout";
import Image from "next/image";
import React, { useContext } from "react";

const FeatureCard = ({title,description,iconName}:any) => {
    const [context, setContext]:any = useContext(AppContext);
    return(
        <div className={`featureCard card ${iconName} ${context.language === 'ARABIC' ? 'flex items-end flex-col':''}`}>
            <div className={`img ${iconName}`}>
                <Image alt="icon" width={30} height={30} src={`/images/common/${iconName}.png`}/>
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default FeatureCard;