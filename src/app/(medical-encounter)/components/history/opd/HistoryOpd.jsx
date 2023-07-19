"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Presenting from './tabs/presenting/NewRecord';
import PastRecord from './tabs/presenting/PastRecord';
import ReviewNewRecord from './tabs/review/NewRecord';
import PastNewRecord from './tabs/past-medical-history/NewRecord';
import TBNewRecord from './tabs/tb-constitutional/NewRecord';
import ChronicNewRecord from './tabs/chronic/NewRecord';
import AllergiesNewRecord from './tabs/allergies/NewRecord';
import FamilyNewRecord from './tabs/family&School/NewRecord';
const HistoryOpd = () => {

    const [ToggleState, setToggleState] = useState(1);
    const [activeTab, setActiveTab] = useState("nrc");
    const handleTabActive = (e, tab) => {
        setActiveTab(tab);
        };
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        ToggleState === index ? className : "";

    return (
        <div>
            <div className="text-sm font-medium breadcrumbs overflow-hidden mt-5">
                <ul>
                    <li><a className='text-buttonColor hover:text-buttonColorHover'>Complaints & Histories</a></li> 
                    <li className='text-gray-500'>Gyn & Obs</li> 
                    <li className='text-gray-500'>Paediatrics</li>
                    <li className='text-gray-500'>Examination & Diagnosis</li>
                    <li className='text-gray-500'>Plan</li>
                </ul>
            </div>

            <div className=" mt-4">
                    <Tabs>
                    <div className="bg-white dark:bg-whiteDark overflow-x-auto overflow-y-hidden p-5 rounded-md">
                        <TabList>
                        <div className="btn-group grid grid-cols-7 min-w-[1080px] ">
                            <Tab
                                style={{
                                backgroundColor: "var(--gray)",
                                borderColor: "var(--blueColor)",
                                }}
                                className={`btn h-auto  text-buttonColor dark:text-primary hover:bg-buttonColorHover ${ activeTab === "advance" && "tab_active"
                                }`}
                            >
                                <p className='leading-5 py-2 text-sm font-normal'>
                                    Presenting Complaints
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
                                TB & Constitutional Symptoms
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
                                Review of Systems
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
                                Past Medical Histories
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
                                Chronic / Non Chronic Conditions
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
                                Allergies
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
                                Family & Social
                                </p>
                            </Tab>
                        </div>
                        </TabList>

                    </div>
                    <div className="mt-8">
                        <div className="">
                            {/* First Tab */}
                            <TabPanel>
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
                                        <Presenting/>
                                    </TabPanel>
                                    <TabPanel>
                                        <PastRecord/>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>

                            {/* Second Tab */}
                            <TabPanel>
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
                                        <TBNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <PastRecord/>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>

                            {/* Third Tab */}
                            <TabPanel>
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
                                        <ReviewNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <PastRecord/>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>

                            {/* Fourth Tab */}
                            <TabPanel>
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
                                        <PastNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <PastRecord/>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>

                            {/* Fifth Tab */}
                            <TabPanel>
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
                                        <ChronicNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <PastRecord/>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>

                            {/* Sixth Tab */}
                            <TabPanel>
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
                                        <AllergiesNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <PastRecord/>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>

                            {/* Seven Tab */}
                            <TabPanel>
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
                                        <FamilyNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <PastRecord/>
                                    </TabPanel>
                                </Tabs>
                            </TabPanel>
                            
                        </div>
                    </div>
                </Tabs>
            </div>

        </div>
    );
};

export default HistoryOpd;