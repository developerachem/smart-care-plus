import Textarea from '@/components/ui/form-element/TextareaField';
import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import MultipleButton from '@/components/ui/button/MultipleButton';

const PlanNewRecord = () => {
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
                <h1 className='text-2xl p-4 border-b font-medium'>Treatment Plan</h1>
                <div className="p-6 md:flex gap-4">
                    <div className="w-6/12">
                        <Textarea label="Treatment Plan" className='h-60' required />
                    </div>
                    <div className="w-6/12">
                        <h1 className='text-lg font-semibold'>Suggestion: NTG</h1>
                    <label className='flex justify-start items-center'>
                        <input type="checkbox" className="checkbox h-5 w-5 mr-2 " /><p className='text-md font-semibold'> Copy Proposed Treatment Plan</p>
                    </label>
                    </div>
                </div>
            </div>

            <MultipleButton back='/medical-encounter' save='/medical-encounter' skip='/medical-encounter' />

        </div>
    );
};

export default PlanNewRecord;