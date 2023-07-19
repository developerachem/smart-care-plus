"use client";
import Link from "next/link";
/* eslint-disable react/prop-types */
import headerCss from "./header.module.css";
import {
  BsCapsulePill,
  BsFillBagPlusFill,
  BsFillHeartPulseFill,
} from "react-icons/bs";

function ServiceDropdown({ className }) {
  return (
    <div className={className ? headerCss.activeDropdown : headerCss.dropdown}>
      <ul className={headerCss.ul}>
        <li>
          <Link href="/client">
            <BsCapsulePill size={20} /> Pharmacy Queue
          </Link>
        </li>
        <li>
          <Link href="/client">
            <BsFillHeartPulseFill /> Invesitgation Queue
          </Link>
        </li>
        <li>
          <Link href="/client">
            <BsFillBagPlusFill />
            Service Queue
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ServiceDropdown;
