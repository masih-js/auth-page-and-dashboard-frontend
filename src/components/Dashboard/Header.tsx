"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAtomValue } from "jotai";
import { authUserAtom } from "@/atoms/auth";
import { useAuth } from "@/hooks/useAuth";
import Logo from "@/components/Global/Logo/Logo";
import styles from "./Header.module.scss";
import { AiOutlineLogout } from "react-icons/ai";

export default function Header() {
  const { logout } = useAuth();
  const user = useAtomValue(authUserAtom);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* hamburger on mobile */}
        <button className={styles.menuButton} aria-label="Open menu">
          <svg width="24" height="24" fill="currentColor">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <Link href="/" className={styles.logoLink}>
          <Logo
            src="/images/logo.png"
            width={100}
            height={100}
            alt="App Logo"
          />
        </Link>
      </div>

      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/invoices">Invoices</Link>
        <Link href="/clients">Clients</Link>
        <Link href="/expenses">Expenses</Link>
      </nav>

      <div className={styles.right}>
        {user?.picture?.thumbnail && (
          <Image
            src={user.picture.thumbnail}
            width={32}
            height={32}
            alt={`${user.name.first} ${user.name.last}`}
            className={styles.avatar}
          />
        )}
        {/* Logout button */}
        <button
          onClick={logout}
          className={styles.logoutButton}
          aria-label="Log out"
        >
          <AiOutlineLogout />
        </button>
      </div>
    </header>
  );
}
