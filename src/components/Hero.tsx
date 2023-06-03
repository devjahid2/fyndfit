import React,{useContext} from "react";
import { LANGUAGE } from "../../data";
import { AppContext } from "@/app/layout";
import Image from "next/image";
import EquipmentCard from '@/components/headerCard/equipmentCard';
import ExercisesCard from '@/components/headerCard/exercisesCard';
import AppStoreButton from "./AppStoreButton";

const Hero = () => {
    const [context, setContext]:any = useContext(AppContext);
    const Lang:any = LANGUAGE;
    return(
        <div className='xl:container mx-auto px-4 xl:px-0'>
        <div className={`lg:flex mt-5 lg:items-center gap-10 ${context.language === 'ARABIC' ? 'flex-row-reverse text-end' : ''}`}>
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className='title mb-10'>{Lang[context.language].header.title}</h2>
            <p className='subtitle'>{Lang[context.language].header.subtitle}</p>

            <AppStoreButton/>
          </div>
          <div className="lg:w-1/2 relative">
            <EquipmentCard text={Lang[context.language].header.equipmentText}/>
            <ExercisesCard text={Lang[context.language].header.exerciseText}/>
            <Image className='absolute z-down position-center' width={400} height={400} alt='header img' src={'/images/common/dark-bg.png'}/>
            <Image className='absolute z-down position-center' width={1000} height={1000} alt='header img' src={'/images/common/white-border.png'}/>
            <Image width={1000} height={1000} alt='header img' src={Lang[context.language].header.image}/>
          </div>
        </div>
      </div>
    );
}

export default Hero;