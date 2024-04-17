import { cookies } from "next/headers";
import { Header } from "./_components/header";
import { redirect } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  // check if token is in cookie
  // redirect to home page
  if (token && token?.value) {
    redirect("/home");
  }

  return (
    <div className="bg-auth-bg-pattern bg-no-repeat bg-cover bg-center bg-secondary-600 min-h-screen  px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl 3xl:px-wrapper-3xl 4xl:px-wrapper-4xl pt-10 py-20">
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center mt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
