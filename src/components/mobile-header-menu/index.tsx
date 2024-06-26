"use client";

import { Dialog, Transition } from "@headlessui/react";
import { useMobileHeader } from "hooks/common";
import { HeaderMenu } from "interfaces";
import { HEADER_MENU } from "lib/constants";
import { getCookie } from "lib/cookie";
import Link from "next/link";
import { Fragment, useMemo } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";

export const MobileHeaderMenu = () => {
  const isLoggedIn = useMemo(() => getCookie("token"), []);
  const { isOpen, toggleMobileMenu } = useMobileHeader();
  return (
    <>
      <button
        onClick={toggleMobileMenu}
        aria-label="Open mobile menu"
        className="bg-secondary-400 flex h-10 w-10 items-center justify-center rounded-full text-primary-600 transition-colors md:hidden"
      >
        <RxHamburgerMenu className="h-4" />
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
                    className="bg-secondary-400 flex h-10 w-10 items-center justify-center rounded-full text-primary-600 transition-colors md:hidden"
                    onClick={toggleMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <TfiClose className="h-6" />
                  </button>
                </div>

                <ul className="flex w-full flex-col gap-4">
                  {HEADER_MENU.map((item: HeaderMenu) => (
                    <li className="py-2 transition-colors" key={item.title}>
                      <Link
                        href={item.path}
                        onClick={toggleMobileMenu}
                        className=" focus:outline-primary-600 focus:outline-2 rounded"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <hr className="border-gray-500 my-8" />
                  </li>

                  {isLoggedIn ? (
                    <li className="py-2 transition-colors">
                      <Link
                        href="/home"
                        onClick={toggleMobileMenu}
                        className=" focus:outline-primary-600 focus:outline-2 rounded"
                      >
                        Home
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li className="py-2 transition-colors">
                        <Link
                          href="/login"
                          onClick={toggleMobileMenu}
                          className=" focus:outline-primary-600 focus:outline-2 rounded"
                        >
                          Login
                        </Link>
                      </li>

                      <li className="py-2 transition-colors">
                        <Link
                          href="/get-started/user"
                          onClick={toggleMobileMenu}
                          className=" focus:outline-primary-600 focus:outline-2 rounded"
                        >
                          Sign up
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
