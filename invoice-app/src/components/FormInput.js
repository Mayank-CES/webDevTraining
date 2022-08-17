import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input className="form-input-vals"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          // inputProps.name === "confirmPassword" && 
          setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="form-error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;