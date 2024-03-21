"use client";
import { PaginationProps } from "./type";

export const Pagination = ({
  totalPages,
  currentPage,
  onPaginate,
}: PaginationProps) => {
  return (
    <div className="flex gap-5 flex-wrap justify-end items-center">
      {totalPages &&
        Number(totalPages) > 1 &&
        [...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`flex items-center justify-center h-10 w-10 text-white  ease-in-out duration-200 rounded ${
              Number(currentPage) === index + 1
                ? "bg-primary hover:bg-primary/80"
                : "bg-black hover:bg-primary-500"
            }`}
            onClick={() => onPaginate(index + 1)}
            aria-label={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};
