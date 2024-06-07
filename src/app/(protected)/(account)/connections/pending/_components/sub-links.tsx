"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Received",
    href: "/connections/pending/received",
  },
  {
    title: "Sent",
    href: "/connections/pending/sent",
  },
];
export const SubLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-3">
      {items?.map((item) => (
        <Link
          key={item?.href}
          className={clsx(
            "px-6 py-1.5 rounded-full text-xs md:text-sm hover:bg-secondary-500 hover:text-white",
            pathname === item?.href
              ? "bg-secondary-500 text-white"
              : "bg-secondary-50"
          )}
          href={item?.href}
        >
          {item?.title}
        </Link>
      ))}
    </div>
  );
};
