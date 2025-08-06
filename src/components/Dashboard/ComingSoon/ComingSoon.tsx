"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/config/navLinks";
import styles from "./ComingSoon.module.scss";

export default function ComingSoon() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const navItem = NAV_LINKS.find((n) => n.href === `/${slug}`);
  const title = navItem?.label || slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{title}</h1>
      <p className={styles.subtitle}>Coming Soon!</p>
      <Link href="/dashboard" className={styles.button}>
        ← Back to Home
      </Link>
    </div>
  );
}
