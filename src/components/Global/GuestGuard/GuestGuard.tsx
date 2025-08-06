"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { authUserAtom } from "@/atoms/auth";

interface GuestGuardProps {
  children: ReactNode;
}

/**
 * Wrap any “public” page in <GuestGuard>…</GuestGuard>
 * If the user _is_ logged in, immediately redirect to /dashboard.
 */
export default function GuestGuard({ children }: GuestGuardProps) {
  const user = useAtomValue(authUserAtom);
  const router = useRouter();
  const [hasHydrated, setHasHydrated] = useState(false);

  // Wait for client hydration (so we read localStorage first)
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // Once hydrated, if there _is_ a user, kick them to dashboard
  useEffect(() => {
    if (hasHydrated && user) {
      router.replace("/dashboard");
    }
  }, [hasHydrated, user, router]);

  // Don’t flash the form while we decide
  if (!hasHydrated || user) {
    return null;
  }

  return <>{children}</>;
}
