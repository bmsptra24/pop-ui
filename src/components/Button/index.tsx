import React from "react";
import "./style.scss";

type ButtonProps = {
  shape?: "square" | "rounded";
  size?: "sm" | "md" | "lg";
  shadow?: "shadow" | "none";
} & React.ComponentProps<"button">;

const Button: React.FC<ButtonProps> = ({
  children,
  shape = "square",
  size = "md",
  shadow = "shadow",
  ...props
}) => {
  const buttonClass = `pop-btn ${shape} size--${size} ${shadow}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
