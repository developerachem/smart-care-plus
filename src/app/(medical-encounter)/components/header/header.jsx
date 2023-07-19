"use client";
import { Filter, Moon, Sun } from "react-feather";
import { BiUserCircle } from "react-icons/bi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { AiOutlineCaretDown } from "react-icons/ai";
import UserDropdown from "./user-dropdown";
import headerCss from "./header.module.css";
import { useEffect, useRef, useState } from "react";
import ServiceDropdown from "./service-dropdown";
import Link from "next/link";
import { BsList } from "react-icons/bs";

function Header() {
  const [mode, setMode] = useState("light");
  const [userInfo, setUserInfo] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const windowClick = (e) => {
      if (!ref.current.contains(e.target)) {
        setUserInfo(false);
        setServiceDropdown(false);
      }
    };
    document.addEventListener("mousedown", windowClick);
  }, [userInfo]);
  useEffect(() => {
    document.querySelector("body").className = mode;
  }, [mode]);

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <div
        className="w-full px-5 shadow-lg z-50 flex justify-between items-center sticky top-0"
        style={{ backgroundColor: "var(--white)" }}
      >
        <div className="flex">
          <label htmlFor="amir" className="cursor-pointer flex items-center" style={{ color: "var(--primary)", zIndex: "99999" }}>
            <BsList size={40} />
          </label>
          <div className="ms-8">
            <h1
              className="text-3xl font-bold "
              style={{ color: "var(--primary)" }}
            >
              Smart Care Plus
            </h1>
            <p className="text-md font-bold " style={{ color: "var(--primary)" }}>
              Chankomo Rural Health Center
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <Link
            style={{ color: "var(--primary)" }}
            href="/"
            className="flex items-center gap-1 text-sm"
          >
            <Filter size={17} /> Client Search
          </Link>
          <div className={headerCss.dropdownParent}>
            <button
              style={{ color: "var(--primary)" }}
              className="flex items-center gap-1 text-sm"
              onClick={() => setServiceDropdown(!serviceDropdown)}
              ref={ref}
            >
              <TbHeartRateMonitor size={20} /> Client Search
              <AiOutlineCaretDown size={11} />
            </button>
            <ServiceDropdown className={serviceDropdown} />
          </div>
          <div className={headerCss.dropdownParent}>
            <button
              style={{ color: "var(--primary)" }}
              className="flex items-center gap-1 text-sm"
              onClick={() => setUserInfo(!userInfo)}
              ref={ref}
            >
              <BiUserCircle size={20} className="pointer_none" /> Facility Admin
              <AiOutlineCaretDown size={11} className="pointer_none" />
            </button>
            <UserDropdown className={userInfo} />
          </div>
          <button onClick={handleMode}>
            {mode === "light" ? (
              <Moon size={25} color="#000" />
            ) : (
              <Sun size={25} color="#fff" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
