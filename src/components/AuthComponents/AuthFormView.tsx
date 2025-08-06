"use client";

import React from "react";
import PhoneInput from "./PhoneInput";
import { Button } from "@/components/Global";
import styles from "@/app/auth/auth.module.scss";
import type { UseFormRegisterReturn } from "react-hook-form";

interface AuthFormViewProps {
  registration: UseFormRegisterReturn;
  error?: string;
  isSubmitting: boolean;
  isValid: boolean;
  onSubmit: () => void;
}

export default function AuthFormView({
  registration,
  error,
  isSubmitting,
  isValid,
  onSubmit,
}: AuthFormViewProps) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <PhoneInput registration={registration} error={error} />

      <Button
        type="submit"
        className={styles.signInButton}
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "Logging in…" : "Login"}
      </Button>
    </form>
  );
}
