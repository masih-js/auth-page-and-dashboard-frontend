import React from "react";
import styles from "./auth.module.scss";
import { GuestGuard } from "@/components/Global";

export const metadata = {
  title: "Sign In",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GuestGuard>
      <div className={styles.container}>
        <div className={styles.card}>{children}</div>
      </div>
    </GuestGuard>
  );
}
