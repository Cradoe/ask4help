"use client";

import clsx from "clsx";
import { useAccount } from "hooks/account";
import { SidebarMenu } from "interfaces";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileMenuItem = ({
  item,
  onClick,
}: {
  item: SidebarMenu;
  onClick: Function;
}) => {
  const pathname = usePathname();
  const { data: user } = useAccount();

  if (item?.role && item?.role !== user?.role) {
    return null;
  }

  return (
    <li className="py-2 transition-colors" key={item.title}>
      <Link
        href={item.path}
        onClick={() => onClick()}
        className={clsx("focus:outline-primary-600 focus:outline-2 rounded", {
          "text-secondary-500": pathname === item?.path,
        })}
      >
        {item.title}
      </Link>
    </li>
  );
};
