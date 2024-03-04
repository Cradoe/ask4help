import { FaUser } from "react-icons/fa";

export const ProfilePicture = ({
  profilePicture,
}: {
  profilePicture: string | undefined;
}) => {
  return (
    <div className="z-20 absolute -top-[3.5rem]">
      <div className="flex items-center justify-center p-8 rounded-full bg-secondary-600 text-white border border-4 border-white relative">
        <FaUser className="text-5xl" />
      </div>
    </div>
  );
};
