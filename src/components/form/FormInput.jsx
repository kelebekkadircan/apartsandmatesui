/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import "./formInput.scss";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label style={{ fontSize: "1.3rem" }}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
