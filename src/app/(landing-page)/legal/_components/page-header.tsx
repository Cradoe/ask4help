export const PageHeader = ({
  title,
  caption,
}: {
  title: string;
  caption?: string;
}) => {
  return (
    <section className="bg-secondary-600 flex flex-col gap-2 items-center justify-center h-96">
      <h1 className="font-medium text-5xl text-white">{title}</h1>
      {caption && <div className="text-xs text-neutral-200">{caption}</div>}
    </section>
  );
};
