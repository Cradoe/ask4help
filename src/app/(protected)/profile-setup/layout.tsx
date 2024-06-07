import { LeftSection } from "./_components/left-section";
import { RightSection } from "./_components/right-section";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[45%_1fr] min-h-screen">
      <LeftSection />

      <RightSection>{children}</RightSection>
    </main>
  );
}
