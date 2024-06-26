"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { EducationBackgroundItem } from "./education-background-item";
import { useEducationBackground } from "hooks/education";
import { Skeleton } from "components/skeleton";
import dynamic from "next/dynamic";

const AddEducationBackgroundModal = dynamic(() =>
  import("./add-education-background").then(
    (mod) => mod.AddEducationBackgroundModal
  )
);

export const EducationBackgrounds = () => {
  const { data: educations, isPending } = useEducationBackground();

  return (
    <section className="rounded-3xl bg-white px-3 md:px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className={clsx("md:text-xl", archivo.className)}>
          Educational Background
        </h2>

        <AddEducationBackgroundModal />
      </div>

      <div className="pt-10 space-y-2">
        {isPending && <Skeleton borderRadius={30} height={140} />}
        {educations?.map((education, index) => (
          <EducationBackgroundItem education={education} key={index} />
        ))}
      </div>
    </section>
  );
};
