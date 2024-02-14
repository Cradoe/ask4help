import { Input } from "components/input";
import { HiOutlineSearch } from "react-icons/hi";

export const SearchBox = () => {
  return (
    <form action="" className="px-6">
      <Input
        radius="rounded-full"
        className="h-12"
        leftIcon={<HiOutlineSearch className="text-xl" />}
        placeholder="Search for messages"
      />
    </form>
  );
};
