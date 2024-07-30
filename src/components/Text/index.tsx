import React from "react";
import "./style.scss";

type TextProps = React.ComponentProps<"span">;

const Text: React.FC<TextProps> = ({ children }) => {
  return <span className="pop-text">{children}</span>;
};

export default Text;
