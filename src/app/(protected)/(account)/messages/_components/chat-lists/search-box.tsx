import { DebouncedInput } from "components/input/debounced-input";
import { HiOutlineSearch } from "react-icons/hi";

export const SearchBox = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery?: string;
  setSearchQuery: Function;
}) => {
  return (
    <form action="" className="px-6">
      <DebouncedInput
        radius="rounded-full"
        className="h-12"
        leftIcon={<HiOutlineSearch className="text-xl" />}
        placeholder="Search for messages"
        value={searchQuery || ""}
        onChange={(value) => setSearchQuery(value)}
      />
    </form>
  );
};
