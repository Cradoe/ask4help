import clsx from "clsx";
import { Button } from "components/button";
import { LinkButton } from "components/link-button";
import { SendConnectionRequestButton } from "components/send-connection-button";
import { useFindConnectionStatus } from "hooks/connections";
import { archivo } from "lib/font";
import { useParams } from "next/navigation";

export const CtaButton = () => {
  const params = useParams();
  const userId = params.userId as string;

  const { data: connection, isPending: isLoadingConnection } =
    useFindConnectionStatus(userId);

  if (connection && connection?.status === "active") {
    return (
      <LinkButton
        radius="rounded-full"
        className="w-36 h-10"
        href={`/messages/${userId}`}
      >
        Message
      </LinkButton>
    );
  }

  if (connection && connection?.status === "pending") {
    return (
      <Button
        radius="rounded-full"
        size="sm"
        variant="neutral"
        className={clsx(
          "w-24 md:w-36 md:h-11 text-xs font-medium border hover:border-primary-500 mt-3",
          archivo.className
        )}
        disabled
      >
        Pending connection
      </Button>
    );
  }

  if (!isLoadingConnection && !connection) {
    return <SendConnectionRequestButton userId={userId} />;
  }
};
