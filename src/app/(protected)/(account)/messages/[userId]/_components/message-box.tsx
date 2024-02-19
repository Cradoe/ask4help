"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { Textarea } from "components/textarea";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { sendMessageValidationSchema } from "validations";
import { InferType } from "yup";

export const MessageBox = ({ sendMessage }: { sendMessage: Function }) => {
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
    <form className="relative h-32 border border-slate-400 rounded-xl px-1">
      <Textarea
        className="h-14 resize-none border-none focus:outline-transparent mt-0 pt-0"
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
            "text-xs gap-2 items-center py-1 rounded-full px-3 flex py-1.5 duration-200 ease-in-out  focus:outline-2 focus:outline-secondary-500",
            watch("content")
              ? "bg-primary-600 hover:bg-primary-600/80 text-black"
              : "bg-neutral-200 text-gray-500"
          )}
          onClick={handleSubmit(sendToServer)}
          disabled={!watch("content")}
        >
          <IoIosSend />
          Send
        </button>
      </div>
    </form>
  );
};
