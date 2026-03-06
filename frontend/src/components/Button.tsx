import type { ButtonHTMLAttributes, ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button = (props: TButtonProps) => {
  const { children, className = "", onClick, type = "button" } = props;

  return (
    <button
      className={`cursor-pointer ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
