"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/navigation";
import { Welcome } from "@/components/Dashboard";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth");
    }
  }, [user, router]);

  if (!user) return null;

  return <Welcome firstName={user.name.first} lastName={user.name.last} />;
}
