"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/schemas/loginSchema";
import { useAuth } from "@/hooks";
import { setFormError } from "@/utils/formUtils";
export function useAuthForm() {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login(data.phone);
    } catch (err: unknown) {
      console.error("Login error:", err);
      setFormError(setError, "phone", err, "Login failed. Please try again.");
    }
  });

  return {
    register,
    errors,
    isSubmitting,
    isValid,
    onSubmit,
  };
}
