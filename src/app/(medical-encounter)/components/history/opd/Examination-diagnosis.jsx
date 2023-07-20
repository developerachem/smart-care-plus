import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ExaminationNewRecord from './examination/general-assessment/NewRecord';
import PastRecord from './tabs/presenting/PastRecord';
import SystemPastRecord from './gyn-obs/PastRecord';
import SystemExaminationNewRecord from './examination/system-examination/NewRecord';
import GlasgowComaNewRecord from './examination/glasgow-coma-scale/NewRecord';
import DiagnosisNewRecord from './examination/diagnosis/NewRecord';

const ExaminationDiagnosis = () => {

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
                    <li className='text-gray-500'>Complaints & Histories</li> 
                    <li className='text-gray-500'>Gyn & Obs</li> 
                    <li className='text-gray-500'>Paediatrics</li>
                    <li className='text-buttonColor hover:text-buttonColorHover'> <a href=""> Examination & Diagnosis</a></li>
                    <li className='text-gray-500'>Plan</li>
                </ul>
            </div>

            <div className=" mt-4">
                    <Tabs>
                    <div className="bg-white dark:bg-whiteDark overflow-x-auto overflow-y-hidden p-5 rounded-md">
                        <TabList>
                        <div className="btn-group grid grid-cols-4 min-w-[1080px] ">
                            <Tab
                                style={{
                                backgroundColor: "var(--gray)",
                                borderColor: "var(--blueColor)",
                                }}
                                className={`btn h-auto  text-buttonColor dark:text-primary hover:bg-buttonColorHover ${ activeTab === "advance" && "tab_active"
                                }`}
                            >
                                <p className='leading-5 py-2 text-sm font-normal'>
                                    General Assessment
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
                                    System Examination
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
                                    Glasgow Coma Scale
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
                                    Diagnosis
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
                                        <div className="btn-group grid grid-cols-2">
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
                                        <ExaminationNewRecord/>
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
                                        <SystemExaminationNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <SystemPastRecord/>
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
                                        <GlasgowComaNewRecord/>
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
                                        <DiagnosisNewRecord/>
                                    </TabPanel>
                                    <TabPanel>
                                        <SystemPastRecord/>
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

export default ExaminationDiagnosis;