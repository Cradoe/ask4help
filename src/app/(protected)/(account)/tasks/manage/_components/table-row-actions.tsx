import { HorizontalEllipsisDropdown } from "components/horizontal-ellipsis";
import { EditTaskModal } from "./edit-task-modal";
import { SopTask } from "interfaces";

export const TableRowActions = ({ row }: { row: any }) => {
  const { original } = row;
  const task: SopTask = original;

  return (
    <HorizontalEllipsisDropdown>
      {/* edit customer  */}
      <EditTaskModal task={task} />

      {/* delete customer */}
    </HorizontalEllipsisDropdown>
  );
};
