import Image from "next/image";
import React from "react";

const EquipmentCard = ({text}:any) => {
    return(
        <div className="card equipment">
            <Image alt="weight" width={40} height={40} src={'/images/common/weight.png'}/>
            <h2>100+ </h2>
            <p>{text}</p>
        </div>
    );
}

export default EquipmentCard;