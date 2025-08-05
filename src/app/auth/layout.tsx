// app/auth/layout.tsx
import React from "react";
import styles from "./auth.module.scss";

export const metadata = {
  title: "Sign In",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}
