import { FaUser } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";

export const UserProfilePicture = ({
  placeholderClassName,
  profilePicture,
  size = "lg",
}: {
  size?: "sm" | "lg";
  placeholderClassName?: string;
  profilePicture: string | undefined;
}) => {
  return (
    <div className="flex items-center justify-center rounded-full bg-secondary-600 ">
      {profilePicture ? (
        <Image
          src={profilePicture}
          alt="profile picture"
          height={150}
          width={150}
          className="h-full w-full rounded-full"
        />
      ) : (
        <div
          className={clsx(
            "flex items-center justify-center text-white",
            { "p-3": size === "sm" },
            { "p-8": size === "lg" }
          )}
        >
          <FaUser
            className={clsx(
              placeholderClassName,
              { "text-base": size === "sm" },
              { "text-5xl": size === "lg" }
            )}
          />
        </div>
      )}
    </div>
  );
};
