"use client";

import React, { forwardRef } from "react";
import styles from "./Input.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional label above the input */
  label?: string;
  /** Optional error message shown below */
  error?: string;
}

/**
 * A styled text input with optional label and error message.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <label className={styles.label} htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={props.id}
        className={`${styles.input} ${error ? styles.invalid : ""}`}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  ),
);

Input.displayName = "Input";
export default Input;
