"use client";
import { Modal } from "components/modal";
import { SopTask } from "interfaces";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { GrDocumentVerified } from "react-icons/gr";
import { TbProgress } from "react-icons/tb";
import { addCommaToNumber } from "lib/util";
import { BiCalendarEvent } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa6";

export const TaskDetailsModal = ({ task }: { task: SopTask }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <Modal
        className="lg:w-[70vw] xl:w-[40vw]"
        show={showModal}
        modalTitle="View details"
        buttonTitle="SOP task details"
        trigerButtonClass="w-full block border-0 font-light"
        triggerButtonVariant="transparent"
        trigerButtonJustifyContent="justify-start"
        onShowCallback={() => setShowModal(true)}
        onCloseCallback={() => setShowModal(false)}
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary-50/70 rounded-xl px-3 lg:px-5 py-3 lg:py-6">
            <div className="flex justify-between items-center gap-1 lg:gap-5">
              <div className="font-medium">Task Title</div>
              <div>
                <GrDocumentVerified className="text-2xl lg:text-5xl opacity-10" />
              </div>
            </div>
            <div className="text-gray-700 text-sm">{task?.title}</div>
          </div>

          <div className="bg-secondary-50/70 rounded-xl px-5 py-6">
            <div className="flex justify-between items-center gap-1 lg:gap-5">
              <div className="font-medium">Who should get the new task?</div>
              <div>
                <FiEye className="text-2xl lg:text-5xl opacity-10" />
              </div>
            </div>
            <div className="text-gray-700 text-sm">All connections</div>
          </div>

          <div className="bg-secondary-50/70 rounded-xl px-5 py-6 col-span-2">
            <div className="flex justify-between items-center gap-1 lg:gap-5">
              <div className="font-medium">Task Description</div>
              <div>
                <GrDocumentVerified className="text-2xl lg:text-5xl opacity-10" />
              </div>
            </div>
            <div className="text-gray-700 text-sm">{task?.description}</div>
          </div>

          <div className="bg-secondary-50/70 rounded-xl px-5 py-6">
            <div className="flex justify-between items-center gap-1 lg:gap-5">
              <div className="font-medium">Status</div>
              <div>
                <TbProgress className="text-2xl lg:text-5xl opacity-10" />
              </div>
            </div>
            <div className="text-gray-700 text-sm">
              {task?.status?.toString()?.toLowerCase() === "active" && (
                <span className="bg-secondary-100 px-5 py-1 rounded-full">
                  {task?.status}
                </span>
              )}

              {task?.status?.toString()?.toLowerCase() === "completed" && (
                <span className="bg-green-200 px-5 py-1 rounded-full">
                  {task?.status}
                </span>
              )}

              {task?.status?.toString()?.toLowerCase() === "reviewing" && (
                <span className="bg-blue-200 px-5 py-1 rounded-full">
                  {task?.status}
                </span>
              )}
            </div>
          </div>

          <div className="bg-secondary-50/70 rounded-xl px-5 py-6">
            <div className="flex justify-between items-center gap-1 lg:gap-5">
              <div className="font-medium">Quantity</div>
              <div>
                <AiOutlineFieldNumber className="text-2xl lg:text-5xl opacity-10" />
              </div>
            </div>
            <div className="text-gray-700 text-sm">
              {addCommaToNumber(task?.quantity)}
            </div>
          </div>

          <div className="bg-secondary-50/70 rounded-xl px-5 py-6 col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center gap-1 lg:gap-5">
              <div className="font-medium">Collection Date</div>
              <div>
                <BiCalendarEvent className="text-2xl lg:text-5xl opacity-10" />
              </div>
            </div>
            <div className="space-y-8 text-gray-700 text-sm mt-3">
              <div className="space-x-4">
                <span className="font-medium">Start</span>{" "}
                <span className="bg-secondary-100 px-5 py-3 rounded-full">
                  {task?.collectionStartDate}
                </span>
              </div>
              <div className="space-x-4">
                <span className="font-medium">End</span>{" "}
                <span className="bg-[#F9CEC0] px-5 py-3 rounded-full">
                  {task?.collectionEndDate}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-secondary-50/70 rounded-xl px-5 py-6 col-span-2 lg:col-span-1">
            <div className="flex justify-between items-center gap-1 lg:gap-5">
              <div className="font-medium">Return Date</div>
              <div>
                <FaCalendarCheck className="text-2xl lg:text-5xl opacity-10" />
              </div>
            </div>
            <div className="space-y-8 text-gray-700 text-sm mt-3">
              <div className="space-x-4">
                <span className="font-medium">Start</span>{" "}
                <span className="bg-secondary-100 px-5 py-3 rounded-full">
                  {task?.collectionStartDate}
                </span>
              </div>
              <div className="space-x-4">
                <span className="font-medium">End</span>{" "}
                <span className="bg-[#F9CEC0] px-5 py-3 rounded-full">
                  {task?.collectionEndDate}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
