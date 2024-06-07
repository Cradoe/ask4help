import clsx from "clsx";
import { MyConnections } from "./_components/my-connections";
import { archivo } from "lib/font";
import { SubLinks } from "./_components/sub-links";

export default function Page() {
  return (
    <div className="bg-white py-10 space-y-10 rounded-3xl py-10 px-5 md:px-8">
      <div className="flex flex-col gap-y-4 md:flex-row lg:items-center lg:justify-between">
        <h2 className={clsx(archivo.className, "md:text-xl")}>
          My Connections
        </h2>
        <SubLinks />
      </div>

      <div className="mt-10">
        <MyConnections />
      </div>
    </div>
  );
}
