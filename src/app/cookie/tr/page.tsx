'use client'
import { AppContext } from '@/app/layout';
import React, { useContext, useEffect } from 'react'
import Policy from '@/app/privacy/page';

export default function page() {
  const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'ARABIC'})
    },[])

  return (
    <Policy select={1}/>
  )
}