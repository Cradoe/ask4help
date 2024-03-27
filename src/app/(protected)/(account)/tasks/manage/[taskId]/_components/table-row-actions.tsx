import { HorizontalEllipsisDropdown } from "components/horizontal-ellipsis";
import { SopTask } from "interfaces";
export const TableRowActions = ({ row }: { row: any }) => {
  const { original } = row;
  const task: SopTask = original;

  return (
    <HorizontalEllipsisDropdown>
      <div>dd</div>
    </HorizontalEllipsisDropdown>
  );
};
