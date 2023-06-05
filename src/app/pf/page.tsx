'use client'
import React, { useContext, useEffect } from 'react'
import Home from '../page'
import { AppContext } from '../layout';

const page = () => {
    const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'POLISH'})
    },[])

    return(
        <Home select={8}/>
    )
}
export default page