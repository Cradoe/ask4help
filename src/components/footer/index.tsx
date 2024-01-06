import { LinkButton } from "components/link-button";
import { NewsletterForm } from "components/newletter-form";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="md:mt-64 lg:mt-96 bg-footer-bg bg-no-repeat bg-cover w-screen flex flex-col justify-end text-white gap-y-10 md:gap-y-16 lg:gap-y-32 pb-20 px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl">
      <NewsletterForm />
      <div className="gap-y-10 flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="Asq4hep logo" width={100} height={40} />
          </Link>
        </div>
        <div className="md:font-medium text-sm flex flex-col md:flex-row md:items-center justify-between gap-y-10 gap-x-16">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">FAQs</Link>
        </div>
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
      <div className="md:text-center text-xs md:text-sm">
        Ask4hep &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
};
