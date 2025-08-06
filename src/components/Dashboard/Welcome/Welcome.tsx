"use client";

import React from "react";
import styles from "./Welcome.module.scss";

interface WelcomeProps {
  firstName: string;
  lastName: string;
}

export default function Welcome({ firstName, lastName }: WelcomeProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to the Dashboard</h1>
      <p className={styles.subheading}>
        Hello, {firstName} {lastName}!
      </p>
    </div>
  );
}
