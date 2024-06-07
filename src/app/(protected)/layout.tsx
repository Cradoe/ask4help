import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function ProtectedRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  // check if token is in cookie
  // if not redirect to login page
  if (!token || !token?.value) {
    redirect("/");
  }

  return children;
}
