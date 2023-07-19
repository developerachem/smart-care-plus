/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import inputCss from "./input.module.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = ({ value, handler, name, label, required, error , disabled}) => {
  const [placeholder, setPlaceholder] = useState(true);
  const [test, setTest] = useState("");

  return (
    <>
      <label htmlFor="date" className={`${inputCss.wraper} ${disabled ? 'bg-gray-200 dark:bg-gray-700' : ''}`}>
        <ReactDatePicker
          id="date"
          disabled={disabled}
          selected={test}
          onChange={(date) => setTest(date)}
          placeholderText="dd/mm/yyyy"
          autoComplete="off"
        />
        <div
          className={`inputFont ${
            placeholder || value ? inputCss.labelActive : inputCss.label
          }`}
        >
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </div>
      </label>
      {error && (
        <p className="text-sm" style={{ color: "red" }}>
          Required.
        </p>
      )}
    </>
  );
};

export default Date;
