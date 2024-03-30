import { EditProfilePicture } from "./edit-profile-picture";
import { UserProfilePicture } from "components/profile-picture";

export const ProfilePicture = ({
  profilePicture,
}: {
  profilePicture: string | undefined;
}) => {
  return (
    <div className="z-20 absolute -top-[3.5rem]">
      <div className="flex h-32 w-32 items-center justify-center rounded-full border border-8 border-white relative">
        <UserProfilePicture profilePicture={profilePicture} />

        <EditProfilePicture currentPhoto={profilePicture} />
      </div>
    </div>
  );
};
