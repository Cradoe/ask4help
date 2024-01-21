import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "./cta-button";

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between block w-full">
        <Link
          href="/"
          className="focus:outline-none focus:ring-primary-600 focus:ring-2 rounded block"
        >
          <Image
            src="/logo.svg"
            alt="Ask4help logo"
            className="max-h-12 xl:max-h-16 w-auto"
            width={100}
            height={100}
          />
        </Link>

        <CtaButton />
      </nav>
    </header>
  );
};
