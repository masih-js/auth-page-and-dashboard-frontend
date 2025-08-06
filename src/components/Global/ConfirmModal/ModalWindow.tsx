"use client";

import React, { ReactNode } from "react";
import styles from "./ConfirmModal.module.scss";

interface ModalWindowProps {
  children: ReactNode;
}

export default function ModalWindow({ children }: ModalWindowProps) {
  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
}
