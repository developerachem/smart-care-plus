/* eslint-disable react/prop-types */
/* eslint-disable no-dupe-else-if */
"use client";
import { useState } from "react";
import inputCss from "./input.module.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { InputMask } from "primereact/inputmask";

const NRC = ({ state, setState, required, error }) => {
  const [placeholder, setPlaceholder] = useState(false);

  const handleClick = () => {
    if (!state) {
      setPlaceholder(true);
    }
  };

  const handleBlur = () => {
    if (!state) {
      setPlaceholder(false);
    }
  };

  return (
    <>
      <div className={inputCss.wraper}>
        <InputMask
          value={state}
          onChange={(e) => setState && setState(e.target.value)}
          onClick={handleClick}
          onBlur={handleBlur}
          mask="999999/99/9"
          className="w-full"
        />
        <p className={placeholder ? inputCss.labelActive : inputCss.label}>
          NRC {required && <span style={{ color: "red" }}>*</span>}
        </p>
      </div>
    </>
  );
};

export default NRC;
