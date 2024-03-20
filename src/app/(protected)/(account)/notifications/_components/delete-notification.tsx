import { Button } from "components/button";
import { useDeleteNotification } from "hooks/notification";

export const DeleteNotification = ({
  notificationId,
}: {
  notificationId: string;
}) => {
  const { mutate, isPending } = useDeleteNotification();
  return (
    <Button
      className="block w-full border-none hover:bg-red-50 focus:outline-secondary-500"
      size="sm"
      variant="transparent"
      isLoading={isPending}
      onClick={() => mutate(notificationId)}
    >
      Delete Notification
    </Button>
  );
};
