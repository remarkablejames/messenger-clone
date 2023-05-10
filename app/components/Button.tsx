"use client";

import React, { use } from "react";
import clsx from "clsx";

interface ButtonProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  fullWidth,
  children,
  type,
  disabled,
  loading,
  onClick,
  secondary,
  danger,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2
        focus-visible: outline-offset-2`,
        disabled && "opacity-50 cursor-not-allowed",
        fullWidth && "w-full",
        secondary && "bg-gray-900 text-gray-100",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600 text-gray-100",
        !secondary &&
          !danger &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600 text-gray-100"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
