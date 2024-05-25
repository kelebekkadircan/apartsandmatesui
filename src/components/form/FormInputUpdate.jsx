/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import "./formInputUpdate.scss";

const FormInputUpdate = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, defaultValue, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  console.log(inputProps.name);
  console.log(defaultValue[inputProps.name]);
  return (
    <div className="formInputUpdate">
      <label style={{ fontSize: "1.3rem" }}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
        defaultValue={defaultValue[inputProps?.name]}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInputUpdate;
