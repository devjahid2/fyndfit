'use client'
import Nav from '@/components/Nav'
import Image from 'next/image'
import { useContext } from 'react';
import { AppContext } from './layout';
import { LANGUAGE } from './../../data';
import Feature from '@/components/Feature';

export default function Home() {
  const [context, setContext]:any = useContext(AppContext);
  const Lang:any = LANGUAGE;
  return (
    <main className="">
      <Nav/>
      <div className='xl:container mx-auto px-4 xl:px-0'>
        <div className="lg:flex mt-5 lg:items-center">
          <div className="lg:w-1/2">
            <h2 className='title mb-10'>{Lang[context.language].header.title}</h2>
            <p className='subtitle'>{Lang[context.language].header.subtitle}</p>

            <div className="flex items-center gap-3 mt-5">
              <Image width={200} height={100} alt="app store" src={'/images/common/play_store.png'}/>
              <Image width={200} height={100} alt="app store" src={'/images/common/app_store.png'}/>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <Image className='absolute z-down position-center' width={400} height={400} alt='header img' src={'/images/common/dark-bg.png'}/>
            <Image className='absolute z-down position-center' width={1000} height={1000} alt='header img' src={'/images/common/white-border.png'}/>
            <Image width={1000} height={1000} alt='header img' src={Lang[context.language].header.image}/>
          </div>
        </div>
      </div>
      <Feature/>
    </main>
  )
}
