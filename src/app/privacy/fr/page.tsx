'use client'
import { AppContext } from '@/app/layout';
import React, { useContext, useEffect } from 'react'
import Policy from '../page';

export default function page() {
  const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'FRENCH'})
    },[])

  return (
    <Policy select={2}/>
  )
}