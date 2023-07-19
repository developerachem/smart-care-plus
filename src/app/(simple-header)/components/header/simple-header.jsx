"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather";

function SimpleHeader() {
  const [mode, setMode] = useState("light");
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
        className="w-full px-5 py-3 shadow-lg z-50 flex justify-between items-center sticky top-0"
        style={{ backgroundColor: "var(--white)" }}
      >
        <div>
          <h1
            className="text-3xl font-bold "
            style={{ color: "var(--primary)" }}
          >
            Smart Care Plus
          </h1>
        </div>
        <button onClick={handleMode}>
          {mode === "light" ? (
            <Moon size={30} color="#000" />
          ) : (
            <Sun size={30} color="#fff" />
          )}
        </button>
      </div>
    </>
  );
}

export default SimpleHeader;
