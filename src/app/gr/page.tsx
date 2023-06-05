'use client'
import React, { useContext, useEffect } from 'react'
import Home from '../page'
import { AppContext } from '../layout';

const page = () => {
    const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'GERMAN'})
    },[])

    return(
        <Home select={3}/>
    )
}
export default page