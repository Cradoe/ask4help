import { redirect } from "next/navigation";

const Page = () => {
  // use student as default role
  redirect("/get-started/user");
};

export default Page;
