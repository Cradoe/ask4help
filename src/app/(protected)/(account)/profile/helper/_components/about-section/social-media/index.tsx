"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { SocialMediaLink } from "./social-media-link";
import { UpdateSocialHandles } from "./update-social-media";
import { useSocialMediaHandles } from "hooks/account";
import { Skeleton } from "components/skeleton";

export const SocialLinks = () => {
  const { data: handles, isPending } = useSocialMediaHandles();

  return (
    <section className="rounded-3xl p-10 space-y-4 bg-secondary-50/50">
      <div className="flex items-center justify-between">
        <h3 className={clsx("text-xl", archivo.className)}>Social Links</h3>

        {!isPending && <UpdateSocialHandles handles={handles || []} />}
      </div>

      <div className="flex items-center gap-5 flex-wrap">
        {isPending &&
          [...new Array(4)]?.map((_, index: number) => (
            <Skeleton key={index} height={45} width={150} />
          ))}
        {handles?.map((handle) => (
          <SocialMediaLink key={handle?.platform?.name} socialHandle={handle} />
        ))}
      </div>
    </section>
  );
};
