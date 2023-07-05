import React from "react";
import "./Button.css";

type ButtonProps = {
  label?: string;
  handleClick?: () => void;
  variant?: string;
};

export const Button = (props: ButtonProps) => {
  const { label, handleClick, variant } = props;
  return (
    <button className={`button button--${variant}`} onClick={handleClick}>
      {label && label}
    </button>
  );
};

export default Button;
