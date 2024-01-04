"use client";
import { Accordion } from "@szhsin/react-accordion";
import { FaqItem } from "./faq-item";
import { FAQ_CONTENTS } from "lib/contents";

export const Faqs = () => {
  return (
    <section className="my-40 px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl lg:w-2/3 mx-auto">
      <h4 className="font-medium text-2xl lg:text-3xl 2xl:text-5xl">
        Frequently Asked Questions
      </h4>
      <div className="mt-10">
        <Accordion
          allowMultiple
          className="space-y-5"
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
