import { useUserDetails } from "./useUserDetails";
import { useEffect } from "react";
import { UserRole } from "lib/enum";
import { useRouter } from "next/navigation";

export const useRedirectFromUserToRolePage = (userId: string) => {
  const { data: user } = useUserDetails(userId);
  const router = useRouter();

  useEffect(() => {
    if (user && user?.role !== UserRole.USER) {
      router.replace(`/${user?.role}/${user?.id}`);
    }
  }, [user]);
};
