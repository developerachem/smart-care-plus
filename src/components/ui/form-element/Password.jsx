"use client";
import { useState } from "react";
import inputCss from "./input.module.css";
import { Eye, EyeOff } from "react-feather";

const Password = ({ className, required, label }) => {
  const [placeholder, setPlaceholder] = useState(false);
  const [view, setView] = useState(false);

  const handleInputkeyUp = (e) => {
    if (e.target.value) {
      setPlaceholder(true);
    } else {
      setPlaceholder(false);
    }
  };
  return (
    <>
      <div className={`${className} ${inputCss.wraper}`}>
        <div style={{ width: "100%" }}>
          <input
            className={inputCss.input}
            onKeyUp={handleInputkeyUp}
            type={view ? "text" : "password"}
            style={{ paddingRight: "45px" }}
            autoComplete="off"
          />
          <div className={placeholder ? inputCss.labelActive : inputCss.label}>
            {label} {required && <span style={{ color: "red" }}>*</span>}
          </div>
        </div>
        <div className={inputCss.eye}>
          {view ? (
            <EyeOff color="#747d8c" onClick={() => setView(false)} />
          ) : (
            <Eye color="#747d8c" onClick={() => setView(true)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Password;
