import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

const PastRecord = () => {
    return (
        <div>
            <div className=" mt-10">
                <div className="bg-white dark:bg-whiteDark shadow-lg rounded-md p-6">
                    <div className="grid grid-cols-3 text-black dark:text-primary">
                        <p className='text-sm mb-1 font-medium'>Date : <span className='font-normal'>03-Jul-2023</span> </p>
                        <p className='text-sm mb-1 font-medium'>Facility : <span className='font-normal'>89a Independence Way Surgery</span> </p>
                        <p className='text-sm mb-1 font-medium'>Clinician : <span className='font-normal'>Administrator</span> </p>
                    </div>

                    <div className="grid grid-cols-1 my-6">
                    <table class="table-auto text-black dark:text-primary">
                            <thead className=''>
                                <tr className='pb-8 border-b'>
                                    <th className='text-start font-medium text-sm pb-2'>Chief Complaints</th>
                                    <th className='text-start font-medium text-sm pb-2'>History of Chief Complaints</th>
                                    <th className='text-start font-medium text-sm pb-2'>Serostatus and Disclosure</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b '>
                                    <td className='py-2 text-sm'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td className='py-2 text-sm'>Malcolm Lockyer</td>
                                    <td className='py-2 text-sm'>1961</td>
                                </tr>
                                <tr className='border-b '>
                                    <td className='py-2 text-sm'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td className='py-2 text-sm'>Malcolm Lockyer</td>
                                    <td className='py-2 text-sm'>1961</td>
                                </tr>
                            </tbody>
                        </table>
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

export default PastRecord;