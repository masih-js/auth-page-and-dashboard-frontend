"use client";

import React from "react";
import styles from "./ConfirmModal.module.scss";

interface TitleProps {
  title: string;
}

export default function ConfirmTitle({ title }: TitleProps) {
  return <h2 className={styles.title}>{title}</h2>;
}
