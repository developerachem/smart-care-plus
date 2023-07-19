"use client";
import Footer from "@/components/footer/Footer";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import Link from "next/link";
import History from "../components/history/History";

function MedicalEncounter() {
  return (
    <div>
      <div className="w-full mx-auto px-4" style={{color: 'var(--primary)'}}>
          <h1 className="text-3xl font-bold mt-5 border-b text-start pb-2" >History of Medical Encounter</h1>
          <Link href='/medical-encounter' className={`flex items-center w-fit px-3 py-2 rounded-lg my-4 text-white bg-buttonColor hover:bg-buttonColorHover transition duration-300`}>
            <AiOutlinePlusCircle size={20} className="mr-2"/>
            <p>Start Encounter</p> 
          </Link>
          <div className="">
            <History/>
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MedicalEncounter;
