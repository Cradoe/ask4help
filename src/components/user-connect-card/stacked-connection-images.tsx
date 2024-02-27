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
          <span
            className={`flex items-center justify-center ${
              index !== 0 && "-ml-3"
            } z-${profilePictures?.length - index}`}
          >
            {picture ? (
              <img
                src={picture}
                alt={`Profile ${index + 1}`}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
            ) : (
              <div className="rounded-full bg-secondary-600 text-white inline-block p-2">
                <FaUser className="text-lg" />
              </div>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
