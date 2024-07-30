import React from "react";
import "./style.scss";

type CheckboxProps = {
  shape?: "square" | "rounded";
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  shape = "square",
  checked,
  onChange,
  ...props
}) => {
  const classes = `pop-checkbox__control ${shape} ${checked && "active"}`;

  return (
    <label className="pop-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="pop-checkbox__input"
        {...props}
      />
      <span className={`${classes} `}>
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
