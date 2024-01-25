"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { SubmitHandler, useForm } from "react-hook-form";
import { waitlistValidationSchema } from "validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { Input } from "components/input";
import { Button } from "components/button";
import { UserTypeSelect } from "components/user-type-select";
import { Select } from "components/select";
import { ICountry, countries } from "countries-list";

interface FormProps {
  onSubmit: (data: InferType<typeof waitlistValidationSchema>) => void;
  isSubmitting: boolean;
}

export const WaitlistForm = ({ onSubmit, isSubmitting }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      userType: "student",
    },
    resolver: yupResolver(waitlistValidationSchema),
  });

  const handleData: SubmitHandler<
    InferType<typeof waitlistValidationSchema>
  > = (data) => onSubmit(data);

  console.log("countries", countries);

  return (
    <div className="p-8 lg:p-24 rounded-2xl bg-secondary-600">
      <h5
        className={clsx(
          "text-xl lg:text-5xl font-bold mb-5 lg:mb-10",
          archivo.className
        )}
      >
        Join the waitlist
      </h5>
      <div>
        <form onSubmit={handleSubmit(handleData)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <Input
              label="Full Name"
              placeholder="Your full name"
              error={errors.fullname}
              labelClassName="text-white text-base"
              className="bg-transparent border-0 rounded-none border-b border-b-[#E3E0F2] placeholder-white text-white font-light px-0"
              {...register("fullname", { required: true })}
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Your email address"
              error={errors.email}
              labelClassName="text-white text-base"
              className="bg-transparent border-0 rounded-none border-b  border-b-[#E3E0F2] placeholder-white text-white font-light px-0"
              {...register("email", { required: true })}
            />

            <Select
              label="Country"
              error={errors.country}
              labelClassName="text-white text-base"
              className="bg-transparent border-0 rounded-none border-b border-b-[#E3E0F2] placeholder-white text-white font-light px-0"
              {...register("country", { required: true })}
              options={
                Object.values(countries).map((country: ICountry) => ({
                  label: country.name,
                  value: country.name,
                })) || []
              }
            />

            <UserTypeSelect
              label="Where do you belong?"
              error={errors.userType}
              labelClassName="text-white text-base"
              className="bg-transparent border-0 rounded-none border-b  border-b-[#E3E0F2] placeholder-white text-white font-light px-0"
              onChange={(value: string) => setValue("userType", value)}
            />
          </div>
          <div className="mt-5 lg:mt-16">
            <Button
              type="submit"
              radius="rounded-full"
              className="gap-2 w-36 h-12 text-black"
              isLoading={isSubmitting}
            >
              Join
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
