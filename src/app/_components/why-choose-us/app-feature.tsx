import Image from "next/image";

export const AppFeature = ({
  feature,
}: {
  feature: { image: string; title: string; description: string };
}) => {
  return (
    <div className="bg-white rounded-t-[2rem] rounded-b-3xl w-[90%] border border-neutral-400 border-1">
      <Image
        src={feature.image}
        alt={feature.title}
        height={200}
        width={200}
        className="w-full h-auto"
      />
      <div className="px-8 py-10">
        <div className="text-2xl font-bold text-secondary-500">
          {feature.title}
        </div>
        <p className="my-6">{feature.description}</p>
      </div>
    </div>
  );
};
