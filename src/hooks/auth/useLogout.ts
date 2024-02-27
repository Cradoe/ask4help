"use client";

import { deleteCookie } from "lib/cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogout = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const router = useRouter();

  const mutate = () => {
    setIsPending(true);
    // clear login data
    deleteCookie("token");
    deleteCookie("role");

    setTimeout(() => {
      // redirect to login page
      router.replace("/login");
    }, 1100);
  };

  return { mutate, isPending };
};
