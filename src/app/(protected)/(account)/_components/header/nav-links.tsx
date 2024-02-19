"use client";

import clsx from "clsx";
import { HeaderMenu } from "interfaces";
import { archivo } from "lib/font";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ menu }: { menu: HeaderMenu }) => {
  const pathname = usePathname();

  return (
    <li
      className={clsx(
        "py-2 border-b border-b-4 ease-in-out duration-300",
        archivo.className,
        pathname === menu.path
          ? "border-b-secondary-500"
          : "border-b-transparent hover:border-b-secondary-500"
      )}
    >
      <Link
        href={menu.path}
        className=" focus:outline-2 focus:outline-secondary-500 rounded px-1"
      >
        {menu.title}
      </Link>
    </li>
  );
};
