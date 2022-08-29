import { useState } from "react";
import './styles.css'

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
      {errorMessage&&<span className="form-error" data-testid="error-msg">{errorMessage}</span>}
    </div>
  );
};

export default FormInput;