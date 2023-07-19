"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import FormHTS from './FormHTS';
import Table from './Table';
import VitalForm from './VitalForm';
import HistoryOpd from './opd/HistoryOpd';
import GynObsHistories from './opd/Gyn-obs-histories';

const History = () => {

    const data = {
        text: "First-Line treatment (previously Category I) remains the same: 2 months (Rifampicin,Isoniazid,Ethambutol, Pyrazinamide)/4 months(Rifampicin,isoniazid) For children between ages 3 months and 16 years"
        };
        
        const [showFullText, setShowFullText] = useState(false);
        
        const handlePreviewClick = () => {
            if(!showFullText){
                setShowFullText(true);
            }
            else{
                setShowFullText(false);
            }
        };
    
    return (
        <div>
            <div className="md:grid md:grid-cols-4 gap-4">
                {/* Left Side */}
                <div className="col-span-3">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className=" p-4 shadow-md rounded-md" style={{background: 'var(--white)'}}>
                            <h1 className='text-xl mb-3'>Rachel Green</h1>
                            <p className='text-sm mb-1'>NUPN : <span>2306-02123P-00001-1</span> </p>
                            <p className='text-sm mb-1'>Sex : <span>Female</span> </p>
                            <p className='text-sm mb-1'>DOB : <span>13-Jun-2000</span> </p>
                            <p className='text-sm mb-1'>Age : <span>23 years 1 month 1 day</span> </p>

                            <p className='font-semibold mt-3 text-indigo-600 hover:text-indigo-400 cursor-pointer' >Preview</p>
                        </div>
                        <div className=" p-4 shadow-md rounded-md" style={{background: 'var(--white)'}}>
                            <h1 className='text-xl mb-3'>Rachel Green</h1>
                            <p className='text-sm mb-1'>NUPN : <span>2306-02123P-00001-1</span> </p>
                            <p className='text-sm mb-1'>Sex : <span>Female</span> </p>
                            <p className='text-sm mb-1'>DOB : <span>13-Jun-2000</span> </p>
                            <p className='text-sm mb-1'>Age : <span>23 years 1 month 1 day</span> </p>

                            <p className='font-semibold mt-3 text-indigo-600 hover:text-indigo-400 cursor-pointer' >Preview</p>
                        </div>
                        <div className=" p-4 shadow-md rounded-md" style={{background: 'var(--white)'}}>
                            <h1 className='text-xl mb-3'>Rachel Green</h1>
                            <p className='text-sm mb-1'>NUPN : <span>2306-02123P-00001-1</span> </p>
                            <p className='text-sm mb-1'>Sex : <span>Female</span> </p>
                            <p className='text-sm mb-1'>DOB : <span>13-Jun-2000</span> </p>
                            <p className='text-sm mb-1'>Age : <span>23 years 1 month 1 day</span> </p>

                            <p className='font-semibold mt-3 text-indigo-600 hover:text-indigo-400 cursor-pointer' >Preview</p>
                        </div>
                    </div>

                    {/* <Table/> */}

                    {/* <VitalForm/> */}

                    {/* <FormHTS/> */}

                    {/* Medical Encounter (OPD) --> Complaints & Histories */}
                    {/* <HistoryOpd /> */}

                    {/* Medical Encounter (OPD) --> Gyn & obs Histories */}

                    <GynObsHistories/>

                </div>
                {/* Right Side */}
                <div className="">
                    <div className="grid md:grid-rows-3 gap-4 mt-12 md:mt-0">
                        <div className="flex flex-col justify-between p-4 shadow-md rounded-md min-h-[200px]" style={{background: 'var(--white)'}}>
                            <div className="">
                                <h1 className='text-xl mb-3'>Diagnosis</h1>
                                <p className='text-sm mb-1'>{showFullText ? data.text : `${data.text.slice(0, 100)}...`}</p>
                            </div>
                            <p className='font-semibold mt-3 text-indigo-600 hover:text-indigo-400 cursor-pointer'  onClick={handlePreviewClick} >{showFullText? 'Less' : 'Preview'}</p>
                        </div>
                        <div className="flex flex-col justify-between p-4 shadow-md rounded-md min-h-[200px]" style={{background: 'var(--white)'}}>
                            <div className="">
                                <h1 className='text-xl mb-3'>Treatment Plan
</h1>
                                <p className='text-sm mb-1'>{showFullText ? data.text : `${data.text.slice(0, 100)}...`}</p>
                            </div>
                            <p className='font-semibold mt-3 text-indigo-600 hover:text-indigo-400 cursor-pointer'  onClick={handlePreviewClick} >{showFullText? 'Less' : 'Preview'}</p>
                        </div>
                        <div className="flex flex-col justify-between p-4 shadow-md rounded-md min-h-[200px]" style={{background: 'var(--white)'}}>
                            <div className="">
                                <h1 className='text-xl mb-3'>Medication Plan
</h1>
                                <p className='text-sm mb-1'>{showFullText ? data.text : `${data.text.slice(0, 100)}...`}</p>
                            </div>
                            <p className='font-semibold mt-3 text-indigo-600 hover:text-indigo-400 cursor-pointer'  onClick={handlePreviewClick} >{showFullText? 'Less' : 'Preview'}</p>
                        </div>
                        <div className="flex flex-col justify-between p-4 shadow-md rounded-md min-h-[200px]" style={{background: 'var(--white)'}}>
                            <div className="">
                                <h1 className='text-xl mb-3'>Investigation</h1>
                                <p className='text-sm mb-1'>{showFullText ? data.text : `${data.text.slice(0, 100)}...`}</p>
                            </div>
                            <p className='font-semibold mt-3 text-indigo-600 hover:text-indigo-400 cursor-pointer'  onClick={handlePreviewClick} >{showFullText? 'Less' : 'Preview'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;