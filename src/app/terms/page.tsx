'use client'
import React, { useContext } from 'react'
import { AppContext } from '../layout';
import { LANGUAGE } from '../../../data';

export default function page() {
  const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    console.log(context.language);
  return (
    <div>page {context.language}</div>
  )
}
