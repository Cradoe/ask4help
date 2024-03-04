"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { EducationGoalItem } from "./education-goal-item";
import { useEducationGoal } from "hooks/education";
import { EducationGoal } from "interfaces";
import { AddEducationGoalModal } from "./add-education-goal";
import { Skeleton } from "components/skeleton";

export const EducationGoals = () => {
  const { data: goals, isPending } = useEducationGoal();

  return (
    <section className="rounded-3xl bg-white px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("text-xl", archivo.className)}>Education Goal</h2>

        <AddEducationGoalModal />
      </div>

      <div className="pt-10 space-y-2">
        {isPending && <Skeleton height={140} />}

        {goals?.map((goal: EducationGoal) => (
          <EducationGoalItem goal={goal} key={goal.id} />
        ))}
      </div>
    </section>
  );
};
