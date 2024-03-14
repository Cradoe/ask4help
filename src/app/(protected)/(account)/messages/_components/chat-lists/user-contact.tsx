import clsx from "clsx";
import { UserProfilePicture } from "components/profile-picture";
import { ChatListItem } from "interfaces";
import { getTimeFromDate } from "lib/util";
import Link from "next/link";
import { FaEllipsisH } from "react-icons/fa";

export const UserContact = ({ contact }: { contact: ChatListItem }) => {
  return (
    <Link
      href={`/messages/${contact?.user?.id}`}
      className={clsx(
        "grid grid-cols-[2rem_1fr] items-center gap-x-3 xl:gap-x-3 text-black focus:outline-2 focus:outline-secondary-500 rounded m-1  p-6 justify-between ease-in-out duration-300",
        "hover:bg-secondary-50/35 ease-in-out duration-200"
      )}
    >
      <div className="flex items-center w-10 h-10 justify-center">
        <UserProfilePicture
          size="sm"
          profilePicture={contact?.user?.profilePicture}
        />
      </div>
      <div>
        <div className="text-sm leading-3 flex items-center justify-between">
          <span>
            {contact?.user?.firstName} {contact?.user?.lastName}
          </span>

          {contact.unreadMessageCount > 0 ? (
            <span className="rounded-full flex items-center justify-center text-[xs] bg-secondary-500 h-4 w-4 text-white">
              {contact.unreadMessageCount}
            </span>
          ) : (
            <button
              className={clsx(
                "rounded-full p-1 text-xs  focus:outline-2 focus:outline-secondary-500"
                // "bg-gray-300" // show this if user id matches with if in URL
              )}
            >
              <FaEllipsisH />
            </button>
          )}
        </div>
        <div className="text-gray-500 text-xs flex items-end justify-between">
          <span>{contact?.lastMessage?.content?.substring(0, 40)}...</span>
          <span className="w-24">
            {getTimeFromDate(contact?.lastMessage?.createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
};
