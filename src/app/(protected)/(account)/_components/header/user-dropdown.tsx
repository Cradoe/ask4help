"use client";
import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { useEscapeKeyListener, useOnClickOutside } from "hooks/common";
import { FiLogOut } from "react-icons/fi";
import { LinkButton } from "components/link-button";
import { useAccount } from "hooks/account";
import { Button } from "components/button";
import { useLogout } from "hooks/auth";

export const UserDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setShowDropdown(false));
  useEscapeKeyListener(() => setShowDropdown(false));

  const handleDropdown = () => {
    setShowDropdown((prev: boolean) => !prev);
  };

  const { data: user, isPending } = useAccount();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-x-1 xl:gap-x-2 text-black  focus:outline-2 focus:outline-secondary-500 rounded"
        onClick={handleDropdown}
        aria-haspopup="menu"
        aria-expanded={showDropdown ? "true" : "false"}
        disabled={!user}
      >
        <div className="flex items-center justify-center p-3 rounded-full bg-secondary-600 text-white">
          <FaUser />
        </div>
        <SlArrowDown className="font-bold text-xs" />
      </button>
      {showDropdown && (
        <div className="absolute -right-3 md:right-0 w-48 mt-2 origin-top-right  divide-y divide-gray-100 rounded-md shadow-lg outline-none divide-y bg-white">
          <div className="">
            <LinkButton
              href="/profile"
              justifyContent="justify-start"
              className="block w-full md:h-12  text-xs border-transparent hover:bg-gray-200"
              variant="transparent"
            >
              <FaUser className="mr-2" />
              View profile
            </LinkButton>
          </div>

          <div className="">
            <Button
              justifyContent="justify-start"
              className="block w-full md:h-12 text-xs text-red-500 border-transparent hover:bg-gray-200"
              variant="transparent"
              onClick={logout}
              isLoading={isLoggingOut}
            >
              <FiLogOut className="mr-2" />
              Log out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
