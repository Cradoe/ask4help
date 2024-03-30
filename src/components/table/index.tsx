"use client";
import { Skeleton } from "components/skeleton";
import { TableInstance, TableInterface } from "interfaces";
import { useMemo } from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useTable, useRowSelect } from "react-table";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import clsx from "clsx";

const removeKeyProp = (obj: any) => {
  const newObj = { ...obj };
  delete newObj.key;
  return newObj;
};
export const Table = ({
  data: tableData,
  columns: tableColumns,
  isLoading = false,
  pagination,
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

            <div>
              {pagination &&
              (pagination?.nextPage || pagination?.previousPage) ? (
                <div className="flex items-center justify-between text-sm font-light sm:px-6 lg:px-8 py-1 bg-secondary-50/30">
                  <div>
                    {pagination?.previousPage && (
                      <button
                        className={clsx(
                          "flex items-center gap-2 focus:outline-secondary-500 p-3 hover:text-seondary-500 group",
                          pagination?.previousPage
                            ? "text-black"
                            : "text-[#9CA3AF]"
                        )}
                        onClick={() => setPage?.(pagination?.previousPage!)}
                      >
                        <FaArrowLeftLong className="group-hover:translate-x-1 ease-in-out duration-300" />{" "}
                        <span>Previous</span>
                      </button>
                    )}
                  </div>

                  <div>
                    {pagination?.nextPage && (
                      <button
                        className={clsx(
                          "flex items-center gap-2  focus:outline-secondary-500  p-3 hover:text-seondary-500 group",
                          pagination?.nextPage ? "text-black" : "text-[#9CA3AF]"
                        )}
                        onClick={() => setPage?.(pagination?.nextPage!)}
                      >
                        <span>Next</span>{" "}
                        <FaArrowRightLong className="group-hover:-translate-x-1 ease-in-out duration-300" />
                      </button>
                    )}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
