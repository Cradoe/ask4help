import { redirect } from "next/navigation";

const Page = () => {
  // redirect to get started page if no URL param
  redirect("/get-started/user");
};

export default Page;
