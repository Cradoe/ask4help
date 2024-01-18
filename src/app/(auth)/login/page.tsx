import { Header } from "./_components/header";
import { LoginForm } from "./_components/login-form";

export default function Home() {
  return (
    <div className="bg-auth-bg-pattern bg-no-repeat bg-cover bg-center bg-secondary-600 min-h-screen  px-wrapper md:px-wrapper-md lg:px-wrapper-lg xl:px-wrapper-xl pt-10 py-20">
      <Header />
      <main>
        <LoginForm />
      </main>
    </div>
  );
}
