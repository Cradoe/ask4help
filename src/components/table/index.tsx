"use client";
import { Pagination } from "components/pagination";
import { Skeleton } from "components/skeleton";
import { TableInstance, TableInterface } from "interfaces";
import { useMemo } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useTable, useRowSelect } from "react-table";

const removeKeyProp = (obj: any) => {
  const newObj = { ...obj };
  delete newObj.key;
  return newObj;
};
export const Table = ({
  data: tableData,
  columns: tableColumns,
  title,
  isLoading = false,
  meta,
  setPage,
}: Readonly<TableInterface>) => {
  const columns = useMemo(() => tableColumns, [tableColumns]);
  const data = useMemo(() => tableData || [], [tableData]);

  const tableInstance: TableInstance = useTable(
    {
      columns,
      data,
    },
    useRowSelect
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    tableInstance;

  return (
    <div className="flex flex-col ">
      <div className={`overflow-auto sm:-mx-6 lg:-mx-8 `}>
        <div className="align-middle inline-block w-full sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-auto border-[#D4D4D8] border divide-y divide-[#D4D4D8]">
            <div
              className={`bg-white px-6  py-4 whitespace-nowrap flex flex-col md:flex-row ${
                title ? "justify-between" : "justify-end"
              }`}
            >
              <div className="flex gap-5 items-center">
                {title && (
                  <h3 className="text-sm font-bold" id="table-title">
                    {title}
                  </h3>
                )}
              </div>

              {meta && (
                <div className="text-xs text-gray-500 flex gap-8 items-center justify-between">
                  {meta && meta?.page && meta?.perpage && meta?.total && (
                    <span className="flex items-center gap-1">
                      <div>Showing</div>
                      {(meta?.page! - 1) * meta?.perpage! + 1} -{" "}
                      {Math.min(meta?.page! * meta?.perpage!, meta?.total!)} of{" "}
                      {meta?.total} {meta?.total ?? 1 > 1 ? "items" : "item"}
                    </span>
                  )}

                  {meta?.pages > 1 ? (
                    <div>
                      <button
                        className={` ${
                          Number(meta?.page) > 1
                            ? "text-black"
                            : "text-[#9CA3AF]"
                        } `}
                        onClick={() => setPage?.(Number(meta?.page) - 1)}
                        disabled={Number(Number(meta?.page)) === 1}
                      >
                        <TfiAngleLeft />
                      </button>
                      <button
                        className={`ml-4 ${
                          Number(meta?.pages) > Number(meta?.page)
                            ? "text-black"
                            : "text-[#9CA3AF]"
                        } `}
                        onClick={() => setPage?.(Number(meta?.page) + 1)}
                        disabled={Number(meta?.pages) === Number(meta?.page)}
                      >
                        <TfiAngleRight />
                      </button>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            <div className="overflow-auto z-10 w-full">
              <table
                className="w-full divide-y divide-[#D4D4D8]"
                // @ts-ignore
                {...removeKeyProp(getTableProps())}
                aria-labelledby="table-title"
              >
                <thead className="bg-secondary-100 divide-y divide-[#D2E1EF] border-t-0">
                  {headerGroups?.map((headerGroup: any, index: number) => (
                    <tr
                      key={index}
                      {...removeKeyProp(headerGroup.getHeaderGroupProps())}
                    >
                      {headerGroup.headers.map((column: any, idx: number) => (
                        <th
                          key={idx}
                          scope="col"
                          className="px-6 py-4 text-left text-xs font-medium text-black"
                          {...removeKeyProp(column.getHeaderProps())}
                        >
                          <button
                            disabled={column.disableSortBy || isLoading}
                            className={`
														${column.disableSortBy ? "cursor-default" : ""}
														`}
                          >
                            <div className="flex items-center">
                              <span>{column.render("Header")}</span>

                              {/* {!column.disableSortBy && (
																<div className="flex flex-col ml-3">
																	<div>
																		<TfiAngleUp
																			className="text-[0.53rem]"
																			aria-label="Sorted descending"
																		/>
																	</div>

																	<div>
																		<TfiAngleDown
																			className="text-[0.53rem]"
																			aria-label="Sorted ascending"
																		/>
																	</div>
																</div>
															)} */}
                            </div>
                          </button>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-secondary-50/30 divide-y divide-[#D2E1EF]"
                  // @ts-ignore
                  {...removeKeyProp(getTableBodyProps())}
                >
                  {/* if isLoading, use skeleton rows  */}
                  {isLoading &&
                    [...Array(10)].map((_, i) => (
                      <tr key={i} className=" hover:bg-gray-100">
                        {headerGroups?.[0]?.headers.map((column: any) => {
                          return (
                            <td
                              key={column.id}
                              colSpan={column.colSpan}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              <div className="flex items-center w-full">
                                <div className="text-sm text-gray-900 w-full">
                                  <Skeleton />
                                </div>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  {/* if not isLoading and page has rows */}
                  {!isLoading &&
                    rows?.map((row: any, i: number) => {
                      // @ts-ignore
                      prepareRow(row);
                      return (
                        <tr
                          key={i}
                          className="hover:bg-gray-100"
                          {...removeKeyProp(row.getRowProps())}
                        >
                          {row.cells.map((cell: any, index: number) => {
                            return (
                              <td
                                key={index}
                                className="px-6 py-4 whitespace-nowrap"
                                {...removeKeyProp(cell.getCellProps())}
                              >
                                <div className="flex items-center">
                                  <div className="text-sm text-gray-900">
                                    {cell.render("Cell")}
                                  </div>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  {/* if empty row  */}
                  {!isLoading && rows?.length === 0 && (
                    <tr className="h-[50vh]">
                      <td
                        colSpan={headerGroups?.[0]?.headers?.length}
                        className="px-6 py-4 whitespace-nowrap"
                      >
                        <div className="flex justify-center flex-col items-center w-full">
                          <HiOutlineExclamationTriangle className="text-4xl text-gray-900" />
                          <span className="text-sm text-gray-900">
                            No data is available
                          </span>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            {meta && meta?.page && meta?.pages > 1 && (
              <Pagination
                currentPage={meta?.page}
                totalPages={meta?.pages}
                onPaginate={(page: number) => {
                  setPage?.(page);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
