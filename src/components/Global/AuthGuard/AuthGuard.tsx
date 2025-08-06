// components/Global/AuthGuard/AuthGuard.tsx
"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { authUserAtom } from "@/atoms/auth";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const user = useAtomValue(authUserAtom);
  const router = useRouter();
  const [hasHydrated, setHasHydrated] = useState(false);

  // Mark when we’ve mounted on the client
  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // Once hydrated, if there’s no user, kick back to /auth
  useEffect(() => {
    if (hasHydrated && !user) {
      router.replace("/auth");
    }
  }, [hasHydrated, user, router]);

  // Don’t render anything until we know whether the user exists
  if (!hasHydrated || !user) {
    return null;
  }

  return <>{children}</>;
}
