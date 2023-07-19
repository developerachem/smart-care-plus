"use client";
/* eslint-disable react/prop-types */
import headerCss from "./header.module.css";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";

function UserDropdown({ className }) {
  return (
    <div className={className ? headerCss.activeDropdown : headerCss.dropdown}>
      <ul className={headerCss.ul}>
        <div className={headerCss.userInfo}>
          <h1>System Administrator</h1>
          <p>Admin</p>
        </div>
        <li>
          <Link href="/client">
            <IoSettingsOutline /> Facility Setting
          </Link>
        </li>
        <li>
          <Link href="/client">
            <FaUserEdit /> Edit Profile
          </Link>
        </li>
        <li>
          <Link href="/client">
            <RiLockPasswordLine /> Change Password
          </Link>
        </li>
        <li>
          <Link href="/">
            <IoLogOutOutline size={22} /> Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
