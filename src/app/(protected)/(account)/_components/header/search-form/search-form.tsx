"use client";
import { Input } from "components/input";
import { DebouncedInput } from "components/input/debounced-input";
import { useSearchForMiniUsers } from "hooks/user";
import { HiOutlineSearch } from "react-icons/hi";
import { SearchResults } from "./search-results";
import { useRef } from "react";

export const SearchForm = () => {
  const ref = useRef();

  const {
    data: searchResults,
    pagination,
    isPending,
    error,
    isError,
    searchQuery,
    setSearchQuery,
  } = useSearchForMiniUsers();

  return (
    <div className="relative">
      <form action="" className="w-[22.1rem]">
        <DebouncedInput
          value={searchQuery || ""}
          onChange={(value) => setSearchQuery(value?.toString())}
          radius="rounded-full"
          className="h-[2.5rem] w-[22.1rem]"
          leftIcon={<HiOutlineSearch className="text-xl" />}
          placeholder="Search for study advisor"
        />
      </form>

      <SearchResults
        isPending={isPending}
        users={searchResults || []}
        searchQuery={searchQuery}
        moreResults={!!pagination?.nextPage}
      />
    </div>
  );
};
