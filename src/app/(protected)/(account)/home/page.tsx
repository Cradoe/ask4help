import clsx from "clsx";
import { archivo } from "lib/font";
import { ProfileProgress } from "./_components/profile-progress";
import { TipsForSuccess } from "./_components/tips-for-success";

export default function Page() {
  return (
    <div className="bg-white rounded-3xl py-10 px-8">
      <section>
        <h1 className={clsx("text-3xl", archivo.className)}>Welcome! 👋</h1>
        <p className="text-sm">What do you like to do today?</p>
        <ProfileProgress />
      </section>
      <hr className="my-10" />
      <TipsForSuccess />
    </div>
  );
}
