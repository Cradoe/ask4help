"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { IoFilterSharp } from "react-icons/io5";
import { NoContact } from "./no-contacts";
import { SearchBox } from "./search-box";
import { Contacts } from "./contacts";
import { useChatLists } from "hooks/message";
import { usePathname } from "next/navigation";
import { Skeleton } from "components/skeleton";

export const ChatList = () => {
  const { data: contacts, isPending } = useChatLists();
  const pathname = usePathname();

  return (
    <div
      className={clsx("bg-white  py-10 rounded-xl lg:rounded-r-none", {
        "hidden md:block": pathname !== "/messages",
      })}
    >
      <div className="flex items-center justify-between px-9">
        <h1 className={clsx(archivo.className)}>Messages</h1>

        <button className="text-2xl  focus:outline-2 focus:outline-secondary-500 rounded">
          <IoFilterSharp />
        </button>
      </div>

      <div className="space-y-4 ">
        <SearchBox />

        <div className="space-y-4 px-5">
          {/* loading state  */}
          {isPending &&
            [...new Array(8)]?.map((_, index: number) => (
              <Skeleton height={40} key={index} />
            ))}
        </div>

        {/* no contact lists  */}
        {!isPending && contacts?.length === 0 && <NoContact />}

        {contacts && contacts?.length > 0 && <Contacts contacts={contacts} />}
      </div>
    </div>
  );
};
