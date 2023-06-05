import React, { useContext, useEffect } from 'react'
import Home from '../page'
import { AppContext } from '../layout';

export default function page() {
  const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'ENGLISH'})
    },[])

  return (
    <Home select={0}/>
  )
}
