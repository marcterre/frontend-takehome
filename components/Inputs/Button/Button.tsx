import React from "react";
import "./Button.css";

type ButtonProps = {
  label?: string;
  handleClick?: () => void;
  variant?: string;
  active?: boolean;
  type: "button" | "submit" | "reset";
  form?: string;
};

export const Button = (props: ButtonProps) => {
  const { label, handleClick, variant, active, type, form } = props;
  return (
    <button
      className={`button button--${variant}`}
      onClick={handleClick}
      disabled={active}
      type={type}
      form={form}
    >
      {label && label}
    </button>
  );
};

export default Button;
