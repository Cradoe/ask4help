"use client";
import { LinkButton } from "components/link-button";
import Image from "next/image";
import Link from "next/link";
import { FooterMenu } from "./footer-menu";
import { useMemo } from "react";
import { getCookie } from "lib/cookie";

export const Footer = () => {
  const isLoggedIn = useMemo(() => getCookie("token"), []);
  return (
    <footer className="md:mt-40 bg-footer-bg bg-no-repeat bg-cover w-screen flex flex-col justify-end text-white gap-y-10 md:gap-y-16 lg:gap-y-32 pb-20 px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl 3xl:px-wrapper-3xl 4xl:px-wrapper-4xl">
      <div className="mt-72 4xl:mt-96 lg:w-2/3 mx-auto">
        <p className="text-2xl xl:text-5xl text-white font-medium">
          Join your study advisor, classmates, and friends on Ask4hep.
        </p>
        <div className="mt-7">
          {isLoggedIn ? (
            <LinkButton
              href="/home"
              radius="rounded-full"
              className="h-12 text-black w-32 md:w-36"
            >
              Proceed
            </LinkButton>
          ) : (
            <LinkButton
              href="/get-started/user"
              radius="rounded-full"
              className="h-12 text-black w-32 md:w-36"
            >
              Join now
            </LinkButton>
          )}
        </div>
      </div>
      <div className="mt-20 md:mt-0 gap-y-10 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <Link
            href="/"
            className=" focus:outline-primary-600 focus:outline-2 rounded block lg:px-3"
          >
            <Image
              src="/logo.svg"
              alt="Ask4help logo"
              width={100}
              height={40}
              className="h-16 mx-0"
            />
          </Link>
        </div>
        <FooterMenu />
        <div></div>
      </div>
      <div className="md:text-center text-xs md:text-sm px-2">
        Ask4help &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
