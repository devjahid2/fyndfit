"use client";
import { AppContext } from "@/app/layout";
import Image from "next/image";
import React, { useContext } from "react";
import Select from "react-select";

const options = [
  {
    // 0
    value: "ENGLISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/english.png"}
        />{" "}
        <span className="text-white">English</span>
      </div>
    ),
  },
  {
    // 1
    value: "ARABIC",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/arabic.png"}
        />{" "}
        <span className="text-white">اَلْعَرَبِيَّةُ</span>
      </div>
    ),
  },
  {
    // 2
    value: "FRENCH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/french.png"}
        />{" "}
        <span className="text-white">Français</span>
      </div>
    ),
  },
  {
    // 3
    value: "GERMAN",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/german.png"}
        />{" "}
        <span className="text-white">Deutsch</span>
      </div>
    ),
  },
  {
    // 4
    value: "HINDI",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/hindi.png"}
        />{" "}
        <span className="text-white">हिन्दी</span>
      </div>
    ),
  },
  {
    // 5
    value: "ITAILIAN",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/italian.png"}
        />{" "}
        <span className="text-white">Italiano</span>
      </div>
    ),
  },
  {
    // 6
    value: "JAPANESE",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/japanese.png"}
        />{" "}
        <span className="text-white">日本語</span>
      </div>
    ),
  },
  {
    // 7
    value: "KOREAN",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/korean.png"}
        />{" "}
        <span className="text-white">한국인</span>
      </div>
    ),
  },
  {
    // 8
    value: "POLISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/polish.png"}
        />{" "}
        <span className="text-white">Polski</span>
      </div>
    ),
  },
  {
    // 9
    value: "PORTUGUESE",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/portuguese.png"}
        />{" "}
        <span className="text-white">Português</span>
      </div>
    ),
  },
  
  {
    // 10
    value: "SPANISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/spanish.png"}
        />{" "}
        <span className="text-white">Español</span>
      </div>
    ),
  },
  {
    // 11
    value: "TURKISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/flag/turkish.png"}
        />{" "}
        <span className="text-white">Türkçe</span>
      </div>
    ),
  },
];

const Nav = ({select}:any) => {
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
