import Link from "next/link";
import { NavItems } from "./nav-items";
import { UserProfile } from "./user-profile";

export const Sidebar = () => {
  return (
    <aside className="space-y-10 hidden lg:block">
      <div className="bg-white p-8 pt-10 rounded-3xl pb-20 space-y-10">
        <UserProfile />
        <NavItems />
      </div>

      <div className="text-xs space-y-5">
        <div className="flex gap-2 justify-center ">
          <Link
            href="/legal/agreement"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            User Agreement
          </Link>
          <span>|</span>
          <Link
            href="/legal/privacy-policy"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex gap-2 justify-center ">
          <Link
            href="/legal/cookie-policy"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            Cookie Policy
          </Link>
          <span>|</span>
          <Link
            href="/legal/support"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            Support
          </Link>
        </div>
      </div>
    </aside>
  );
};
