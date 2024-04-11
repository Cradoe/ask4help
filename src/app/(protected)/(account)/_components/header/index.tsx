import Image from "next/image";
import Link from "next/link";
import { HeaderMenu } from "interfaces";
import { NavLink } from "./nav-links";
import { SearchForm } from "./search-form/search-form";
import { UserDropdown } from "./user-dropdown";
import { Notifications } from "./notifications";
import { MobileHeaderMenu } from "./mobile-menu";

const navLinks: HeaderMenu[] = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Messages",
    path: "/messages",
  },
  {
    title: "Connections",
    path: "/connections",
  },
];

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between block w-full">
        <Link
          href="/home"
          className=" focus:outline-secondary-500 focus:outline-2 rounded block"
        >
          <Image
            src="/logo-alt.svg"
            alt="Ask4help logo"
            className="max-h-12 xl:max-h-16 w-auto"
            width={100}
            height={100}
          />
        </Link>

        <ul className="items-center gap-10 hidden lg:flex">
          {navLinks?.map((menu, index) => (
            <NavLink menu={menu} key={index} />
          ))}
        </ul>

        <div className="items-center gap-12 hidden lg:flex">
          <SearchForm />
          <Notifications />
          <UserDropdown />
        </div>

        <div className="flex gap-4 items-center lg:hidden">
          <Notifications />
          <MobileHeaderMenu />
        </div>
      </nav>
      <div className="md:hidden">
        <SearchForm />
      </div>
    </header>
  );
};
