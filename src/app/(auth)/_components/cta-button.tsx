"use client";

import { LinkButton } from "components/link-button";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const CtaButton = () => {
  const pathname = usePathname();

  const ctaAction = useMemo(() => {
    if (pathname === "/login") {
      return {
        title: "Sign Up",
        caption: "Don't have an account?",
        href: "/register",
      };
    } else if (pathname === "/register") {
      return {
        title: "Login",
        caption: "Already have an account?",
        href: "/login",
      };
    } else {
      return {
        title: "Login",
        caption: "Return to login page",
        href: "/login",
      };
    }
  }, [pathname]);

  return (
    <div className="text-sm flex items-center gap-6">
      <span className="text-white hidden md:block">{ctaAction.caption}</span>
      <LinkButton
        href={ctaAction.href}
        radius="rounded-full"
        className="w-36 h-10"
      >
        {ctaAction.title}
      </LinkButton>
    </div>
  );
};
