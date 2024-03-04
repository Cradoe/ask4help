import clsx from "clsx";
import { archivo } from "lib/font";
import { FaPlus } from "react-icons/fa";

export const Interests = () => {
  return (
    <section className="rounded-3xl bg-white px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl", archivo.className)}>Interests</h2>

        <button className="text-xs flex items-center justify-between bg-secondary-50 px-5 py-1 rounded-full">
          <FaPlus /> <span>Add</span>
        </button>
      </div>

      <div className="pt-5 flex gap-4 flex-wrap">
        {[...new Array(10)]?.map((_, index) => (
          <span
            key={index}
            className="bg-secondary-500 px-5 py-2 text-sm text-white rounded-full uppercase"
          >
            Travel Opportunities
          </span>
        ))}
      </div>
    </section>
  );
};
