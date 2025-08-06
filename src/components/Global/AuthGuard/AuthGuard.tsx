"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { authUserAtom } from "@/atoms/auth";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const user = useAtomValue(authUserAtom);
  const router = useRouter();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (hasHydrated && !user) {
      router.replace("/auth");
    }
  }, [hasHydrated, user, router]);

  if (!hasHydrated || !user) {
    return null;
  }

  return <>{children}</>;
}
