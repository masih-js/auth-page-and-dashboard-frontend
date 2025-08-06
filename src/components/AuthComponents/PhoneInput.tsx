"use client";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import Input from "@/components/Global/Input/Input";
import styles from "@/app/auth/auth.module.scss";

export interface PhoneInputProps {
  registration: UseFormRegisterReturn;
  error?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ registration, error }, forwardedRef) => {
    const { ref: formRef, ...restRegistration } = registration;

    const internalRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => internalRef.current as HTMLInputElement,
    );

    const combinedRef = (el: HTMLInputElement) => {
      internalRef.current = el;
      formRef(el);
    };

    return (
      <Input
        ref={combinedRef}
        id={registration.name}
        type="tel"
        placeholder="09xxxxxxxxx"
        className={styles.input}
        inputMode="numeric"
        pattern="[0-9]*"
        {...restRegistration}
        error={error}
        onKeyDown={(e) => {
          const allowed = [
            "Backspace",
            "ArrowLeft",
            "ArrowRight",
            "Delete",
            "Enter",
          ];
          if (!/[0-9]/.test(e.key) && !allowed.includes(e.key)) {
            e.preventDefault();
          }
        }}
      />
    );
  },
);

PhoneInput.displayName = "PhoneInput";
export default PhoneInput;
