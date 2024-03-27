"use client";

import { useAccount } from "hooks/account";
import { UserRole } from "lib/enum";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { data: user } = useAccount();

  useEffect(() => {
    if (user && user.role == UserRole.USER) {
      router.replace("/profile/user");
    } else if (user && user.role == UserRole.HELPER) {
      router.replace("/profile/helper");
    }
  }, [user]);
  return <div>loading...</div>;
}
