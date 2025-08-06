"use client";

import React from "react";
import styles from "./Header.module.scss";

export interface MenuButtonProps {
  onClick?: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      className={styles.menuButton}
      aria-label="Open menu"
      onClick={onClick}
    >
      <svg width="24" height="24" fill="currentColor">
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
