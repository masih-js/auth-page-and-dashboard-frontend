"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "@/components/Global/Input/Input";
import styles from "@/app/auth/auth.module.scss";

export interface PhoneInputProps {
  /** the RHF registration props for “phone” */
  registration: UseFormRegisterReturn;
  /** validation error message, if any */
  error?: string;
}

export default function PhoneInput({ registration, error }: PhoneInputProps) {
  return (
    <Input
      id={registration.name}
      type="tel"
      placeholder="09xxxxxxxxx"
      className={styles.input}
      inputMode="numeric" // mobile: show numeric keypad
      pattern="[0-9]*" // hint: only digits
      {...registration} // onChange, onBlur, name, ref
      error={error}
      onKeyDown={(e) => {
        // allow digits + backspace/arrow/delete only
        if (
          !/[0-9]/.test(e.key) &&
          e.key !== "Backspace" &&
          e.key !== "ArrowLeft" &&
          e.key !== "ArrowRight" &&
          e.key !== "Delete"
        ) {
          e.preventDefault();
        }
      }}
    />
  );
}
