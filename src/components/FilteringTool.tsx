import React, { useContext } from "react";
import { LANGUAGE } from "../../data";
import { AppContext } from "@/app/layout";
import Image from "next/image";

const FilteringTool = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="xl:container mx-auto px-4 xl:px-0 mb-80">
            <div className="filtering-tool px-4">
            <div className={`lg:flex  gap-5 ${context.language === 'ARABIC' ? 'flex-row-reverse text-end' : ''}`}>
                <div className="lg:w-1/2 filtering-padding">
                    <h2 className="title">{Lang[context.language].filteringTool.title}</h2>
                    <p className="subtitle">{Lang[context.language].filteringTool.subtitle}</p>
                </div>
                <div className="lg:w-1/2 relative flex justify-between">
                    <Image className="img-bottom mt-130" alt="up-img" width={330} height={200} src={Lang[context.language].filteringTool.imageBottom}/>
                    <Image className="img-top" alt="up-img" width={330} height={200} src={Lang[context.language].filteringTool.imageTop}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FilteringTool;