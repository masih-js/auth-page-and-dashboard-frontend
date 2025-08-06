"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MenuButton } from "@/components/Dashboard";
import { usePathname } from "next/navigation";

const MobileDrawer = dynamic(() => import("./MobileDrawer"), {
  ssr: false,
  loading: () => null,
});

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggle = () => setIsOpen((o) => !o);
  const close = () => setIsOpen(false);

  useEffect(() => {
    close();
  }, [pathname]);
  return (
    <>
      <MenuButton onClick={toggle} />

      {isOpen && <MobileDrawer onClose={close} />}
    </>
  );
}
