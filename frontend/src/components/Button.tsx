import type { ButtonHTMLAttributes, ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean
};

const Button = (props: TButtonProps) => {
  const { children, className = "", onClick, type = "button", disabled } = props;

  return (
    <button
      className={`cursor-pointer ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
