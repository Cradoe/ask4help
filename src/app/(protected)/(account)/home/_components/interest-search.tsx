"use client";

import clsx from "clsx";
import { Button } from "components/button";
import { SearchableSelect } from "components/select/searchable-select";
import { useAccount } from "hooks/account";
import { useInterests } from "hooks/interest";
import { Interest } from "interfaces";
import { UserRole } from "lib/enum";
import { archivo } from "lib/font";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { InferType } from "yup";

export const InterestSearch = () => {
  const { data: interests } = useInterests();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const sendToServer: SubmitHandler<InferType<any>> = (data) => {
    console.log("data", data);

    if (!data?.interests) return;

    router.push(`/search?interests=${data?.interests}`);
  };

  const { data: user } = useAccount();
  return (
    <section className="bg-secondary-50/50 rounded-xl p-6 md:p-10">
      <h2 className={clsx("md:text-xl font-medium", archivo.className)}>
        What are you searching for?
      </h2>
      <p className="text-xs md:text-sm">
        We will match you with the perfect {!user && "people"}{" "}
        {user?.role === UserRole.USER && "advisor"}{" "}
        {user?.role === UserRole.HELPER && "students"} based on your interests
        and preferences.
      </p>

      <div>
        <form
          onSubmit={handleSubmit(sendToServer)}
          className="mt-2 md:mt-6 flex flex-col md:flex-row items-center gap-3"
        >
          <div className="w-full md:w-3/4 ">
            <SearchableSelect
              radius="rounded-full"
              error={errors.interests}
              multi={true}
              onChange={(
                selectedOptions: { label: string; value: string }[]
              ) => {
                setValue(
                  "interests",
                  selectedOptions?.map((item) => item.value)
                );
              }}
              options={
                interests
                  ?.filter((interest) => interest?.role !== user?.role)
                  ?.map((interest: Interest) => ({
                    label: interest.name,
                    value: interest.id,
                  })) || []
              }
            />
          </div>

          <div className="w-full md:w-1/4 ">
            <Button
              type="submit"
              className="w-full block mt-3 h-12"
              radius="rounded-full focus:rounded-full"
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
