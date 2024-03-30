"use client";
import { SidebarMenu } from "interfaces";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { archivo } from "lib/font";
import { useAccount } from "hooks/account";

export const NavItem = ({ item }: { item: SidebarMenu }) => {
  const pathname = usePathname();
  const { data: user } = useAccount();

  if (item?.role && item?.role !== user?.role) {
    return null;
  }

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          "flex items-center gap-3  focus:outline-2 focus:outline-secondary-500 rounded px-1",
          archivo.className,
          pathname.includes(item.path)
            ? "text-secondary-500"
            : "hover:text-secondary-500"
        )}
      >
        <span>{item.icon}</span>
        <span>{item.title}</span>
      </Link>
    </li>
  );
};
