"use client";

import { Dialog, Transition } from "@headlessui/react";
import { UserProfilePicture } from "components/profile-picture";
import { useAccount } from "hooks/account";
import { useMobileHeader } from "hooks/common";
import { SidebarMenu } from "interfaces";
import { UserRole } from "lib/enum";
import { Fragment, useMemo } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { PiChatCircleTextBold } from "react-icons/pi";

import { TfiClose } from "react-icons/tfi";
import { ConnectionIcon } from "../../connection-icon";
import { LuFilePlus2 } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { MobileMenuItem } from "./mobile-menu-item";
import { FaUser } from "react-icons/fa6";
import { getPersonalProfileUrl } from "lib/util";

export const MobileHeaderMenu = () => {
  const { isOpen, toggleMobileMenu } = useMobileHeader();

  const { data: user } = useAccount();

  const menu: SidebarMenu[] = useMemo(
    () => [
      {
        title: "Home",
        path: "/home",
        icon: <GrHomeRounded />,
      },
      {
        title: "My profile",
        path: getPersonalProfileUrl(user?.role),
        icon: <FaUser />,
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
    ],
    [user]
  );
  return (
    <>
      <button
        onClick={toggleMobileMenu}
        aria-label="Open mobile menu"
        className="bg-secondary-400 flex h-10 w-10 items-center justify-center rounded-full text-primary-600 transition-colors lg:hidden"
      >
        <UserProfilePicture size="sm" profilePicture={user?.profilePicture} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={toggleMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-white pb-6">
              <div className="p-4 pt-12">
                <div className="flex justify-end">
                  <button
                    className="bg-secondary-400 flex h-10 w-10 items-center justify-center rounded-full text-primary-600 transition-colors lg:hidden"
                    onClick={toggleMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <TfiClose className="h-6" />
                  </button>
                </div>

                <ul className="flex w-full flex-col gap-4">
                  {menu.map((item: SidebarMenu) => (
                    <MobileMenuItem
                      key={item?.title}
                      item={item}
                      onClick={toggleMobileMenu}
                    />
                  ))}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
