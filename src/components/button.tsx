import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { classNames } from "../utils/class-names";
import Loader from "./loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    className,
    children,
    active,
    loading = false,
    disabled = false,
    ...rest
  } = props;

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      aria-pressed={active}
      className={
        classNames(
          "h-11 md:h-12 px-7 mt-4 bg-pink-700 text-white rounded-xl py-2 transform-none border-0 border-transparent normal-case",
          className ?? null
        )
      }
      {...rest}
    >
      {children}
      {loading && <Loader />}
    </button>
  );
});

export default Button;
