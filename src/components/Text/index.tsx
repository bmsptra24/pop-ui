import React from "react";
import "./style.scss";

type TextProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "xxxxl";
} & React.ComponentProps<"span">;

const Text: React.FC<TextProps> = ({ children, size = "md" }) => {
  const className = `pop-text ${size}`;
  return <span className={className}>{children}</span>;
};

export default Text;
