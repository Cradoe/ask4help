import clsx from "clsx";
import { Button } from "components/button";
import { archivo } from "lib/font";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export const SuccessMessage = ({ onClose }: { onClose: Function }) => {
  return (
    <div className="relative py-8 lg:py-12 rounded-2xl bg-white text-black text-center">
      <Image
        src="/success-icons.svg"
        width={300}
        height={300}
        alt=""
        className="absolute top-0 left-[10%] w-[80%]"
      />
      <div className="px-8 lg:px-24">
        <div className="mt-5 xl:mt-24 h-10 xl:h-20 w-10 xl:w-20 bg-primary-500 text-white text-xl xl:text-4xl flex items-center justify-center mx-auto rounded-full font-bold">
          <FaCheck />
        </div>
        <h5
          className={clsx(
            "md:text-xl lg:text-5xl font-bold my-5 md:my-10",
            archivo.className
          )}
        >
          Congratulations! 🎉
        </h5>
        <p className="w-full 2xl:w-2/4 mx-auto text-sm lg:text-lg text-[#484559]">
          You've just taken the first exciting step towards a world of
          educational opportunities. By joining our waitlist, you've secured
          your spot for exclusive access to personalized advisory services that
          will make your schooling abroad dreams a reality.
        </p>
      </div>
      <hr className="my-10" />
      <div className="flex justify-center">
        <Button
          onClick={() => onClose()}
          radius="rounded-full"
          className="w-28 lg:w-36"
        >
          Done
        </Button>
      </div>
    </div>
  );
};
