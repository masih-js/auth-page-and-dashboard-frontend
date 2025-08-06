"use client";

import React from "react";
import { NavLinks } from "@/components/Dashboard";
import styles from "./MobileMenu.module.scss";
import navStyles from "@/components/Dashboard/Header/NavLinks.module.scss";

interface MobileDrawerProps {
  onClose: () => void;
}

// components/Dashboard/MobileMenu/MobileDrawer.tsx
export default function MobileDrawer({ onClose }: MobileDrawerProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <nav className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* THIS IS THE KEY: give it the vertical class */}
        <NavLinks className={navStyles.vertical} />
      </nav>
    </div>
  );
}
