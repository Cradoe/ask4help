"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { EducationGoalItem } from "./education-goal-item";
import { useEducationGoal } from "hooks/education";
import { EducationGoal } from "interfaces";
import { Skeleton } from "components/skeleton";
import { useParams } from "next/navigation";

export const EducationGoals = () => {
  const params = useParams();
  const userId = params.userId?.toString() || "";
  const { data: goals, isPending } = useEducationGoal(userId);

  return (
    <section className="rounded-3xl bg-white px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl", archivo.className)}>Education Goal</h2>
      </div>

      <div className="pt-10 space-y-2">
        {isPending && <Skeleton borderRadius={30} height={140} />}

        {goals?.map((goal: EducationGoal) => (
          <EducationGoalItem goal={goal} key={goal.id} />
        ))}
      </div>
    </section>
  );
};
