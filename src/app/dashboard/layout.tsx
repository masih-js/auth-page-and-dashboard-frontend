// app/dashboard/layout.tsx

import React from "react";
import AuthGuard from "@/components/Global/AuthGuard/AuthGuard";
import styles from "./dashboard.module.scss";
import Header from "@/components/Dashboard/Header";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className={styles.dashboardContainer}>
        <Header />

        <main className={styles.mainContent}>{children}</main>
      </div>
    </AuthGuard>
  );
}
