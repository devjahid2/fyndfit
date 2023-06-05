'use client'
import React, { useContext, useEffect } from 'react'
import Home from '../page'
import { AppContext } from '../layout';

const page = () => {
    const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'SPANISH'})
    },[])

    return(
        <Home select={10}/>
    )
}
export default page