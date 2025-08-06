"use client";

import React from "react";
import Logo from "@/components/Global/Logo/Logo";
import AuthForm from "@/components/AuthComponents/AuthForm";
import styles from "./auth.module.scss";

export default function AuthPage() {
  return (
    <>
      <div className={styles.logo}>
        <Logo
          src="/images/logo.webp"
          width={128}
          height={128}
          alt="Decamond App"
        />
      </div>

      <h1 className={styles.title}>Sign in to your account</h1>

      <AuthForm />

      <p className={styles.footer}>
        Not a member? <a href="#">Start a 14-day free trial</a>
      </p>
    </>
  );
}
