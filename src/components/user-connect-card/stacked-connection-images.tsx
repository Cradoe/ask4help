import { UserProfilePicture } from "components/profile-picture";
import React from "react";
import { FaUser } from "react-icons/fa";

export const StackedConnectionImages = ({
  profilePictures,
}: {
  profilePictures: (string | undefined)[];
}) => {
  return (
    <div className="flex">
      {profilePictures?.map((picture, index) => (
        <div className="relative h-12" key={index}>
          <div
            className={`flex items-center justify-center ${
              index !== 0 && "-ml-3"
            } z-${profilePictures?.length - index}`}
          >
            <div className="flex items-center w-10 h-10 justify-center">
              <UserProfilePicture size="sm" profilePicture={picture} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
