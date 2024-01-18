import { LinkButton } from "components/link-button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between block w-full">
        <Link
          href="/"
          className="focus:outline-none focus:ring-primary-600 focus:ring-2 rounded"
        >
          <Image
            src="/logo.svg"
            alt="Asq4hep logo"
            className="max-h-12 xl:max-h-16 w-auto"
            width={100}
            height={100}
          />
        </Link>

        <div className="text-sm flex items-center gap-6">
          <span className="text-white hidden md:block">
            Don&apos;t have an account?
          </span>
          <LinkButton
            href="/register"
            radius="rounded-full"
            className="w-36 h-10"
          >
            Sign up
          </LinkButton>
        </div>
      </nav>
    </header>
  );
};
