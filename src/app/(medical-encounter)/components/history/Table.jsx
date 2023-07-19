import Link from 'next/link';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';

const Table = () => {
    return (
        <div>
            <div className="">
                <h1 className="text-xl font-bold mt-5 text-start pb-4 text-gray-600 dark:text-gray-400" >Last 3 Medical Encounters</h1>
                <div className="bg-white dark:bg-whiteDark shadow-lg rounded-md p-6">
                    <div className="grid grid-cols-4 text-black dark:text-primary">
                        <p className='text-sm mb-1 font-medium'>Date : <span className='font-normal'>03-Jul-2023</span> </p>
                        <p className='text-sm mb-1 font-medium'>Facility : <span className='font-normal'>89a Independence Way Surgery</span> </p>
                        <p className='text-sm mb-1 font-medium'>Clinician : <span className='font-normal'>Administrator</span> </p>
                        <Link href='/medical-encounter' className={`flex items-center justify-end text-sm text-red-500`} >
                            <AiOutlineEye size={15} className="mr-1"/>
                            <p>View</p> 
                        </Link>
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
            </div>
        </div>
    );
};

export default Table;