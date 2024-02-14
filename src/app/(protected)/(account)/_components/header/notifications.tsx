import Link from "next/link";
import { MdNotificationsNone } from "react-icons/md";

export const Notifications = () => {
  return (
    <div>
      <Link
        href="/notifications"
        className="bg-secondary-50 p-1 rounded-full text-xl  focus:outline-2 focus:outline-secondary-500 block"
        aria-label="Notifications"
      >
        <MdNotificationsNone />
      </Link>
    </div>
  );
};
