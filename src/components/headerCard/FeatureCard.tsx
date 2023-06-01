import Image from "next/image";
import React from "react";

const FeatureCard = ({title,description,iconName}:any) => {
    return(
        <div className={`featureCard card ${iconName}`}>
            <div className={`img ${iconName}`}>
                <Image alt="icon" width={30} height={30} src={`/images/common/${iconName}.png`}/>
            </div>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

export default FeatureCard;