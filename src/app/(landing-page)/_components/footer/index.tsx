import { LinkButton } from "components/link-button";
import { Waitlist } from "components/waitlist";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FooterMenu } from "./footer-menu";

export const Footer = () => {
  return (
    <footer className="md:mt-64 lg:mt-96 bg-footer-bg bg-no-repeat bg-cover w-screen flex flex-col justify-end text-white gap-y-10 md:gap-y-16 lg:gap-y-32 pb-20 px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl 3xl:px-wrapper-3xl 4xl:px-wrapper-4xl">
      <Waitlist />
      <div className="gap-y-10 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <Link
            href="/"
            className="focus:outline-none focus:ring-primary-600 focus:ring-2 rounded block px-3"
          >
            <Image
              src="/logo.svg"
              alt="Ask4help logo"
              width={100}
              height={40}
            />
          </Link>
        </div>
        <FooterMenu />
        <div className="hidden lg:block">
          <LinkButton
            href="/#waitlist"
            radius="rounded-full"
            className="gap-2 text-black"
          >
            <span>Join Waitlist</span> <FaArrowRightLong />
          </LinkButton>
        </div>
      </div>
      <div className="md:text-center text-xs md:text-sm px-2">
        Ask4help &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
