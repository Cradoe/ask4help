"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { Button } from "components/button";
import { Textarea } from "components/textarea";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { sendMessageValidationSchema } from "validations";
import { InferType } from "yup";

export const MessageBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(sendMessageValidationSchema),
  });

  const handleLogin: SubmitHandler<
    InferType<typeof sendMessageValidationSchema>
  > = (data) => {
    console.log("data", data);
  };

  return (
    <div className="relative h-32 border border-slate-400 rounded-xl">
      <Textarea
        className="h-16 pb-10 resize-none border-none focus:ring-0 mt-0 pt-0"
        placeholder="Write a message ..."
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue("message", e.target.value)
        }
      />

      <div className="px-4 flex justify-between items-center">
        <div></div>
        <button
          className={clsx(
            "text-xs gap-2 items-center py-1 rounded-full px-3 flex py-1.5 duration-200 ease-in-out",
            watch("message")
              ? "bg-primary-600 hover:bg-primary-600/80 text-black"
              : "bg-neutral-200 text-gray-500"
          )}
          onClick={handleSubmit(handleLogin)}
          disabled={!watch("message")}
        >
          <IoIosSend />
          Send
        </button>
      </div>
    </div>
  );
};
