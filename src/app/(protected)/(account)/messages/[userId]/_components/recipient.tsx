import { UserProfilePicture } from "components/profile-picture";
import { useUserDetails } from "hooks/user";
import { getProfileUrl } from "lib/util";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FaEllipsisH } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";

export const Recipient = () => {
  const params = useParams();
  const receiverId: string = params.userId as string;

  const router = useRouter();

  const { data: user } = useUserDetails(receiverId);
  return (
    <div className="grid grid-cols-[auto_1fr_auto]  items-center gap-x-10 xl:gap-x-3 text-black p-3 lg:py-6 justify-between ease-in-out duration-300">
      <div>
        <button
          onClick={() => router.back()}
          className="text-3xl font-bold md:hidden"
        >
          <TbArrowBackUp />
        </button>
      </div>
      <div className="leading-3 flex items-center gap-3">
        <div className="flex items-center justify-center rounded-full">
          <Link
            href={getProfileUrl(user?.role, user?.id)}
            aria-label={`${user?.firstName} ${user?.lastName}`}
          >
            <div className="flex items-center w-10 h-10 justify-center">
              <UserProfilePicture
                size="sm"
                profilePicture={user?.profilePicture}
              />
            </div>
          </Link>
        </div>
        <Link
          href={getProfileUrl(user?.role, user?.id)}
          className="hover:underline"
        >
          {user?.firstName} {user?.lastName}
        </Link>
      </div>
      <div>
        <button className="rounded-full p-1 text-xs  focus:outline-2 focus:outline-secondary-500">
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
};
