import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "./cta-button";
import { MobileHeaderMenu } from "components/mobile-header-menu";

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between block w-full">
        <Link
          href="/"
          className="focus:outline-primary-600 focus:outline-2 rounded block"
        >
          <Image
            src="/logo.svg"
            alt="Ask4help logo"
            className="max-h-12 xl:max-h-16 w-auto"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden md:block">
          <CtaButton />
        </div>

        <div className="block flex-none md:hidden">
          <MobileHeaderMenu />
        </div>
      </nav>
    </header>
  );
};
