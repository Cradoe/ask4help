import { Card } from "components/card";
import { MobileHeaderMenu } from "components/mobile-header-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RightSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary-600 md:bg-white px-wrapper md:px-wrapper-md lg:pr-wrapper-lg xl:pr-wrapper-xl 3xl:pr-wrapper-3xl 4xl:pr-wrapper-4xl pt-10 py-20 grid grid-cols-1 items-center">
      <div className="place-self-start justify-self-end flex items-center justify-between md:justify-end w-full">
        <Link
          href="/"
          className=" focus:outline-primary-600 focus:outline-2 rounded block md:hidden"
        >
          <Image
            src="/logo.svg"
            alt="Ask4help logo"
            className="max-h-12 xl:max-h-16 w-auto"
            width={100}
            height={100}
          />
        </Link>

        <div className="block flex-none md:hidden">
          <MobileHeaderMenu />
        </div>
      </div>

      <Card className="lg:ml-10 xl:ml-24 2xl:ml-32 3xl:ml-48 4xl:ml-64 border-black rounded-3xl mt-20 4xl:mt-0 px-10">
        {children}
      </Card>
    </div>
  );
};
