'use client'
import { AppContext } from '@/app/layout';
import React, { useContext, useEffect } from 'react'
import Cookie from '../page';

export default function page() {
  const [context, setContext]:any = useContext(AppContext);
    useEffect(() => {
        setContext({...context,language:'HINDI'})
    },[])

  return (
    <Cookie select={4}/>
  )
}