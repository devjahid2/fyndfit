'use client'
import Nav from '@/components/Nav'
import Feature from '@/components/Feature';
import Exercise from '@/components/Exercise';
import FilteringTool from '@/components/FilteringTool';
import ImageSearch from '@/components/ImageSearch';
import Workout from '@/components/Workout';
import WorkoutLibrary from '@/components/WorkoutLibrary';
import Equipment from '@/components/Equipment';
import Copyright from '@/components/Copyright';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function Home({select}:any) {
  
  return (
    <main className="">
      <Nav select={select||0}/>
      <Hero/>
      <Feature/>
      <Exercise/>
      <FilteringTool/>
      <ImageSearch/>
      <Workout/>
      <WorkoutLibrary/>
      <Equipment/>
      <Footer/>
      <Copyright/>
    </main>
  )
}
