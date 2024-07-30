import React from "react";
import "./style.scss";

// ! Implement size variants

type InputProps = {
  shape?: "square" | "rounded";
  size?: "sm" | "md" | "lg";
  shadow?: "shadow" | "none";
} & Omit<React.ComponentProps<"input">, "size">;

const Input: React.FC<InputProps> = ({
  shape = "square",
  size = "md",
  shadow = "shadow",
  ...props
}) => {
  const InputClass = `pop-input ${shape} ${shadow} size--${size}`;

  return <input className={InputClass} {...props} />;
};

export default Input;
