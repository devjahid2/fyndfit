"use client";
import { AppContext } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Select from "react-select";

const Nav = ({select, middleware}:any) => {


  const options = [
    {
      // 0
      value: "ENGLISH",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/en`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/english.png"}
          />{" "}
          <span className="text-white">English</span>
        </Link>
      ),
    },
    {
      // 1
      value: "ARABIC",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/ar`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/arabic.png"}
          />{" "}
          <span className="text-white">اَلْعَرَبِيَّةُ</span>
        </Link>
      ),
    },
    {
      // 2
      value: "FRENCH",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/fr`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/french.png"}
          />{" "}
          <span className="text-white">Français</span>
        </Link>
      ),
    },
    {
      // 3
      value: "GERMAN",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/gr`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/german.png"}
          />{" "}
          <span className="text-white">Deutsch</span>
        </Link>
      ),
    },
    {
      // 4
      value: "HINDI",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/in`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/hindi.png"}
          />{" "}
          <span className="text-white">हिन्दी</span>
        </Link>
      ),
    },
    {
      // 5
      value: "ITAILIAN",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/it`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/italian.png"}
          />{" "}
          <span className="text-white">Italiano</span>
        </Link>
      ),
    },
    {
      // 6
      value: "JAPANESE",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/jp`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/japanese.png"}
          />{" "}
          <span className="text-white">日本語</span>
        </Link>
      ),
    },
    {
      // 7
      value: "KOREAN",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/kp`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/korean.png"}
          />{" "}
          <span className="text-white">한국인</span>
        </Link>
      ),
    },
    {
      // 8
      value: "POLISH",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/pf`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/polish.png"}
          />{" "}
          <span className="text-white">Polski</span>
        </Link>
      ),
    },
    {
      // 9
      value: "PORTUGUESE",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/pt`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/portuguese.png"}
          />{" "}
          <span className="text-white">Português</span>
        </Link>
      ),
    },
    
    {
      // 10
      value: "SPANISH",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/es`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/spanish.png"}
          />{" "}
          <span className="text-white">Español</span>
        </Link>
      ),
    },
    {
      // 11
      value: "TURKISH",
      label: (
        <Link href={`${middleware ? '/'+middleware:''}/tr`}className="flex gap-2">
          <Image
            width={28}
            height={18}
            alt="icon"
            src={"/images/flag/turkish.png"}
          />{" "}
          <span className="text-white">Türkçe</span>
        </Link>
      ),
    },
  ];
  



    const [context,setContext]:any = useContext(AppContext);
    // console.log(options[select])
    const handelLanguage = (lang:string|object|undefined) => {
        setContext({...context,language:lang})
    }
  return (
    <div className="sticky-top">
      <div className="xl:container mx-auto px-4 xl:px-0">
        <div className="flex items-center justify-between">
      <a href="/"><Image
        className="logo-img"
        alt="logo"
        width={88}
        height={88}
        src="/images/common/logo.png"
      /></a>
      <Select
        defaultValue={options[select]}
        onChange={(lang) => handelLanguage(lang?.value)}
        options={options}
        theme={(theme) => ({
          ...theme,
          // borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#181818",
            primary: "transparent",
          },
        })}
      />
    </div>
    </div>
    </div>
  );
};

export default Nav;
