"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import style from "./activeLink.module.css";

function ActiveLink({ href, children , className , icon}) {
  const pathname = usePathname()
  const isActive = pathname === href;

  return (
    <div>
      <Link href={href} className={`${ isActive ? "activeLink" : ""} ${className}`}>
        {icon && <span className={`${style.icon} mr-1`}>{icon}</span>}
        {children}
      </Link>
    </div>
  );
}

export default ActiveLink;
