"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { IoFilterSharp } from "react-icons/io5";
import { NoContact } from "./no-contacts";
import { SearchBox } from "./search-box";
import { Contacts } from "./contacts";
import { useChatLists } from "hooks/message";

export const ChatList = () => {
  const { data: contacts, isPending } = useChatLists();
  return (
    <div className="bg-white  py-10 rounded-l-xl ">
      <div className="flex items-center justify-between px-9">
        <h1 className={clsx(archivo.className)}>Messages</h1>

        <button className="text-2xl  focus:outline-2 focus:outline-secondary-500 rounded">
          <IoFilterSharp />
        </button>
      </div>

      <div className="space-y-4">
        <SearchBox />

        {contacts?.length ? (
          <Contacts contacts={contacts} />
        ) : (
          <>
            {/* no contact lists  */}
            <NoContact />
          </>
        )}
      </div>
    </div>
  );
};
