import MultipleButton from '@/components/ui/button/MultipleButton';
import Select from '@/components/ui/form-element/Select';
import Textarea from '@/components/ui/form-element/TextareaField';
import Link from 'next/link';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

const FamilyNewRecord = () => {
    return (
        <div>
            <div className="flex justify-end items-center gap-3 mt-4">
                <Link href='/medical-encounter' className={`flex items-center w-fit px-4 py-1 text-xl rounded-lg my-4 border-2 border-gray-400 hover:border-gray-500 dark:border-gray-500  text-gray-600 hover:text-white dark:text-gray-200  hover:bg-gray-500 transition duration-300`}>
                    <IoArrowBackCircleOutline size={20} className="mr-2"/>
                    <p>Back</p> 
                </Link>
                <Link href='/medical-encounter' className={`flex items-center w-fit px-4 py-1 text-xl rounded-lg my-4 text-white border-2 border-gray-500 hover:border-gray-600 dark:border-gray-800 bg-gray-500 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700 transition duration-300`}>
                    <p>Skip</p> 
                    <IoArrowForwardCircleOutline size={20} className="ms-2"/>
                </Link>
            </div>
            <div className="bg-white shadow-md dark:bg-whiteDark rounded-md mt-3">
                <h1 className='text-xl p-4 border-b font-normal'>Past Medical History</h1>
                <div className="p-6">
                    <div className="">
                        <Textarea label="Family Medical History" className='min-h-10' required />
                    </div>
                    <div className="mt-6">
                        <Textarea label="Alchohol & Smoking History" className='min-h-10' required />
                    </div>
                    <p className='text-xs font-bold text-gray-500 mt-2'>Note : <span className='font-normal'>Please document alchohol consumption, smoking and any additional comments.</span></p>
                </div>
            </div>

            <MultipleButton back='/medical-encounter' save='/medical-encounter' skip='/medical-encounter' />
            
        </div>
    );
};

export default FamilyNewRecord;