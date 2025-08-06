"use client";

import React from "react";
import { useAuthForm } from "@/hooks";
import AuthFormView from "./AuthFormView";

export default function AuthForm() {
  const { register, errors, isSubmitting, isValid, onSubmit } = useAuthForm();

  return (
    <AuthFormView
      registration={register("phone")}
      error={errors.phone?.message}
      isSubmitting={isSubmitting}
      isValid={isValid}
      onSubmit={onSubmit}
    />
  );
}
