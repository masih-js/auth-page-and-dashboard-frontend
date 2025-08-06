"use client";

import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { ConfirmModal } from "@/components/Global";
import styles from "../Header/Header.module.scss";

interface LogoutButtonProps {
  onLogout: () => void;
}

export default function LogoutButton({ onLogout }: LogoutButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    closeModal();
    onLogout();
  };

  return (
    <>
      <button
        onClick={openModal}
        className={styles.logoutButton}
        aria-label="Log out"
      >
        <AiOutlineLogout />
      </button>

      <ConfirmModal
        open={isOpen}
        title="Log out?"
        description="Are you sure you want to log out?"
        confirmText="Log out"
        cancelText="Stay logged in"
        onConfirm={handleConfirm}
        onCancel={closeModal}
      />
    </>
  );
}
