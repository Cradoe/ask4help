import clsx from "clsx";
import { archivo } from "lib/font";
import { SettingsMenuGRoup } from "interfaces";
import { SETTINGS_MENU_GROUPS } from "./_constants";
import { LinkButton } from "components/link-button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="bg-white space-y-10 rounded-3xl py-10 px-8 mr-20">
      {SETTINGS_MENU_GROUPS?.map((group: SettingsMenuGRoup) => (
        <section key={group?.title}>
          <h2 className={clsx("text-xl tracking-wider", archivo.className)}>
            {group?.title}
          </h2>
          <ul className="space-y-3 mt-4">
            {group?.items?.map((item) => (
              <li key={item?.title}>
                <LinkButton
                  className="bg-secondary-50/70 font-medium tracking-wider hover:bg-secondary-50 flex justify-between items-center focus:outline-secondary-500 group"
                  href={item?.comingSoon ? "#" : item?.href}
                >
                  <span> {item?.title}</span>

                  {item?.comingSoon ? (
                    <span className="text-red-500 text-xs">coming soon</span>
                  ) : (
                    <FaArrowRightLong className="group-hover:translate-x-1 ease-in-out duration-300" />
                  )}
                </LinkButton>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
