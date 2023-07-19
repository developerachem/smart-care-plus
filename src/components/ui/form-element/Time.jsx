/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import React, { useState } from "react";
import inputCss from "./input.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Time = ({ value, handler, name, label, required, error }) => {
  const [placeholder, setPlaceholder] = useState(true);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <label htmlFor="date" className={inputCss.wraper}>
        {/* <ReactDatePicker
          id="date"
          selected={test}
          onChange={(date) => setTest(date)}
          placeholderText="dd/mm/yyyy"
          autoComplete="off"
        /> */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
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

export default Time;
