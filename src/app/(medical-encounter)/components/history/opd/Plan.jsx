"use client"
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import NewRecord from './plan/NewRecord';
import PastRecord from './tabs/presenting/PastRecord';

const Plan = () => {

    const [ToggleState, setToggleState] = useState(1);
    const [activeTab, setActiveTab] = useState("nrc");
    const handleTabActive = (e, tab) => {
        setActiveTab(tab);
        };
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>
            <div className="text-sm font-medium breadcrumbs overflow-hidden mt-5">
                <ul>
                    <li className=' text-gray-500'>Complaints & Histories</li> 
                    <li className='text-gray-500'> <a>Gyn & Obs</a></li> 
                    <li className='text-gray-500'>Paediatrics</li>
                    <li className='text-gray-500'>Examination & Diagnosis</li>
                    <li className='text-buttonColor hover:text-buttonColorHover'><a href="#"> Plan</a></li>
                </ul>
            </div>

            <div className="my-4">
            <Tabs>
                <TabList>
                    <div className="btn-group grid grid-cols-2 ">
                        <Tab
                            style={{
                            backgroundColor: "var(--gray)",
                            borderColor: "var(--blueColor)",
                            }}
                            className={`btn h-auto  text-buttonColor dark:text-primary hover:bg-buttonColorHover ${ activeTab === "advance" && "tab_active"
                            }`}
                        >
                            <p className='leading-5 py-2 text-sm font-normal'>
                                New Record
                            </p>
                        </Tab>
                        <Tab
                            style={{
                                backgroundColor: "var(--gray)",
                                borderColor: "var(--blueColor)",
                                }}
                                className={`btn h-auto text-buttonColor dark:text-primary  ${ activeTab === "advance" && "tab_active"
                                }`}
                            >
                                <p className='leading-5 py-2 text-sm font-normal'>
                            Past Record
                            </p>
                        </Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <NewRecord/>
                </TabPanel>
                <TabPanel>
                    <PastRecord />
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Plan;