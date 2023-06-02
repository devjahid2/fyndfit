import React, { useContext } from "react";
import { LANGUAGE } from "../../data";
import { AppContext } from "@/app/layout";
import Image from "next/image";

const Equipment = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="equipment-section mb-80 xl:container mx-auto px-4 xl:px-0">
            <div className="equipment-sec relative ">
                <div className={`lg:flex items-center ${context.language === 'ARABIC' ? 'flex-row-reverse text-end' : ''}`}>
                     <div className="lg:w-1/2 flex justify-center">
                        <Image alt="image search" width={600} height={600} src={Lang[context.language].equipment.image}/>
                    </div>
                   
                    <div className={`lg:w-1/2 filtering-padding ${context.language === 'ARABIC' ? 'flex flex-col items-end' : ''}`}>
                    <Image
        className="logo-img"
        alt="logo"
        width={88}
        height={88}
        src="/images/common/logo-tranparent.png"
      />
                        <h2 className="title">{Lang[context.language].equipment.title}</h2>
                        <div className="flex items-center gap-3 mt-5">
                            <Image width={200} height={100} alt="app store" src={'/images/common/play_store.png'}/>
                            <Image width={200} height={100} alt="app store" src={'/images/common/app_store.png'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipment;