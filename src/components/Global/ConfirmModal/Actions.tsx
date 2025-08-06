"use client";

import React from "react";
import styles from "./ConfirmModal.module.scss";

interface ActionsProps {
  onCancel: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

export default function ConfirmActions({
  onCancel,
  onConfirm,
  cancelText = "Cancel",
  confirmText = "Yes",
}: ActionsProps) {
  return (
    <div className={styles.actions}>
      <button type="button" className={styles.cancelButton} onClick={onCancel}>
        {cancelText}
      </button>
      <button
        type="button"
        className={styles.confirmButton}
        onClick={onConfirm}
      >
        {confirmText}
      </button>
    </div>
  );
}
