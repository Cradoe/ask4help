import { LuUsers } from "react-icons/lu";
import { ProfilePicture } from "./profile-picture";

export const DetailsCard = () => {
  return (
    <div>
      <div className="h-36 rounded-t-3xl relative before:absolute before:left-0 before:top-0 before:w-full before:h-36 before:bg-cover-image-pattern before:bg-no-repeat before:bg-cover before:bg-center before:z-10 bg-secondary-500/80 before:rounded-t-3xl"></div>
      <div className="bg-white px-10 relative pb-32 pt-3 rounded-b-3xl">
        <div className="flex items-center gap-x-1 xl:gap-x-3 text-black focus:outline-2 relative">
          <ProfilePicture />

          <div className="pl-32 leading-3">
            <div className="text-xl">Katrina Kilback</div>
            <div className="text-gray-400 text-xs">Lagos State, Nigeria</div>
            <div className="text-xs text-secondary-500 flex gap-2 mt-1">
              <LuUsers /> <span>478 Connections</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
