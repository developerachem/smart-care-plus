"use client";
import React, { useState } from "react";
import inputCss from "./input.module.css";

const Textarea = ({ value, handler, name, label, required, error, className }) => {
  const [placeholder, setPlaceholder] = useState(false);

  const handleInputkeyUp = (e) => {
    if (e.target.value) {
      setPlaceholder(true);
    } else {
      setPlaceholder(false);
    }
  };

  return (
    <>
      <div className={inputCss.wraper}>
        <textarea
          className={`w-full ${inputCss.input} text-area ${className}`}
          onKeyUp={handleInputkeyUp}
          type="text"
          value={value}
          name={name}
          onChange={(e) => handler && handler(e)}
          required={required}
          rows="5"
          autoComplete="off"
        ></textarea>
        <div
          className={`inputFont ${
            placeholder || value ? inputCss.labelActive : inputCss.label
          } inner-div`}
        >
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </div>
      </div>
      {error && (
        <p className="text-sm" style={{ color: "red" }}>
          Required.
        </p>
      )}
    </>
  );
};

export default Textarea;
