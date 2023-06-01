import Image from "next/image";
import React from "react";

const ExercisesCard = ({text}:any) => {
    return(
        <div className="card exercises">
            <div className="img">
            <Image alt="man" width={20} height={20} src={'/images/common/man.png'}/>
            </div>
            <h2>2500+</h2>
            <p>{text}</p>
        </div>
    )
}

export default ExercisesCard