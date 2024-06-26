import Link from "next/link";
import { NavItems } from "./nav-items";
import { UserAccountProfile } from "../user-account-profile";

export const Sidebar = () => {
  return (
    <aside className="space-y-10 hidden lg:block">
      <div className="bg-white p-8 pt-10 rounded-3xl pb-20 space-y-10">
        <UserAccountProfile />
        <NavItems />
      </div>

      <div className="text-xs space-y-5">
        <div className="flex gap-2 justify-center ">
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="/legal/terms-and-conditions"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            Terms &amp; conditions
          </Link>
          <span>|</span>
          <Link
            target="_blank"
            referrerPolicy="no-referrer"
            href="/legal/privacy-policy"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex gap-2 justify-center ">
          {/* <Link
            href="/legal/cookie-policy"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            Cookie Policy
          </Link>
          <span>|</span> */}
          <Link
            href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
            target="_blank"
            referrerPolicy="no-referrer"
            className="hover:underline hover:text-secondary-500  focus:outline-2 focus:outline-secondary-500 rounded px-1"
          >
            Support
          </Link>
        </div>
      </div>
    </aside>
  );
};
