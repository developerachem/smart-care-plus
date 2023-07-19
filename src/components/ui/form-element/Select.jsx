"use client";
import React, { useState } from "react";
import inputCss from "./input.module.css";

const Select = ({
  value,
  handler,
  label,
  required,
  error,
  children,
  style,
  disabled
}) => {
  return (
    <>
      <div className={`${inputCss.wraper} ${disabled ? 'bg-gray-200 dark:bg-gray-700' : ''}`} style={style}>
        <select name="" id=""
          disabled={disabled}>
          {children}
        </select>
        <div
          className={`inputFont ${
            label || value ? inputCss.labelActive : inputCss.label
          } `} 
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

export default Select;
