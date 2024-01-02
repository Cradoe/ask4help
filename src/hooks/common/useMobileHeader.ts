"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useMobileHeader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  //   close menu when URL changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return { isOpen, toggleMobileMenu };
};
