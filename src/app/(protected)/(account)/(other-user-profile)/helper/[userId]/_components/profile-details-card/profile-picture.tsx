import { UserProfilePicture } from "components/profile-picture";

export const ProfilePicture = ({
  profilePicture,
}: {
  profilePicture: string | undefined;
}) => {
  return (
    <div className="z-20 absolute -top-[3.5rem]">
      <div className="flex h-16 md:h-32 w-16 md:w-32 items-center justify-center rounded-full border border-2 md:border-8 border-white relative bg-black">
        <UserProfilePicture profilePicture={profilePicture} />
      </div>
    </div>
  );
};
