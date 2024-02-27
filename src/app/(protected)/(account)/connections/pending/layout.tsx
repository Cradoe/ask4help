import clsx from "clsx";
import { archivo } from "lib/font";
import { ReactNode } from "react";
import { SubLinks } from "./_components/sub-links";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white py-10 space-y-10 rounded-3xl py-10 px-5 md:px-8">
      <div className="flex flex-col gap-y-4 md:flex-row lg:items-center lg:justify-between">
        <h2 className={clsx(archivo.className, "text-xl")}>
          Manage Invitations
        </h2>
        <SubLinks />
      </div>

      <div className="mt-10">{children}</div>
    </div>
  );
};

export default Layout;
