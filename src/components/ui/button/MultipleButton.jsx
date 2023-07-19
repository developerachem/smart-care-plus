import Link from 'next/link';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

const MultipleButton = ({back, save, skip}) => {
    return (
        <div>
            <div className="flex justify-center items-center gap-3 mt-4">
                <Link href={`${back}`} className={`flex items-center w-fit px-4 py-2 text-xl rounded-lg my-4 border-2 border-gray-400 hover:border-gray-500 dark:border-gray-500  text-gray-600 hover:text-white dark:text-gray-200  hover:bg-gray-500 transition duration-300`}>
                    <IoArrowBackCircleOutline size={20} className="mr-2"/>
                    <p>Back</p> 
                </Link>
                <Link href={`${save}`} className={`flex items-center w-fit px-4 py-2 rounded-lg my-4 border-2 border-buttonColor hover:border-buttonColorHover text-white bg-buttonColor hover:bg-buttonColorHover transition duration-300`}>
                    <BsCheck2Circle size={20} className="mr-2"/>
                    <p>Save & Next</p> 
                </Link>
                <Link href={`${skip}`} className={`flex items-center w-fit px-4 py-2 text-xl rounded-lg my-4 text-white border-2 border-gray-500 hover:border-gray-600 dark:border-gray-800 bg-gray-500 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-700 transition duration-300`}>
                    <p>Skip</p> 
                    <IoArrowForwardCircleOutline size={20} className="ms-2"/>
                </Link>
            </div>
        </div>
    );
};

export default MultipleButton;