"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schemas/loginSchema";
import PhoneInput from "@/components/AuthComponents/PhoneInput";
import Button from "@/components/Global/Button/Button";
import styles from "@/app/auth/auth.module.scss";
import { useAuth } from "@/hooks/useAuth";

export default function AuthForm() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange", // validate on every input change
    reValidateMode: "onChange", // re-validate on change after an error
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data.phone);
    } catch (err) {
      console.error(err);
      // surface a generic form error if fetch fails
      setError("phone", {
        type: "server",
        message: "Login failed. Please try again.",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <PhoneInput
        registration={register("phone")}
        error={errors.phone?.message}
      />

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
