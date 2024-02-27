import { Button } from "components/button";
import {
  useAcceptConnectionRequest,
  useRejectConnectionRequest,
} from "hooks/connections";
import { Connection } from "interfaces";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export const InvitationCard = ({ invitation }: { invitation: Connection }) => {
  const { mutate: acceptRequest, isPending: isAccepting } =
    useAcceptConnectionRequest();

  const { mutate: rejectRequest, isPending: isRejecting } =
    useRejectConnectionRequest();
  const { user } = invitation;
  return (
    <div className="flex justify-between items center py-2 bg-secondary-50 py-5 px-8 border-l border-l-secondary-500 border-l-4">
      <div className="flex">
        <div className="p-2">
          <FaUser />
        </div>
        <Link href={`/profile/${user?.id}`}>
          {user?.firstName} {user?.lastName}
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Button
          size="sm"
          variant="neutral"
          radius="rounded-full"
          className="w-28"
          isLoading={isRejecting}
          onClick={() => rejectRequest(invitation.id)}
        >
          Ignore
        </Button>
        <Button
          size="sm"
          radius="rounded-full"
          className="w-28"
          isLoading={isAccepting}
          onClick={() => acceptRequest(invitation.id)}
        >
          Accept
        </Button>
      </div>
    </div>
  );
};
