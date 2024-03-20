import { UserProfilePicture } from "components/profile-picture";

import { Notification, NotificationStatus } from "interfaces";
import Link from "next/link";
import { useMemo } from "react";
import { NotificationCta } from "./notification-cta";
import clsx from "clsx";
import { getTimeAgo } from "lib/util";
import { HorizontalEllipsisDropdown } from "components/horizontal-ellipsis-dropdown";
import { DeleteNotification } from "./delete-notification";

export const NotificationItem = ({
  notification,
}: {
  notification: Notification;
}) => {
  const {
    id: notificationId,
    sender,
    description,
    createdAt,
    ctaType,
    itemId,
    status,
  } = useMemo(() => notification, [notification]);

  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row justify-between items center py-2 hover:bg-secondary-50/50 py-5 px-8 border-l border-l-4 text-sm ease-in-out duration-200",
        status === NotificationStatus.READ
          ? "bg-white border-l-transparent"
          : "bg-secondary-50/70 border-l-secondary-500"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center w-16 h-16 justify-center rounded-full">
          <Link href={`/profile/${sender?.id}`}>
            <UserProfilePicture
              size="md"
              profilePicture={sender?.profilePicture}
            />
          </Link>
        </div>
        <div>
          <div>
            <Link
              href={`/profile/${sender?.id}`}
              className="font-medium hover:underline"
            >
              {sender?.firstName} {sender?.lastName}
            </Link>{" "}
            <span className="font-light">{description}</span>
          </div>
          <div>
            <NotificationCta ctaType={ctaType} itemId={itemId} />
          </div>
        </div>
      </div>

      <div className="order-first md:order-last flex items-end flex-col gap-3">
        <div className="flex flex-row justify-between w-full md:w-auto md:flex-col ">
          <span className="text-xs">{getTimeAgo(createdAt)}</span>

          <div className="md:order-first">
            <HorizontalEllipsisDropdown>
              <div className="space-y-2">
                <DeleteNotification notificationId={notificationId} />
              </div>
            </HorizontalEllipsisDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
