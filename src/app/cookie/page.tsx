import React, { useContext } from "react";
import Nav from '@/components/Nav'
import { AppContext } from "../layout";
import { LANGUAGE } from "../../../data";
const Cookie = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className="cookie">
            <Nav/>
        </div>
    );
}

export default Cookie