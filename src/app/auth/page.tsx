"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo/Logo"; // or wherever your logo lives
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import styles from "./auth.module.scss";

export default function AuthPage() {
  return (
    <>
      <div className={styles.logo}>
        <Logo
          src="/images/logo.webp"
          width={128}
          height={128}
          alt="Decamond logo"
          className="mx-auto mb-6"
        />{" "}
      </div>

      <h1 className={styles.title}>Sign in to your account</h1>

      <form className={styles.form}>
        <Input
          type="email"
          placeholder="Email address"
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <div className={styles.options}>
          <label className={styles.remember}>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <Link href="#" className={styles.forgot}>
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className={styles.signInButton}>
          Sign in
        </Button>
      </form>

      <p className={styles.footer}>
        Not a member? <Link href="#">Start a 14-day free trial</Link>
      </p>
    </>
  );
}
