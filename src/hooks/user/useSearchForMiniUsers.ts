import { useQuery } from "@tanstack/react-query";
import { clientRequest } from "services/client";
import { Pagination, User } from "interfaces";
import { useEffect, useRef, useState } from "react";
import { useEscapeKeyListener, useOnClickOutside } from "hooks/common";
import { usePathname, useRouter } from "next/navigation";

export const useSearchForMiniUsers = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(true);

  useOnClickOutside(dropdownRef, () => setShowDropdown(false));
  useEscapeKeyListener(() => setShowDropdown(false));
  const [searchQuery, setSearchQuery] = useState<string>();

  const { data, isPending, error, isError } = useQuery<{
    data: User[];
    pagination: Pagination;
  }>({
    queryKey: ["users", "search", searchQuery],
    queryFn: () => {
      return clientRequest.user.miniSearch(searchQuery || "");
    },
    enabled: !!searchQuery,
  });

  // clear form when user navigate to another page
  useEffect(() => {
    if (searchQuery) {
      setSearchQuery("");
    }
  }, [pathname]);

  useEffect(() => {
    if (searchQuery) {
      setShowDropdown(true);

      // add query to url
      const params = new URLSearchParams();
      params.append("q", searchQuery);

      // Get the current pathname and search parameters
      const searchParams = params.toString();

      // Construct the new URL with the updated search parameters
      const newUrl = searchParams ? `${pathname}?${searchParams}` : pathname;

      // Replace the current URL with the new URL
      router.replace(newUrl);
    }
  }, [searchQuery, pathname]);

  return {
    data: data?.data,
    pagination: data?.pagination,
    isPending,
    error,
    isError,
    searchQuery,
    setSearchQuery,
    showDropdown,
    dropdownRef,
  };
};
