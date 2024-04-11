"use client";
import { usePendingInvitations } from "hooks/connections";
import { LuUsers } from "react-icons/lu";

export const ConnectionIcon = () => {
  const { data: pendingInvitations } = usePendingInvitations();
  return (
    <div className="relative">
      <LuUsers />
      {pendingInvitations && pendingInvitations?.length > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full bg-red-500 text-white text-xs">
          {pendingInvitations?.length}
        </span>
      )}
    </div>
  );
};
