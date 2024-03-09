"use client";

import { useAccount } from "hooks/account";
import { Message } from "interfaces";
import { FaUser } from "react-icons/fa";
import { getTimeFromDate } from "lib/util";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAcknowledgeMessage } from "hooks/web-scoket";
import { useUserDetails } from "hooks/user";

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

  return (
    <div className={`flex justify-start`}>
      <div className={`flex justify-start w-[80%] gap-1`}>
        <div>
          <div className="text-3xl rounded-full p-2 border border-gray-200 bg-secondary-600 text-white">
            <FaUser aria-hidden="true" />
          </div>
        </div>

        <div>
          <div className="flex gap-3">
            {/* sender details  */}
            {message?.sender?.id === myDetails?.id ? (
              <div className="text-secondary-600 font-medium">You</div>
            ) : (
              <Link
                href={`/profile/${receiver?.id}`}
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
            <Paragraphs content={message?.content || ""} />
            {/* <hr />
            {message?.status} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Paragraphs = ({ content }: { content: string }) => {
  const paragraphs = content?.split("\n");

  return (
    <div>
      {paragraphs?.map((paragraph: string, index: number) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
