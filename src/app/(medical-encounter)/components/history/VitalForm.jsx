import Date from '@/components/ui/form-element/Date';
import Input from '@/components/ui/form-element/Input';
import Select from '@/components/ui/form-element/Select';
import TextareaField from '@/components/ui/form-element/TextareaField';
import Time from '@/components/ui/form-element/Time';
import Link from 'next/link';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const VitalForm = () => {
    return (
        <div>
            <div className="p-4 mt-6 rounded-md"  style={{background: 'var(--white)'}}>
                <h1 className='text-xl font-normal  mb-3 '>Patient Information</h1>
                <div className="grid md:grid-cols-6 gap-4 gap-y-4">
                    <div className="md:col-span-3">
                        <Date required label="Last Tested Date" />
                    </div>
                    <div className="md:col-span-3">
                        <Time required label="Time" />
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Weight (kg)" />
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Height (cm)" />
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Temperature (c)" />
                    </div>
                    <div className="md:col-span-1">
                        <Input required label="Systolic (mmHg)" />
                    </div>
                    <div className="md:col-span-2">
                    <Select label="Systolic Unrecordable" required>
                        <option value="">Select</option>
                        <option value="">Select</option>
                    </Select>
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Diastolic (mmHg)" />
                    </div>
                    <div className="md:col-span-1">
                    <Select label="Diastolic Unrecordable" required>
                        <option value="">Select</option>
                        <option value="">Select</option>
                    </Select>
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Pulse Rate (bpm)" />
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Respiratory Rate (bpm)" />
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Oxygen Saturation (%)" />
                    </div>
                    <div className="md:col-span-1">
                        <Input required label="MUAC" />
                    </div>
                    <div className="md:col-span-5">
                        <Input required label="MUAC Score" />
                    </div>
                    <div className="md:col-span-2">
                        <Input required label="Abdominal Circumference (cm)" />
                    </div>
                    <div className="md:col-span-2">
                        <Input disabled={true} required label="Head Circumference (cm)" />
                    </div>
                    <div className="md:col-span-2">
                        <Input disabled={true} required label="HC Score" />
                    </div>
                    <div className="md:col-span-6">
                        <TextareaField label="Note" className='h-[54px]' required />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-3">
                    <Link href='/medical-encounter' className={`flex items-center w-fit px-3 py-2 text-xl rounded-lg my-4 text-white bg-buttonColor hover:bg-buttonColorHover transition duration-300`}>
                        <BsCheck2Circle size={20} className="mr-2"/>
                        <p>Save</p> 
                    </Link>
                    <Link href='/medical-encounter' className={`flex items-center w-fit px-4 py-2 text-xl rounded-lg my-4 text-white bg-gray-500 hover:bg-gray-600 transition duration-300`}>
                        <IoArrowBackCircleOutline size={20} className="mr-2"/>
                        <p>Back</p> 
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VitalForm;