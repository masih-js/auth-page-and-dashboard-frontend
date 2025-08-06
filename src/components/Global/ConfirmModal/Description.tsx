"use client";

import React from "react";
import styles from "./ConfirmModal.module.scss";

interface DescriptionProps {
  description: string;
}

export default function ConfirmDescription({ description }: DescriptionProps) {
  return <p className={styles.description}>{description}</p>;
}
