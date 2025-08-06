"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Global";
import styles from "./Header.module.scss";

export default function LogoLink() {
  return (
    <Link href="/" className={styles.logoLink}>
      <Logo src="/images/logo.png" width={100} height={100} alt="App Logo" />
    </Link>
  );
}
