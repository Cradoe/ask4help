"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { WorkExperienceItem } from "./work-experience-item";
import { useWorkExperiences } from "hooks/work-experience";
import { Skeleton } from "components/skeleton";
import { useParams } from "next/navigation";

export const WorkExperiences = () => {
  const params = useParams();
  const userId = params.userId?.toString() || "";
  const { data: experiences, isPending } = useWorkExperiences(userId);

  return (
    <section className="rounded-3xl bg-white px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl", archivo.className)}>Work Experience</h2>
      </div>

      <div className="pt-10 space-y-2">
        {isPending && <Skeleton borderRadius={30} height={140} />}

        {experiences?.map((experience) => (
          <WorkExperienceItem experience={experience} key={experience.id} />
        ))}
      </div>
    </section>
  );
};
