"use client";

import React, { forwardRef } from "react";
import Overlay from "./Overlay";
import ModalWindow from "./ModalWindow";
import ConfirmDescription from "./Description";
import ConfirmActions from "./Actions";
import ConfirmTitle from "./Title";

export interface ConfirmModalProps {
  open: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal = forwardRef<HTMLDivElement, ConfirmModalProps>(
  (
    {
      open,
      title = "Are you sure?",
      description = "",
      onConfirm,
      onCancel,
      confirmText = "Yes",
      cancelText = "Cancel",
    },
    ref,
  ) => {
    if (!open) return null;

    return (
      <Overlay onCancel={onCancel} ref={ref}>
        <ModalWindow>
          <ConfirmTitle title={title} />
          {description && <ConfirmDescription description={description} />}
          <ConfirmActions
            onCancel={onCancel}
            onConfirm={onConfirm}
            cancelText={cancelText}
            confirmText={confirmText}
          />
        </ModalWindow>
      </Overlay>
    );
  },
);

ConfirmModal.displayName = "ConfirmModal";
export default ConfirmModal;
