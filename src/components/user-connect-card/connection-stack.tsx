import React, { useMemo } from "react";
import { User } from "interfaces";
import { StackedConnectionImages } from "./stacked-connection-images";

export const ConnectionStack = ({ mutualUsers }: { mutualUsers: User[] }) => {
  const connectedNames = useMemo(() => {
    return mutualUsers.slice(0, 2).map((user) => ({
      name: `${user.firstName} ${user.lastName}`,
      profilePicture: user?.profilePicture,
    }));
  }, [mutualUsers]);

  const othersText = useMemo(() => {
    if (mutualUsers.length > 2) {
      return ` and ${mutualUsers.length - 2} others you know`;
    }
    return "";
  }, [mutualUsers]);

  const profilePictures = useMemo(
    () => connectedNames.map((user) => user.profilePicture),
    [connectedNames]
  );

  return (
    <div className="text-xs flex gap-2 md:my-4">
      {mutualUsers?.length > 0 ? (
        <>
          <div className="hidden md:block">
            <StackedConnectionImages profilePictures={profilePictures} />
          </div>

          <span className="text-gray-600">
            {`Connected with ${connectedNames
              .map((user) => user.name)
              .join(", ")}`}
            {othersText}
          </span>
        </>
      ) : (
        <div className="h-4 md:h-12"></div>
      )}
    </div>
  );
};
