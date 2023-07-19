"use client"
import ActiveLink from '@/components/ui/active-link/ActiveLink';
import DropdownMenu from '@/components/ui/dropdown/Dropdown';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaDesktop, FaTable, FaAngleRight, FaTh, FaCogs, FaInfoCircle , FaGrid } from 'react-icons/fa';
import { BsGrid } from 'react-icons/bs';
import { GoDot } from 'react-icons/go';
import style from '@/components/ui/active-link/activeLink.module.css'
import { BiX } from 'react-icons/bi';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    };

    return (
    <div className="">
        <input id='amir' className=' hidden' type="checkbox" onClick={toggleSidebar} />
    <div
    className={` ${isSidebarOpen ? 'absolute left-[-300px] sidebarOpen' : 'sidebarClose'} min-w-[267px] py-4 left-0 top-0 overflow-y-auto h-[100vh]`}
    style={{ background: 'var(--white)', boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)' ,  }}
    >
    <ul>
        <li>
            <ActiveLink href='/medical-encounter' className={style.Link} icon={<BsGrid />} >Vital</ActiveLink>
        </li>
        <li>
            <ActiveLink href='/medical-encounter' className={style.Link}  icon={<BsGrid />} >HTS</ActiveLink>
        </li>
        <DropdownMenu title="Medical Encounter (OPD)" height="" className={style.Link}  icon={<BsGrid />} >
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    History
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Complaints & Histories
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Gyn & Obs Histories
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Examination & Diagnosis
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Plan
                </ActiveLink>
            </li>
        </DropdownMenu>
        <DropdownMenu title="PEP" height="" className={style.Link}  icon={<BsGrid />} >
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    History
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Complaints & Histories
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Gyn & Obs Histories
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Examination & Diagnosis
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Plan
                </ActiveLink>
            </li>
        </DropdownMenu>
        <DropdownMenu title="PrEP" height="" className={style.Link}  icon={<BsGrid />} >
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    History
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Complaints & Histories
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Gyn & Obs Histories
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Examination & Diagnosis
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/medical-encounter" className={style.Link} icon={<GoDot />}>
                    Plan
                </ActiveLink>
            </li>
        </DropdownMenu>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Pain Scaling Tool
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Investigation
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Surgery
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Referrals
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Covax
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Covid
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Birth Record
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Death Record
            </ActiveLink>
        </li>

        
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Surgery
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Referrals
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Covax
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Covid
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Birth Record
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/medical-encounter" className={style.Link} icon={<BsGrid />}>
                Death Record
            </ActiveLink>
        </li>
    </ul>
    </div>
    </div>
  );
};

export default Sidebar;
