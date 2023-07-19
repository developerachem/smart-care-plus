import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

const GynPastRecord = () => {
    return (
        <div>
            <div className=" mt-10">
                <div className="bg-white dark:bg-whiteDark shadow-lg rounded-md p-6">
                    <div className="grid grid-cols-3 text-black dark:text-primary border-b-2 dark:border-b-gray-600 pb-2">
                        <p className='text-xs mb-1 font-semibold'>Date : <span className='font-normal'>03-Jul-2023</span> </p>
                        <p className='text-xs mb-1 font-semibold'>Facility : <span className='font-normal'>89a Independence Way Surgery</span> </p>
                        <p className='text-xs mb-1 font-semibold'>Clinician : <span className='font-normal'>Administrator</span> </p>
                    </div>

                    <div className="grid grid-cols-5 my-6 text-black dark:text-primary">
                        <div className='text-xs mb-1 font-semibold py-1 col-span-5 flex w-full'>
                            <span className='w-3/12'> Menstrual History </span>
                            <span className='w-1/12'> : </span>  
                            <span className='w-8/12 font-normal'>Fasa</span> 
                        </div>
                        <div className='text-xs mb-1 font-semibold py-1 col-span-5 flex w-full'>
                            <span className='w-3/12'> LMP </span>
                            <span className='w-1/12'> : </span>  
                            <span className='w-8/12 font-normal'>01-Jun-2023</span> 
                        </div>
                        <div className='text-xs mb-1 font-semibold py-1 col-span-5 flex w-full'>
                            <span className='w-3/12'> Pregnant </span>
                            <span className='w-1/12'> : </span>  
                            <span className='w-8/12 font-normal'>Yes</span> 
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-3 mt-4">
                    <Link href='/medical-encounter' className={`flex items-center w-fit px-4 py-2 text-xl rounded-lg my-4 text-white border-2 border-gray-500 hover:border-gray-600 dark:border-gray-700 bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600 transition duration-300`}>
                        <IoArrowBackCircleOutline size={20} className="mr-2"/>
                        <p>Back</p> 
                    </Link>
                    <Link href='/medical-encounter' className={`flex items-center w-fit px-4 py-2 text-xl rounded-lg my-4 text-white border-2 border-gray-500 hover:border-gray-600 dark:border-gray-700 bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600 transition duration-300`}>
                        <p>Skip</p> 
                        <IoArrowForwardCircleOutline size={20} className="ms-2"/>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default GynPastRecord;