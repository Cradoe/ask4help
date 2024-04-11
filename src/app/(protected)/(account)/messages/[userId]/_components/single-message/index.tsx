"use client";

import { useAccount } from "hooks/account";
import { Message } from "interfaces";
import { getProfileUrl, getTimeFromDate } from "lib/util";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAcknowledgeMessage } from "hooks/web-scoket";
import { useUserDetails } from "hooks/user";
import { UserProfilePicture } from "components/profile-picture";
import { RenderAttachment } from "./render-attachment";
import { TextMessage } from "./text-message";

export const SingleMessage = ({
  message,
}: {
  message: Message | undefined;
}) => {
  const params = useParams();
  const receiverId: string = params.userId as string;

  const { data: receiver } = useUserDetails(receiverId);

  const { data: myDetails } = useAccount();

  useAcknowledgeMessage({
    receiverId,
    message,
  });

  if (!message) return null;

  return (
    <div className={`flex justify-start`}>
      <div className={`flex justify-start w-[80%] gap-2`}>
        <div>
          <div className="flex items-center w-10 h-10 justify-center">
            <UserProfilePicture
              size="sm"
              profilePicture={
                message?.sender?.id === myDetails?.id
                  ? myDetails?.profilePicture
                  : receiver?.profilePicture
              }
            />
          </div>
        </div>

        <div>
          <div className="flex gap-3">
            {/* sender details  */}
            {message?.sender?.id === myDetails?.id ? (
              <div className="text-secondary-600 font-medium">You</div>
            ) : (
              <Link
                href={getProfileUrl(receiver?.role, receiver?.id)}
                className="text-secondary-600 font-medium hover:underline"
              >
                {receiver?.firstName} {receiver?.lastName}
              </Link>
            )}

            <div className="text-[0.7rem] mt-2">
              {getTimeFromDate(message?.createdAt as string)}
            </div>
          </div>
          <div className={`text-black text-sm mt-2`}>
            {message?.mimeType ? (
              <RenderAttachment message={message} />
            ) : (
              <TextMessage message={message} />
            )}
            {/* <hr />
            {message?.status} */}
          </div>
        </div>
      </div>
    </div>
  );
};
