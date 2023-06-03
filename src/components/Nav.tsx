"use client";
import { AppContext } from "@/app/layout";
import Image from "next/image";
import React, { useContext } from "react";
import Select from "react-select";

const options = [
  {
    value: "ENGLISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">English</span>
      </div>
    ),
  },
  {
    value: "ARABIC",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Arabic</span>
      </div>
    ),
  },
  {
    value: "FRENCH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">French</span>
      </div>
    ),
  },
  {
    value: "GERMAN",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">German</span>
      </div>
    ),
  },
  {
    value: "HINDI",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Hindi</span>
      </div>
    ),
  },
  {
    value: "ITAILIAN",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Itailian</span>
      </div>
    ),
  },
  {
    value: "JAPANESE",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Japanese</span>
      </div>
    ),
  },
  {
    value: "KOREAN",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Korean</span>
      </div>
    ),
  },
  {
    value: "POLISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Polish</span>
      </div>
    ),
  },
  {
    value: "PORTUGUESE",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Portuguese</span>
      </div>
    ),
  },
  
  {
    value: "SPANISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Spanish</span>
      </div>
    ),
  },
  {
    value: "TURKISH",
    label: (
      <div className="flex gap-2">
        <Image
          width={28}
          height={18}
          alt="icon"
          src={"/images/common/en.png"}
        />{" "}
        <span className="text-white">Turkish</span>
      </div>
    ),
  },
];

const Nav = () => {
    const [context,setContext]:any = useContext(AppContext);

    const handelLanguage = (lang:string|object|undefined) => {
        setContext({...context,language:lang})
    }
  return (
    <div className="xl:container mx-auto px-4 xl:px-0">
        <div className="flex items-center justify-between">
      <Image
        className="logo-img"
        alt="logo"
        width={88}
        height={88}
        src="/images/common/logo.png"
      />
      <Select
        defaultValue={options[0]}
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
  );
};

export default Nav;
