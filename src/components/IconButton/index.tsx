import React from "react";
import "./style.scss";

type IconButtonProps = {
  shape?: "square" | "rounded";
  size?: "sm" | "md" | "lg";
  shadow?: "shadow" | "none";
  icon: React.ReactElement;
} & React.ComponentProps<"button">;

const IconButton: React.FC<IconButtonProps> = ({
  shape = "square",
  size = "md",
  shadow = "shadow",
  icon,
  ...props
}) => {
  const buttonClass = `pop-icon-btn ${shape} size--${size} ${shadow}`;

  return (
    <button className={buttonClass} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
