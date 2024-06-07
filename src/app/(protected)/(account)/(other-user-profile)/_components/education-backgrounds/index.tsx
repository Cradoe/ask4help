"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { EducationBackgroundItem } from "./education-background-item";
import { useEducationBackground } from "hooks/education";
import { Skeleton } from "components/skeleton";
import { useParams } from "next/navigation";

export const EducationBackgrounds = () => {
  const params = useParams();
  const userId = params.userId?.toString() || "";
  const { data: educations, isPending } = useEducationBackground(userId);

  return (
    <section className="rounded-3xl bg-white px-3 md:px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("md:text-xl", archivo.className)}>
          Educational Background
        </h2>
      </div>

      <div className="pt-4 md:pt-10 space-y-2">
        {isPending && <Skeleton borderRadius={30} height={140} />}
        {educations?.map((education, index) => (
          <EducationBackgroundItem education={education} key={index} />
        ))}
      </div>
    </section>
  );
};
