import React, { useContext } from "react";
import { LANGUAGE } from "../../data";
import { AppContext } from "@/app/layout";
import Image from "next/image";

const ImageSearch = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="image-search-section mb-80 xl:container mx-auto px-4 xl:px-0">
            <div className="image-search relative ">
                <div className="lg:flex items-center">
                    <div className="lg:w-1/2 filtering-padding">
                        <h2 className="title">{Lang[context.language].imageSearch.title}</h2>
                        <h2 className="subtitle">{Lang[context.language].imageSearch.subtitle}</h2>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <Image alt="image search" width={400} height={400} src={Lang[context.language].imageSearch.image}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageSearch