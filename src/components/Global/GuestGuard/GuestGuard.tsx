"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { authUserAtom } from "@/atoms/auth";

interface GuestGuardProps {
  children: ReactNode;
}

export default function GuestGuard({ children }: GuestGuardProps) {
  const user = useAtomValue(authUserAtom);
  const router = useRouter();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (hasHydrated && user) {
      router.replace("/dashboard");
    }
  }, [hasHydrated, user, router]);

  if (!hasHydrated || user) {
    return null;
  }

  return <>{children}</>;
}
