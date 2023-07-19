"use client";
import Footer from "@/components/footer/Footer";
import Logo from "@/components/logo/Logo";
import Services from "@/app/(main-header)/components/services/Services";
import React, { useState } from "react";
import { FaStethoscope } from 'react-icons/fa';

function Client() {
  return (
    <div>
      <div className="w-10/12 lg:w-8/12 mx-auto min-h-screen">
        <div className="flex justify-center items-center mt-6">
          <Logo />
        </div>
        <h1 className="text-3xl font-semibold my-3 text-center pb-4" style={{color: 'var(--primary)'}}>Service Points</h1>
        <h1 className="border-b-[1px] border-b-gray-500 w-full mx-auto" ></h1>
        <Services/>
        </div>
      <Footer />
    </div>
  );
}

export default Client;
