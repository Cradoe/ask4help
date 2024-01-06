"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { SubmitHandler, useForm } from "react-hook-form";
import { newsletterValidationSchema } from "validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { InferType } from "yup";
import { Input } from "components/input";
import { Button } from "components/button";
import { UserTypeSelect } from "components/user-type-select";

export const NewsletterForm = () => {
  //   const { mutate: signIn, isPending: isSubmitting } = ()=>{};

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(newsletterValidationSchema),
  });

  const handleLogin: SubmitHandler<
    InferType<typeof newsletterValidationSchema>
  > = (data) => {
    // signIn({ data })
  };

  return (
    <div className="relative h-[50vh] w-full">
      <div className="bg-secondary-600 p-8 lg:p-24 rounded-2xl absolute -top-20 md:-top-32 lg:-top-52 4xl:-top-20 left-[6%] w-[88%]">
        <h5
          className={clsx(
            "text-xl lg:text-5xl font-bold mb-5 lg:mb-10",
            archivo.className
          )}
        >
          Join the waitlist
        </h5>
        <div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              <div className="md:col-span-2">
                <Input
                  label="Full Name"
                  placeholder="Your full name"
                  error={errors.fullname}
                  labelClassName="text-white text-base"
                  className="bg-transparent border-0 rounded-none border-b border-b-[#E3E0F2] placeholder-white text-white font-light px-0"
                  {...register("fullname", { required: true })}
                />
              </div>

              <Input
                label="Email Address"
                type="email"
                placeholder="Your email address"
                error={errors.email}
                labelClassName="text-white text-base"
                className="bg-transparent border-0 rounded-none border-b  border-b-[#E3E0F2] placeholder-white text-white font-light px-0"
                {...register("email", { required: true })}
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
              >
                Join
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
