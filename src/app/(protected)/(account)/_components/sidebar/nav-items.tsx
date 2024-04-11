"use client";
import { HeaderMenu } from "interfaces";
import { ReactElement } from "react";
import { FiBell } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { PiChatCircleTextBold } from "react-icons/pi";
import { ConnectionIcon } from "../connection-icon";
import { UserRole } from "lib/enum";
import { NavItem } from "./nav-item";
import { LuFilePlus2 } from "react-icons/lu";

interface Menu extends HeaderMenu {
  icon: ReactElement;
  role?: UserRole;
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
    title: "SOP Tasks",
    path: "/tasks",
    icon: <LuFilePlus2 />,
    role: UserRole.HELPER,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <FiBell />,
  },
];

export const NavItems = () => {
  return (
    <ul className="space-y-8">
      {menu?.map((item, index) => (
        <NavItem item={item} key={index} />
      ))}
    </ul>
  );
};
