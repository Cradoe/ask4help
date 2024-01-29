import { SectionTitle } from "components/section-title";
import clsx from "clsx";
import { archivo } from "lib/font";
import { ProfileForm } from "./_components/form";
import { StepWizard } from "../_components/step-wizard";

export default function Page() {
  return (
    <div>
      <SectionTitle>SETUP YOUR PROFILE</SectionTitle>

      <h2 className={clsx("text-xl xl:text-2xl mt-5", archivo.className)}>
        Educational Goals
      </h2>
      <StepWizard step={2} />

      <ProfileForm />
    </div>
  );
}
