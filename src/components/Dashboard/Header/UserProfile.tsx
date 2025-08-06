"use client";

import React from "react";
import { useAtomValue } from "jotai";
import { authUserAtom } from "@/atoms/auth";
import { useAuth } from "@/hooks";
import styles from "../Header/Header.module.scss";
import { Avatar } from "@/components/Dashboard";
import { LogoutButton } from "@/components/Dashboard";

export default function UserProfile() {
  const user = useAtomValue(authUserAtom);
  const { logout } = useAuth();

  if (!user) return null;

  const thumbnail = user.picture.thumbnail;
  const alt = `${user.name.first} ${user.name.last}`;

  return (
    <div className={styles.userProfile}>
      <Avatar src={thumbnail} alt={alt} size={32} />
      <LogoutButton onLogout={logout} />
    </div>
  );
}
