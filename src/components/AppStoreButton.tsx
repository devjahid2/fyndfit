import { AppContext } from "@/app/layout";
import Image from "next/image";
import React, { useContext } from "react";
import { LANGUAGE } from "../../data";

const AppStoreButton = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="flex items-center gap-3 mt-5">
              
              <a href="https://play.google.com/store/apps/details?id=com.appbuildr.fyndfit"><Image width={200} height={100} alt="app store" src={Lang[context.language].buttonImage.play}/></a>

              <a href="https://apps.apple.com/us/app/fyndfit/id1602758207"><Image width={200} height={100} alt="app store" src={'/images/common/app_store.png'}/></a>
            </div>
    );
}

export default AppStoreButton