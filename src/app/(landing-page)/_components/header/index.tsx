"use client";
import Link from "next/link";
import { MobileHeaderMenu } from "components/mobile-header-menu";
import Image from "next/image";
import { LinkButton } from "components/link-button";
import { scrollToElement } from "lib/util";
import { HEADER_MENU } from "lib/constants";
import { HeaderMenu } from "interfaces";

export const Header = () => {
  return (
    <header className="bg-secondary-600">
      <nav className="relative flex items-center justify-between px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl 3xl:px-wrapper-3xl 4xl:px-wrapper-4xl py-4">
        <div>
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6  focus:outline-primary-600 focus:outline-2 rounded"
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
          {HEADER_MENU.map((item: HeaderMenu) => (
            <li key={item.title}>
              <Link
                href={item.path}
                onClick={scrollToElement}
                className="text-white hover:text-white/80 hover:underline  focus:outline-primary-600 focus:outline-2 rounded px-2"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <LinkButton
            href="/login"
            variant="transparent"
            radius="rounded-full"
            className="border-transparent text-white hover:border-primary-500 lg:w-36"
          >
            Log in
          </LinkButton>
          <LinkButton
            href="/get-started/user"
            radius="rounded-full"
            className="lg:w-36"
          >
            <span>Sign up</span>
          </LinkButton>
        </div>

        <div className="block flex-none md:hidden">
          <MobileHeaderMenu />
        </div>
      </nav>
    </header>
  );
};
