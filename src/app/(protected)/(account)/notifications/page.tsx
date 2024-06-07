"use client";
import clsx from "clsx";
import {
  useGroupedNotifications,
  useReadAllNotifications,
} from "hooks/notification";
import { archivo } from "lib/font";
import { NotificationItem } from "./_components/notification-item";
import { Skeleton } from "components/skeleton";
import { Button } from "components/button";

export default function Page() {
  const {
    data: groupedNotifications,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGroupedNotifications();

  const { mutate: readAll, isPending } = useReadAllNotifications();

  return (
    <div className="bg-white space-y-10 rounded-3xl py-10 lg:mr-20">
      <div className="flex flex-col md:flex-row items-between md:items-center justify-center md:justify-between px-8">
        <h2 className={clsx("text-xl tracking-wider", archivo.className)}>
          Notifications
        </h2>

        {groupedNotifications && (
          <Button
            variant="transparent"
            className="text-secondary-500 text-sm border-none"
            onClick={() => readAll()}
            isLoading={isPending}
          >
            Mark all as read
          </Button>
        )}
      </div>

      <div className="mt-8 space-y-5">
        {groupedNotifications?.map((group) => (
          <div className="space-y-3" key={group?.day}>
            <div className="px-8 text-sm font-medium">{group?.day}</div>
            <div>
              {group?.notifications?.map((notification) => (
                <NotificationItem
                  notification={notification}
                  key={notification?.id}
                />
              ))}
            </div>
          </div>
        ))}

        {(isFetching || isFetchingNextPage) && (
          <div className="space-y-3">
            <Skeleton height={20} width={70} className="mx-8" />
            <div>
              {[...new Array(4)]?.map((_, index) => (
                <Skeleton height={100} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        {hasNextPage && !isFetchingNextPage && (
          <Button
            size="sm"
            variant="transparent"
            radius="rounded-full"
            className="border-secondary-500 w-36 mt-3 hover:bg-secondary-500 hover:text-white"
            onClick={() => fetchNextPage()}
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
}
