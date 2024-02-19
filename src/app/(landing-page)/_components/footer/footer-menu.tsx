import Link from "next/link";

type Menu = {
  title: string;
  path: string;
};

const menu: Menu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/#about",
  },
  {
    title: "FAQs",
    path: "/#faqs",
  },
];

export const FooterMenu = () => {
  return (
    <div className="md:font-medium text-sm flex flex-col md:flex-row md:items-center justify-between gap-y-10 gap-x-16">
      {menu?.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="hover:text-white/80 hover:underline  focus:outline-primary-600 focus:outline-2 rounded px-2"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
