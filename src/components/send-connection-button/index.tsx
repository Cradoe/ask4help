import clsx from "clsx";
import { Button } from "components/button";
import { useConnectRequest } from "hooks/connections";
import { archivo } from "lib/font";

export const SendConnectionRequestButton = ({ userId }: { userId: string }) => {
  const {
    mutate: sendConnectRequest,
    isPending: isSendingRequest,
    isSuccess: hasSentRequest,
  } = useConnectRequest();

  return (
    <Button
      radius="rounded-full"
      size="sm"
      onClick={() => sendConnectRequest({ data: { userId } })}
      isLoading={isSendingRequest}
      className={clsx(
        "w-24 md:w-36 md:h-11 text-xs font-medium border hover:border-primary-500 mt-3",
        archivo.className
      )}
      variant={hasSentRequest ? "neutral" : "primary"}
      disabled={isSendingRequest || hasSentRequest}
    >
      {hasSentRequest ? "Request sent" : "Connect"}
    </Button>
  );
};
