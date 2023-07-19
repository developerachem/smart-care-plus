import Date from '@/components/ui/form-element/Date';
import Input from '@/components/ui/form-element/Input';
import Select from '@/components/ui/form-element/Select';
import Textarea from '@/components/ui/form-element/TextareaField';
import Link from 'next/link';
import React from 'react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import List from '../tabs/tb-constitutional/List';
import MultipleButton from '@/components/ui/button/MultipleButton';

const NewRecord = () => {
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
                <h1 className='text-xl p-4 border-b font-normal'>Menstrual History</h1>
                <div className="p-6">
                    <div className="">
                        <Textarea label="Menstrual History" className='min-h-10' required />
                    </div>
                    <p className='text-xs font-bold text-gray-500 mt-2'>Note : <span className='font-normal'>Please document Menarche, Menopause, Cycle regularity, Cycle duration, Menstrual heaviness.</span></p>
                </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-whiteDark rounded-md mt-8">
                <h1 className='text-xl p-4 border-b font-normal'>Obstetrics History</h1>
                <div className="p-6">
                    <div className="md:grid md:grid-cols-4 space-y-4 md:space-y-0 md:gap-4">
                        <div className="md:col-span-1">
                            <Date  label="LNMP" required />
                        </div>
                        <div className="md:col-span-1">
                            <Select label="Are you pregnent" required >
                                <option value="">Select</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                                <option value="">Unknown</option>
                            </Select>
                        </div>
                        <div className="md:col-span-1">
                            <Input label="Gestational Age (Weeks)" />
                        </div>
                        <div className="md:col-span-1">
                            <Input label="EDD" />
                        </div>
                        <div className="col-span-4">
                            <Textarea label="Menstrual History" className='min-h-10' />
                        </div>
                        <p className='text-xs font-bold text-gray-500 mt-2 col-span-4'>Note : <span className='font-normal'>Please document Parity, Gravida, Number of children alive and deseased, Breastfeeding status. If has Breastfeeding child then HIV status of the child.</span></p>
                    </div>
                </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-whiteDark rounded-md mt-8">
                <h1 className='text-xl p-4 border-b font-normal'>Cervical Cancer History</h1>
                <div className="p-6">
                    <div className="md:grid md:grid-cols-4 space-y-4 md:space-y-0 md:gap-4">
                        <div className="md:col-span-2">
                            <Select label="Have You Screened for CaCx?" required >
                                <option value="">Select</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                                <option value="">Unknown</option>
                            </Select>
                        </div>
                        <div className="md:col-span-2">
                            <Input label="When last Screened" disabled/>
                        </div>
                        <div className="md:col-span-2">
                            <Select label="Result" disabled>
                                <option value="">Select</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                                <option value="">Unknown</option>
                            </Select>
                        </div>
                        <div className="md:col-span-2">
                            <Select label="Method Used" disabled >
                                <option value="">Select</option>
                                <option value="">Yes</option>
                                <option value="">No</option>
                                <option value="">Unknown</option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <List title='Contraceptive History' selectDisabled={true} />
            </div>

            <MultipleButton back='/medical-encounter' save='/medical-encounter' skip='/medical-encounter' />

        </div>
    );
};

export default NewRecord;