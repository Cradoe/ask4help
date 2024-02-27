"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { Textarea } from "components/textarea";
import { useWebSocket } from "hooks/web-scoket";
import { useParams } from "next/navigation";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { sendMessageValidationSchema } from "validations";
import { InferType } from "yup";

export const MessageBox = () => {
  const params = useParams();
  const receiverId: string = params.userId as string;

  const { sendMessage } = useWebSocket({ receiverId });

  const { handleSubmit, watch, setValue, reset } = useForm({
    resolver: yupResolver(sendMessageValidationSchema),
  });

  const sendToServer: SubmitHandler<
    InferType<typeof sendMessageValidationSchema>
  > = (data) => {
    sendMessage(data);
    reset();
  };

  return (
    <form className="grid grid-cols-[80%_1fr] md:block relative md:h-32 md:border md:border-slate-400 md:rounded-3xl px-1">
      <Textarea
        className="h-10 md:h-14 resize-none md:border-none md:focus:outline-transparent mt-0 pt-0"
        placeholder="Write a message ..."
        value={watch("content")}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue("content", e.target.value)
        }
      />

      <div className="px-4 flex justify-between items-center">
        <div></div>
        <button
          type="submit"
          className={clsx(
            "text-xs gap-2 flex justify-center items-center py-1 h-10 w-10 md:h-auto md:w-auto rounded-full px-3 flex py-1.5 duration-200 ease-in-out  focus:outline-2 focus:outline-secondary-500",
            watch("content")
              ? "bg-primary-600 hover:bg-primary-600/80 text-black"
              : "bg-neutral-200 text-gray-500"
          )}
          onClick={handleSubmit(sendToServer)}
          disabled={!watch("content")}
        >
          <IoIosSend />
          <span className="hidden md:inline">Send</span>
        </button>
      </div>
    </form>
  );
};
