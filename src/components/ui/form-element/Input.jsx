"use client";

import React, { useState } from "react";
import inputCss from "./input.module.css";

const Input = ({ value, handler, name, label, required, error , disabled}) => {
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
      <div className={`${inputCss.wraper} ${disabled ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
        <input
          className={inputCss.input}
          onKeyUp={handleInputkeyUp}
          type="text"
          value={value}
          name={name}
          onChange={handler}
          required={required}
          disabled={disabled}
          autoComplete="off"
        />
        <div
          className={`inputFont ${
            placeholder || value ? inputCss.labelActive : inputCss.label
          }`}
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

export default Input;
