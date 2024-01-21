import { Header } from "./_components/header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-auth-bg-pattern bg-no-repeat bg-cover bg-center bg-secondary-600 min-h-screen  px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl 3xl:px-wrapper-3xl pt-10 py-20">
      <Header />
      <main className="min-h-[70vh] flex items-center justify-center mt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
