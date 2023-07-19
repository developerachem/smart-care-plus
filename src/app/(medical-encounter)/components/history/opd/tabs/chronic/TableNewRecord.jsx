import Link from 'next/link';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';

const TableNewChronic = () => {
    return (
        <div>
            <div className=" mt-10">
                <Link href='/medical-encounter' className={`flex items-center w-fit px-3 py-2 rounded-lg my-4 text-white bg-buttonColor hover:bg-buttonColorHover transition duration-300`}>
                    <AiOutlinePlusCircle size={20} className="mr-2"/>
                    <p>Add</p> 
                </Link>
                <div className="bg-white dark:bg-whiteDark shadow-lg rounded-md p-6 overflow-hidden">

                    <div className="grid grid-cols-1 my-6 overflow-x-auto pb-6">
                    <table class="table-auto text-black dark:text-primary min-w-[1080px]">
                            <thead className=''>
                                <tr className='pb-8 border-b'>
                                    <th className='text-start font-medium text-sm pb-2'>Type</th>
                                    <th className='text-start font-medium text-sm pb-2'>Condition</th>
                                    <th className='text-start font-medium text-sm pb-2'>Diagnosed</th>
                                    <th className='text-start font-medium text-sm pb-2'>Resolved</th>
                                    <th className='text-start font-medium text-sm pb-2'>Ongoing</th>
                                    <th className='text-start font-medium text-sm pb-2'>Certainty</th>
                                    <th className='text-start font-medium text-sm pb-2'>NTG</th>
                                    <th className='text-start font-medium text-sm pb-2'>ICD</th>
                                    <th className='text-start font-medium text-sm pb-2'>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border-b '>
                                    <td className='py-2 text-sm'>The Sliding</td>
                                    <td className='py-2 text-sm'>Malcolm Lockyer</td>
                                    <td className='py-2 text-sm'></td>
                                    <td className='py-2 text-sm'></td>
                                    <td className='py-2 text-sm'></td>
                                    <td className='py-2 text-sm'></td>
                                    <td className='py-2 text-sm'></td>
                                    <td className='py-2 text-sm'></td>
                                    <td className='py-2 text-sm'></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default TableNewChronic;