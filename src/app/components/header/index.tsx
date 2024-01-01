import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { LinkButton } from "../link-button";
import { FaArrowRightLong } from "react-icons/fa6";

type Menu = {
  title: string;
  path: string;
};

const menu: Menu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/#about",
  },
  {
    title: "FAQs",
    path: "/#faqs",
  },
];

export const Header = async () => {
  return (
    <header className="bg-secondary-600 ">
      <nav className="relative flex items-center justify-between px-wrapper md:px-wrapper-md xl:px-wrapper-xl py-10">
        <div>
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6 focus:outline-none focus:ring-primary-600 focus:ring-2 rounded"
          >
            <Image
              src="/logo.svg"
              alt="Asq4hep logo"
              className="max-h-20 w-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <ul className="hidden gap-6 lg:gap-8 xl:gap-12 text-sm md:flex md:items-center justify-between bg-secondary-400 py-3 px-8 lg:px-12 xl:px-16 rounded-full">
          {menu.map((item: Menu) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="text-white hover:text-white/80 hover:underline focus:outline-none focus:ring-primary-600 focus:ring-2 rounded px-2"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LinkButton href="/#waitlist" radius="rounded-full" className="gap-2">
            <span>Join Waitlist</span> <FaArrowRightLong />
          </LinkButton>
        </div>

        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} />
        </div>
      </nav>
    </header>
  );
};