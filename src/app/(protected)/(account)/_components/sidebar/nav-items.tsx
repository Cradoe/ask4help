"use client";
import { HeaderMenu } from "interfaces";
import { ReactElement } from "react";
import { FiBell } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { PiChatCircleTextBold } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { archivo } from "lib/font";

interface Menu extends HeaderMenu {
  icon: ReactElement;
}
const menu: Menu[] = [
  {
    title: "Home",
    path: "/home",
    icon: <GrHomeRounded />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <PiChatCircleTextBold />,
  },
  {
    title: "Connections",
    path: "/connections",
    icon: <LuUsers />,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <FiBell />,
  },
];

export const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="space-y-8">
      {menu?.map((item, index) => (
        <li key={index}>
          <Link
            href={item.path}
            className={clsx(
              "flex items-center gap-3",
              archivo.className,
              pathname === item.path
                ? "text-secondary-500"
                : "hover:text-secondary-500"
            )}
          >
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
