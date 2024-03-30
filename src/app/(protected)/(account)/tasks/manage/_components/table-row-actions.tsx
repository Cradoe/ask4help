import { HorizontalEllipsisDropdown } from "components/horizontal-ellipsis";
import { EditTaskModal } from "./edit-task-modal";
import { SopTask } from "interfaces";
import { TaskDetailsModal } from "./task-details-modal";

export const TableRowActions = ({ row }: { row: any }) => {
  const { original } = row;
  const task: SopTask = original;

  return (
    <HorizontalEllipsisDropdown>
      <TaskDetailsModal task={task} />
      <EditTaskModal task={task} />

      {/* delete customer */}
    </HorizontalEllipsisDropdown>
  );
};
