import { Input } from "components/input";
import { HiOutlineSearch } from "react-icons/hi";

export const SearchForm = () => {
  return (
    <form action="">
      <Input
        radius="rounded-full"
        className="h-[2.5rem] w-[22.1rem]"
        leftIcon={<HiOutlineSearch className="text-xl" />}
        placeholder="Search for study advisor"
      />
    </form>
  );
};
