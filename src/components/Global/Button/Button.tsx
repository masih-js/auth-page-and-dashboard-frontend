"use client";

import React, { forwardRef } from "react";
import styles from "./Button.module.scss";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className = "", disabled, ...props }, ref) => (
  <button
    ref={ref}
    className={`${styles.button} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";
export default Button;
