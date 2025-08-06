"use client";

import React from "react";
import styles from "./Header.module.scss";
import { LogoLink, NavLinks, UserProfile } from "@/components/Dashboard";
import MobileMenu from "@/components/Dashboard/MobileMenu/MobileMenu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <MobileMenu />
        <LogoLink />
      </div>

      {/* desktop nav only */}
      <div className={styles.desktopNav}>
        <NavLinks />
      </div>

      <div className={styles.right}>
        <UserProfile />
      </div>
    </header>
  );
}
