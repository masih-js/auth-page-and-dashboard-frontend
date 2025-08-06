"use client";

import React, { forwardRef, ReactNode } from "react";
import styles from "./ConfirmModal.module.scss";

interface OverlayProps {
  onCancel: () => void;
  children: ReactNode;
}

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ onCancel, children }, ref) => (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={onCancel}
      ref={ref}
    >
      {children}
    </div>
  ),
);

Overlay.displayName = "ConfirmModalOverlay";
export default Overlay;
