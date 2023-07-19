import Date from '@/components/ui/form-element/Date';
import Input from '@/components/ui/form-element/Input';
import Select from '@/components/ui/form-element/Select';
import TextareaField from '@/components/ui/form-element/TextareaField';
import Link from 'next/link';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

const FormHTS = () => {
    return (
        <div>
            <div className="p-4 mt-6 rounded-md"  style={{background: 'var(--white)'}}>
                <h1 className='text-xl font-normal  mb-3 '>Pretest Assessment</h1>
                <div className="grid md:grid-cols-3 gap-4 gap-y-4">
                    <Select label="Client Type" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Select label="Visit Type" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Select label="Service Point" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Select label="Source of Client" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Select label="Reason for Testing" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Date required label="Last Tested Date" />
                    <div className="" disabled={true}>
                    <Select disabled={true} label="Last Test Result" >
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    </div>
                    <Date required label="Partner's Last Test Date" />
                    <Select disabled={true} label="Partner's HIV Status">
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Select label="Patient Counselled" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Select label="Consent Obtained" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <Select label="Reason for Note Testing" required>
                        <option value="">--Select--</option>
                        <option value="">One</option>
                        <option value="">Two</option>
                    </Select>
                    <div className="md:col-span-2">
                        <TextareaField label="Other Reasons" className='h-[54px]' required />
                    </div>
                    <Input required disabled={true} label="Test No" />
                </div>
            </div>

            <div className="p-4 mt-6"  style={{background: 'var(--white)'}}>
                <h1 className='text-xl font-normal  mb-3 '>Pretest Assessment</h1>
                <div className="grid md:grid-cols-6 gap-4 gap-y-4">
                    <div className="md:col-span-2">
                    <Select disabled={true} label="Determine" required >
                        <option value="">Select</option>
                    </Select>
                    </div>
                    <div className="md:col-span-2">
                    <Select disabled={true} label="Bioline" required>
                        <option value="">Select</option>
                    </Select>
                    </div>
                    <div className="md:col-span-2">
                    <Select disabled={true} label="HIV Type" required>
                        <option value="">Select</option>
                    </Select>
                    </div>
                    <div className="md:col-span-3">
                    <Select disabled={true} label="DNA PCR Sample Collected" required>
                        <option value="">Select</option>
                    </Select>
                    </div>
                    <div className="md:col-span-3">
                    <Select disabled={true}>
                        <option value="">DNA PCR Sample Collection Date</option>
                    </Select>
                    </div>
                    <div className="md:col-span-3">
                    <Select disabled={true} label="Client Received Results" required>
                        <option value="">Select</option>
                    </Select>
                    </div>
                    <div className="md:col-span-3">
                    <Select disabled={true} label="Consent to Receive SMS Alerts" required>
                        <option value="">Select</option>
                    </Select>
                    </div>
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
    );
};

export default FormHTS;