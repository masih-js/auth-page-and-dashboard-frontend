"use client";

import React from "react";
import styles from "./Header.module.scss";
import { MenuButton } from "@/components/Dashboard";
import { LogoLink } from "@/components/Dashboard";
import { NavLinks } from "@/components/Dashboard";
import { UserProfile } from "@/components/Dashboard";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <MenuButton />
        <LogoLink />
      </div>

      <NavLinks />

      <div className={styles.right}>
        <UserProfile />
      </div>
    </header>
  );
}
