import clsx from "clsx";
import { LinkButton } from "components/link-button";
import { archivo } from "lib/font";
import { LuUsers } from "react-icons/lu";

export const NoConnectionInvitations = ({
  text = "No invitation sent",
}: {
  text?: string;
}) => {
  return (
    <div className="h-36 flex items-center justify-center flex-col gap-4 mt-20 text-gray-500">
      <div>
        <LuUsers className="text-6xl font-bold" />
      </div>
      <div className="text-sm font-light">{text}</div>
      <div className="pt-2">
        <LinkButton
          href="/connections/active"
          radius="rounded-full"
          className={clsx(archivo.className, "text-black px-6")}
          size="sm"
        >
          Go to connections
        </LinkButton>
      </div>
    </div>
  );
};
