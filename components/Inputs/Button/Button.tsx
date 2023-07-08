import React from "react";
import "./Button.css";

type ButtonProps = {
  label?: string;
  handleClick?: () => void;
  variant?: string;
  active?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { label, handleClick, variant, active } = props;
  return (
    <button
      className={`button button--${variant}`}
      onClick={handleClick}
      disabled={active}
    >
      {label && label}
    </button>
  );
};

export default Button;
