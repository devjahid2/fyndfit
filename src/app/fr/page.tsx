'use client'
import React, { useContext, useEffect } from 'react'
import Home from '../page'
import { AppContext } from '../layout';

const page = ({select}:any) => {
    const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'FRENCH'})
    },[])

    return(
        <Home select={2}/>
    )
}
export default page