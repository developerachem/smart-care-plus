"use client";
// import Image from "next/image";
import React, { useState } from "react";
import { FaStethoscope, FaLaptopCode , FaHeartPulse} from 'react-icons/fa';
import style from '../../components/services/services.module.css'
const vital = 'http://localhost:3000/image/All%20Icon-01.svg'
import Image from "next/image";
import Link from "next/link";

function Services() {
  
  const data = [
    {
        icon: 'http://localhost:3000/image/All%20Icon-01.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-02.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-03.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-04.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-05.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-06.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-07.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-08.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-09.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-10.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-11.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-12.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-13.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-14.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-11.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-12.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-13.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    {
        icon: 'http://localhost:3000/image/All%20Icon-14.svg',
        title: "Learn",
        comment: "We are taught here by skilled teachers. You can safely take the className"
    },
    // {
    //     icon: <FaStethoscope className='w-12 h-12'/>,
    //     title: "Learn",
    //     comment: "We are taught here by skilled teachers. You can safely take the className"
    // },
  ];
  return (
    <div>
        <div className="w-full pb-24 pt-8 mx-auto content-center">
            <div className={`${style.main} flex flex-wrap 2xl:mx-9 text-center `}>
                {data.map((data, i)=>(
                <div className='' key={(i)}>
                  <Link href='/medical-encounter'>
                    <div className={` ${style.service} border-2 h-[122px] w-[122px] rounded-lg cursor-pointer flex flex-col items-center justify-center mx-auto`}>
                      <div className="">
                      <Image height={40} width={40} src={data?.icon}
                        className=" inline-block text-center text-white"
                        >
                      </Image>
                      {/* <p>
                        {data.icon}
                      </p> */}
                      <h2 
                        className="title-font pb-2 font-medium text-xl text-center"
                        >
                          {data.title}
                      </h2>
                      </div>
                    </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Services;
