import { useInfiniteQuery } from "@tanstack/react-query";
import { Notification } from "interfaces";
import { useMemo, useRef } from "react";
import { clientRequest } from "services/client";

export const useNotifications = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<{
    data: Notification[];
    nextCursor: number;
  }>({
    queryKey: ["projects"],
    queryFn: ({ pageParam }) => {
      return clientRequest.notification.getAll(pageParam as number);
    },
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export const useGroupedNotifications = () => {
  const {
    data: notificationsData,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useNotifications();
  const previousNotifications = useRef<Notification[]>([]);

  const groupedNotifications = useMemo(() => {
    if (!notificationsData || notificationsData.pages.length === 0) return [];

    // Concatenate all pages of notifications
    const allNotifications = notificationsData.pages.reduce(
      // @ts-ignore
      (acc, page) => acc.concat(page?.data),
      []
    );

    // Combine the previous notifications with the new ones
    const combinedNotifications = [
      ...allNotifications,
      ...(previousNotifications?.current || []),
    ];
    const uniqueNotifications = Array.from(
      new Set(combinedNotifications?.map((notification) => notification.id))
    ).map((id) =>
      combinedNotifications.find((notification) => notification.id === id)
    );

    // Update the previous notifications for the next render
    previousNotifications.current = uniqueNotifications as Notification[];

    // Group the unique notifications by date
    const today = new Date();
    return uniqueNotifications?.reduce((groups, notification) => {
      let dayLabel = "";

      const createdAtDate = new Date(notification!.createdAt);
      const diffTime = Math.abs(today.getTime() - createdAtDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        dayLabel = "Today";
      } else if (diffDays === 1) {
        dayLabel = "Yesterday";
      } else if (diffDays < 7) {
        dayLabel = createdAtDate.toLocaleDateString("en-US", {
          weekday: "long",
        });
      } else {
        dayLabel =
          createdAtDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
          }) +
          ", " +
          createdAtDate.getFullYear();
      }

      const existingGroup = groups.find((group) => group.day === dayLabel);
      if (existingGroup) {
        existingGroup.notifications.push(notification as Notification);
      } else {
        groups.push({
          day: dayLabel,
          notifications: [notification as Notification],
        });
      }
      return groups;
    }, [] as { day: string; notifications: Notification[] }[]);
  }, [notificationsData]);

  return {
    data: groupedNotifications,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};
