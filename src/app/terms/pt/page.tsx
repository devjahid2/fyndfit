'use client'
import { AppContext } from '@/app/layout';
import React, { useContext, useEffect } from 'react'
import Terms from '../page';

export default function page() {
  const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'PORTUGUESE'})
    },[])

  return (
    <Terms select={9}/>
  )
}