import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

export default function ProtectedRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F6F4F3] min-h-screen px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl 3xl:px-wrapper-3xl 4xl:px-wrapper-4xl pt-10 py-20">
      <Header />
      <div className="grid grid-cols-[20%_1fr] gap-5 mt-16">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
