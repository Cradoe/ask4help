import clsx from "clsx";
import { archivo } from "lib/font";
import Image from "next/image";

export const AppFeature = ({
  feature,
}: {
  feature: { image: string; title: string; description: string };
}) => {
  return (
    <div className="bg-white rounded-t-2xl xl:rounded-t-3xl rounded-b-3xl w-[90%] border border-neutral-400 border-t-0 border-1">
      <Image
        src={feature.image}
        alt={feature.title}
        height={400}
        width={600}
        className="w-full h-auto"
      />
      <div className="px-4 md:px-8 py-10">
        <div
          className={clsx(
            "text-2xl md:text-3xl font-medium text-secondary-500",
            archivo.className
          )}
        >
          {feature.title}
        </div>
        <p className="my-3 md:my-6 text-sm md:text-base">
          {feature.description}
        </p>
      </div>
    </div>
  );
};
