"use client";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import { LinkButton } from "components/link-button";
import { FaArrowRightLong } from "react-icons/fa6";
import { scrollToElement } from "lib/util";

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

export const Header = () => {
  return (
    <header className="bg-secondary-600">
      <nav className="relative flex items-center justify-between px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl 3xl:px-wrapper-3xl 4xl:px-wrapper-4xl py-4">
        <div>
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6 focus:outline-none focus:ring-primary-600 focus:ring-2 rounded"
          >
            <Image
              src="/logo.svg"
              alt="Ask4help logo"
              className="max-h-12 xl:max-h-16 w-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <ul className="hidden gap-6 lg:gap-8 xl:gap-12 text-sm md:text-base md:flex md:items-center justify-between bg-secondary-400 py-3 px-8 lg:px-12 xl:px-16 rounded-full">
          {menu.map((item: Menu) => (
            <li key={item.title}>
              <Link
                href={item.path}
                onClick={scrollToElement}
                className="text-white hover:text-white/80 hover:underline focus:outline-none focus:ring-primary-600 focus:ring-2 rounded px-2"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LinkButton
            href="/#waitlist"
            onClick={scrollToElement}
            radius="rounded-full"
            className="gap-2"
          >
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
