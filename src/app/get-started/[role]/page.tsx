import { UserRole } from "lib/enum";
import { redirect } from "next/navigation";
import { LeftSection } from "./_components/left-section";
import { RightSection } from "./_components/right-section";

export default function Page({ params }: { params: { role: string } }) {
  const { role } = params;

  // check if role is valid or redirect to user
  if (!role || !Object.values(UserRole).includes(role as UserRole)) {
    redirect("/get-started/user");
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-[45%_1fr] min-h-screen">
      <LeftSection role={role} />

      <RightSection role={role} />
    </main>
  );
}
