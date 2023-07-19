import Select from '@/components/ui/form-element/Select';
import TextareaField from '@/components/ui/form-element/TextareaField';
import Link from 'next/link';
import React, { useState } from 'react';
import style from './foldertree.module.css'
import { BsCheck2Circle, BsGrid } from 'react-icons/bs';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import Dropdown from './Dropdown';
import Date from '@/components/ui/form-element/Date';
import TableNewChronic from './TableNewRecord';
import FolderTree from './FolderTree';
import { FaFile, FaFolderOpen } from 'react-icons/fa';
import Input from '@/components/ui/form-element/Input';
import MultipleButton from '@/components/ui/button/MultipleButton';

const ChronicNewRecord = () => {

    const [selectedOption, setSelectedOption] = useState('National Treatment Guideline');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [isOngoing, setIsOngoing] = useState(false);
    
    const handleCheckboxChange = (event) => {
        setIsOngoing(event.target.checked);
    };

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
            
            {/* top section */}
            <div className="bg-white dark:bg-whiteDark rounded-md shadow-md">
                <h1 className='text-xl p-4 border-b font-normal'>Chronic / Non Chronic Conditions</h1>
                <div className="p-4">

                <div className="sm:flex">
                <div className="form-control mr-8">
                    <label className="label cursor-pointer">
                    <input
                        type="radio"
                        name="radio-10"
                        value="National Treatment Guideline"
                        className="radio w-4 h-4"
                        checked={selectedOption === 'National Treatment Guideline'}
                        onChange={handleOptionChange}
                    />
                    <span className="label-text ms-2  text-lg">National Treatment Guideline</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                    <input
                        type="radio"
                        name="radio-10"
                        value="ICD 11"
                        className="radio w-4 h-4"
                        checked={selectedOption === 'ICD 11'}
                        onChange={handleOptionChange}
                    />
                    <span className="label-text ms-2  text-lg">ICD 11</span>
                    </label>
                </div>
                </div>
                {selectedOption === 'National Treatment Guideline' && 
                    <div className='border p-4 mt-4 text-md '>
                        <div className="my-2">
                            <Input required label="Search..." />
                        </div>
                        <FolderTree title="First" height="" className={`${style.folderTree}`}  icon={<FaFolderOpen />} >
                            <li>
                                <FolderTree title="One" height="" className={`${style.folderTree}`}  icon={<FaFolderOpen />} >
                                    <li className={`${style.file}`}>
                                        <p className={` flex items-center cursor-pointer ms-3`}> <FaFile className='mr-2' /> New File </p>
                                    </li>
                                    <li className={`${style.file}`}>
                                        <p className={` flex items-center cursor-pointer ms-3`}> <FaFile className='mr-2' /> New File </p>
                                    </li>
                                </FolderTree>
                            </li>
                            <li>
                                <FolderTree title="Two" height="" className={`${style.folderTree}`}  icon={<FaFolderOpen />} >
                                    <li className={`${style.file}`}>
                                        <p className={` flex items-center cursor-pointer ms-3`}> <FaFile className='mr-2' /> New File </p>
                                    </li>
                                </FolderTree>
                            </li>
                        </FolderTree>
                        <FolderTree title="Second" height="" className={`${style.folderTree}`}  icon={<FaFolderOpen />} >
                            <li>
                                <FolderTree title="First" height="" className={`${style.folderTree}`}  icon={<FaFolderOpen />} >
                                    <li className={`${style.file}`}>
                                        <p className={` flex items-center cursor-pointer ms-3`}> <FaFile className='mr-2' /> New File </p>
                                    </li>
                                </FolderTree>
                            </li>
                            <li>
                                <FolderTree title="Second" height="" className={`${style.folderTree}`}  icon={<FaFolderOpen />} >
                                    <li className={`${style.file}`}>
                                        <p className={` flex items-center cursor-pointer ms-3`}> <FaFile className='mr-2' /> New File </p>
                                    </li>
                                </FolderTree>
                            </li>
                        </FolderTree>
                        {/* <Dropdown /> */}
                    </div>
                }
                {selectedOption === 'ICD 11' && 
                    <div>
                        <Dropdown />
                    </div>
                }

                <div className="mt-3">
                    <div className="sm:flex">
                        <div className="form-control">
                            <label className="label cursor-pointer">
                            <input
                                type="radio"
                                name="radio-2"
                                value="ICD 12"
                                checked
                                className="radio w-4 h-4"
                            />
                            <span className="label-text ms-2  text-lg">Chronic Condition</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                            <input
                                type="radio"
                                name="radio-2"
                                value="ICD 12"
                                className="radio w-4 h-4"
                            />
                            <span className="label-text ms-2  text-lg">Non Chronic Condition</span>
                            </label>
                        </div>
                    </div>

                    <div className="md:grid md:grid-cols-4 md:gap-4 space-y-4 md:space-y-0 mt-4">
                        <div className="col-span-1">
                            <Date  label="Date Diagnosed" />
                        </div>
                        <div className="col-span-1 ">
                            <div className="form-control flex items-center justify-center">
                                <label className="label cursor-pointer ">
                                <input 
                                    type="checkbox"  
                                    className="checkbox mr-3 h-5 w-5"
                                    checked={isOngoing}
                                    onChange={handleCheckboxChange} 
                                />
                                <span className="label-text">Still Ongoing</span>
                                </label>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Date label="Date Resolved" disabled={isOngoing} />
                        </div>
                        <div className="col-span-1">
                            <Select label="Certainty" >
                                <option value="">Select</option>
                                <option value="">Select</option>
                            </Select>
                        </div>
                        <div className="col-span-4">
                            <TextareaField label="Note" className='min-h-10'  />
                        </div>
                    </div>
                </div>

                </div>
            </div>

            {/* bottom section */}
            
            <TableNewChronic/>


            <MultipleButton back='/medical-encounter' save='/medical-encounter' skip='/medical-encounter' />

        </div>
    );
};

export default ChronicNewRecord;