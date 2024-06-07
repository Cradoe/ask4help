"use client";
import clsx from "clsx";
import { archivo } from "lib/font";
import { SocialLinks } from "./social-media";
import { Skeleton } from "components/skeleton";
import { useMemo } from "react";
import { useUserDetails } from "hooks/user";
import { useParams } from "next/navigation";

export const AboutSection = () => {
  const params = useParams();
  const userId = params.userId?.toString() || "";
  const { data: user, isPending: isLoadingUser } = useUserDetails(userId);

  return (
    <section className="rounded-3xl bg-white px-3 md:px-12 pt-10 pb-16 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={clsx("md:text-xl", archivo.className)}>About</h2>
      </div>

      {isLoadingUser && (
        <div>
          {[...new Array(10)].map((_, index) => (
            <Skeleton height={10} key={index} />
          ))}
        </div>
      )}

      {user && <BioParagraphs bio={user?.bio} />}

      <div className="pt-10">
        <SocialLinks />
      </div>
    </section>
  );
};

const BioParagraphs = ({ bio }: { bio: string }) => {
  const paragraphs = useMemo(() => bio?.split("\n\n"), [bio]);

  return (
    <div className="text-sm space-y-3 text-justify">
      {paragraphs?.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
