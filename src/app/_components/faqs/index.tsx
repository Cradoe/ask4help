"use client";
import { Accordion } from "@szhsin/react-accordion";
import { FaqItem } from "./faq-item";
import { FAQ_CONTENTS } from "lib/contents";
import clsx from "clsx";
import { archivo } from "lib/font";

export const Faqs = () => {
  return (
    <section
      id="faqs"
      className="mt-24 mb-40 px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl lg:w-2/3 mx-auto"
    >
      <h4
        className={clsx(
          "font-medium text-xl lg:text-3xl 2xl:text-5xl",
          archivo.className
        )}
      >
        Frequently Asked Questions
      </h4>
      <div className="mt-4 md:mt-10">
        <Accordion
          allowMultiple
          className="space-y-6"
          transition
          transitionTimeout={200}
        >
          {FAQ_CONTENTS?.map(({ header, content }, i) => (
            <FaqItem header={header} key={i} content={content} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};
