import Select from '@/components/ui/form-element/Select';
import Textarea from '@/components/ui/form-element/TextareaField';
import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import MultipleButton from '@/components/ui/button/MultipleButton';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import Input from '@/components/ui/form-element/Input';

const GlasgowComaNewRecord = () => {
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

            <div className=" bg-white shadow-md dark:bg-whiteDark rounded-md mt-4">
                <h1 className='text-xl p-4 border-b font-normal'>Glasgow Coma Scale</h1>
                <div className="p-6">
                    <div className="md:grid md:grid-cols-2 space-y-4 md:space-y-0 md:gap-4">
                        <div className="md:col-span-2">
                            <Select label="Eye Score" required >
                                <option value="">Select</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                                <option value="">Unknown</option>
                            </Select>
                        </div>
                        <div className="md:col-span-2">
                            <Select label="Verbal" required >
                                <option value="">Select</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                                <option value="">Unknown</option>
                            </Select>
                        </div>
                        <div className="md:col-span-2">
                            <Select label="Motor Score" required >
                                <option value="">Select</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                                <option value="">Unknown</option>
                            </Select>
                        </div>
                        <div className="md:col-span-2">
                            <Input label="Score" />
                        </div>
                        <div className="md:col-span-2">
                            <Textarea label="Result" className='min-h-10' />
                        </div>
                    </div>
                </div>
            </div>

            <MultipleButton back='/medical-encounter' save='/medical-encounter' skip='/medical-encounter' />

        </div>
    );
};

export default GlasgowComaNewRecord;