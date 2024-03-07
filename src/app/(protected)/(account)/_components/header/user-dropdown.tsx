"use client";
import { useState, useRef, ReactElement } from "react";
import { FaUser } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { useEscapeKeyListener, useOnClickOutside } from "hooks/common";
import { LinkButton } from "components/link-button";
import { Button } from "components/button";
import { useLogout } from "hooks/auth";
import { UserAccountProfile } from "../user-account-profile";
import { HeaderMenu } from "interfaces";
import { PiChatCircleTextBold } from "react-icons/pi";
import { ConnectionIcon } from "../sidebar/connection-icon";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

interface Menu extends HeaderMenu {
  icon: ReactElement;
}
const menu: Menu[] = [
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
    title: "Account Settings",
    path: "/account/settings",
    icon: <IoSettingsOutline />,
  },
  {
    title: "Support",
    path: "#",
    icon: <MdOutlineContactSupport />,
  },
];

export const UserDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setShowDropdown(false));
  useEscapeKeyListener(() => setShowDropdown(false));

  const handleDropdown = () => {
    setShowDropdown((prev: boolean) => !prev);
  };

  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-x-1 xl:gap-x-2 text-black  focus:outline-2 focus:outline-secondary-500 rounded"
        onClick={handleDropdown}
        aria-haspopup="menu"
        aria-expanded={showDropdown ? "true" : "false"}
      >
        <div className="flex items-center justify-center p-3 rounded-full bg-secondary-600 text-white">
          <FaUser />
        </div>
        <SlArrowDown className="font-bold text-xs" />
      </button>
      {showDropdown && (
        <div className="absolute -right-3 md:right-0 w-[20em] mt-2 origin-top-right  divide-y divide-gray-100 rounded-md shadow-lg outline-none divide-y bg-white z-50">
          <div className="p-5">
            <UserAccountProfile />
          </div>
          <div className="pb-5">
            {menu?.map((item, index) => (
              <LinkButton
                key={index}
                href={item?.path}
                justifyContent="justify-start"
                className="px flex gap-3 w-full md:h-12 text-sm border-transparent hover:bg-gray-100"
                variant="transparent"
              >
                <span className="text-base">{item.icon}</span>
                {item?.title}
              </LinkButton>
            ))}

            <div className="">
              <Button
                justifyContent="justify-start"
                className="block w-full md:h-12 text-sm border-transparent hover:bg-gray-200 focus:outline-secondary-500"
                variant="transparent"
                onClick={logout}
                isLoading={isLoggingOut}
              >
                <RiLogoutBoxRLine className="mr-2 text-base" />
                Log out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
