"use client";
import { AccordionItem as Item } from "@szhsin/react-accordion";
import clsx from "clsx";
import { TfiAngleUp } from "react-icons/tfi";

export const FaqItem = ({
  header,
  content,
  ...rest
}: {
  header: string;
  content: string;
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className="font-medium w-3/4 xl:w-2/4">{header}</div>
        <div
          className={clsx(
            "ml-auto transition-transform duration-200 ease-out h-10 w-10 flex items-center justify-center rounded-full",
            isEnter ? "rotate-180 bg-primary-50" : "bg-primary-600"
          )}
        >
          <TfiAngleUp />
        </div>
      </>
    )}
    className="border-b border-b-black "
    buttonProps={{
      className: () => ` flex w-full p-4 text-left hover:bg-slate-100`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  >
    <div className="text-sm lg:text-base">{content}</div>
  </Item>
);
