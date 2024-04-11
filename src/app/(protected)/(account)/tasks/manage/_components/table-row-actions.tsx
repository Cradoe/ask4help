import { HorizontalEllipsisDropdown } from "components/horizontal-ellipsis";
import { EditTaskModal } from "./edit-task-modal";
import { SopTask } from "interfaces";
import { CloseSopTask } from "./close-sop-task";
import { SopTaskDetailsModal } from "components/sop-task-details-modal";

export const TableRowActions = ({ row }: { row: any }) => {
  const { original } = row;
  const task: SopTask = original;

  return (
    <HorizontalEllipsisDropdown>
      <SopTaskDetailsModal task={task} />

      {task?.status === "Active" && <EditTaskModal task={task} />}

      {task?.status === "Active" && <CloseSopTask taskId={task?.id} />}

      {/* delete customer */}
    </HorizontalEllipsisDropdown>
  );
};
