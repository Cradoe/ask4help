"use client";
import { HeaderMenu } from "interfaces";
import { ReactElement } from "react";
import { FiBell } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { PiChatCircleTextBold } from "react-icons/pi";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { archivo } from "lib/font";
import { ConnectionIcon } from "./connection-icon";

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
    icon: <ConnectionIcon />,
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
      ))}
    </ul>
  );
};
