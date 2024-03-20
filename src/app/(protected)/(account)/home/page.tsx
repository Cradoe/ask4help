import clsx from "clsx";
import { archivo } from "lib/font";
import { ProfileProgress } from "./_components/profile-progress";
import { TipsForSuccess } from "./_components/tips-for-success";
import { InterestSearch } from "./_components/interest-search";
import { SuggestedConnections } from "./_components/suggested-connections";

export default function Page() {
  return (
    <div className="bg-white rounded-3xl py-10 px-8 lg:mr-12 xl:mr-20">
      <section>
        <h1 className={clsx("text-3xl", archivo.className)}>Welcome! 👋</h1>
        <p className="text-sm">What do you like to do today?</p>
        <ProfileProgress />
      </section>
      <hr className="my-10" />
      <InterestSearch />
      <hr className="my-10" />
      <SuggestedConnections />
      <hr className="my-10" />
      <TipsForSuccess />
    </div>
  );
}
