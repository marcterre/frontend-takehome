import "./Button.styles.scss";

type ButtonProps = {
  label?: string | JSX.Element;
  handleClick?: () => void;
  variant?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  form?: string;
  style?: React.CSSProperties;
};

export const Button = (props: ButtonProps) => {
  const { label, handleClick, variant, disabled, type, form, style } = props;
  return (
    <button
      className={`button button--${variant}`}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      form={form}
      style={style}
    >
      {label && label}
    </button>
  );
};

export default Button;
