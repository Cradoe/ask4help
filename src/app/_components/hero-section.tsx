import clsx from "clsx";
import { LinkButton } from "components/link-button";
import { archivo } from "lib/font";
import { FaArrowRightLong } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <section className="relative bg-mobile-hero-bg md:bg-desktop-hero-bg min-h-[45rem] md:min-h-[30rem] xl:min-h-[50rem] 2xl:min-h-[55rem] 4xl:min-h-[100rem] w-screen bg-cover bg-bottom grid md:grid-cols-2 2xl:grid-cols-[40%_1fr] pt-20 md:py-20 lg:py-36 md:items-center px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl text-center md:text-left">
      <div>
        <h1
          className={clsx(
            "text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl 4xl:text-8xl font-medium text-white leading-none lg:leading-tight",
            archivo.className
          )}
        >
          Studying Abroad Should Not Be a Headache
        </h1>
        <div className="text-xs w-[85%] md:w-full mx-auto md:text-sm xl:text-base 4xl:text-xl font-light lg:font-normal mt-2 text-white">
          Ask4help provides an avenue for prospective students who wish to study
          abroad, to connect with current students and alumni who can provide
          much needed information and guidance
        </div>
        <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
          <LinkButton
            size="md"
            href="/#waitlist"
            radius="rounded-full"
            className="gap-2 h-12"
          >
            <span>Join Waitlist</span> <FaArrowRightLong />
          </LinkButton>
        </div>
      </div>
    </section>
  );
};
