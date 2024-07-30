import React from "react";
import "./style.scss";

type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
} & React.ComponentProps<"input">;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  ...props
}) => {
  return (
    <label className="pop-radio-btn">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        className="pop-radio-btn__input"
        {...props}
      />
      <span className={`pop-radio-btn__control ${checked && "active"} rounded`}>
        {checked && <span className="active-poin rounded"></span>}
      </span>
      {label}
    </label>
  );
};

export default RadioButton;
