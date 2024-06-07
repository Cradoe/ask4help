import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { clientRequest } from "services/client";

export const useCountUsers = () => {
  const { data, isPending, error, isError } = useQuery<{ count: number }>({
    queryKey: ["user", "count"],
    queryFn: () => {
      return clientRequest.user.count();
    },
  });

  const formattedCount = useMemo(() => {
    if (data?.count) {
      if (data?.count < 1000) {
        return data?.count.toString();
      } else {
        const roundedCount = Math.round(data?.count / 100) / 10;
        if (Number.isInteger(roundedCount)) {
          return `${roundedCount}k`;
        } else {
          return `${roundedCount.toFixed(1)}k`;
        }
      }
    }
  }, [data]);
  return { data, formattedCount, isPending, error, isError };
};
