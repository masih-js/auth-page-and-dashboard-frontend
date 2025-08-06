"use client";

import { Provider as JotaiProvider } from "jotai";
import React, { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return <JotaiProvider>{children}</JotaiProvider>;
}
