import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import TaskEdit from "./TaskEdit";

function TaskItem({ task67, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  console.log(task67);
  const deleteItem = () => {
    onDelete(task67.id);
  };

  const editItem = () => {
    setShowEdit(!showEdit);
  };

  const onEdit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(!showEdit);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="relative mr-2 md:mr-4 flex flex-col">
      {showEdit ? (
        <>
          <div className="!relative py-3 px-2 sm:px-6 border-2 border-[#eabf9f] rounded-3xl tracking-wide">
            <div
              className="
          "
            >
              <TaskEdit
                onEdit={onEdit}
                tasks={task67}
                onDelete={onDelete}
              ></TaskEdit>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="!relative py-3 px-2 sm:px-6 border-2 border-[#eabf9f] rounded-3xl tracking-wide ">
            <div className="flex flex-col gap-y-2 text-left">
              <div>
                <h1 className=" font-extrabold text-[16px] md:text-lg">
                  Task Title
                </h1>
                <p className=" break-words  text-[12px] md:text-[14px] mt-2 font-medium tracking-wider leading-5">
                  {task67.title}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-[14px]  md:text-base">
                  Task Description
                </h1>
                <p className="break-words text-[12px] md:text-[14px] mt-2 font-medium tracking-wider leading-5">
                  {task67.taskDesc}
                </p>
              </div>
            </div>
            <div className="md:absolute sm:justify-end sm:items-start sm:px-10 static w-full flex flex-row bottom-0 md:top-0 mt-2 sm:flex-row items-center justify-center gap-x-3 ">
              <div
                onClick={editItem}
                className="w-8 h-8 transition-colors text-custom-text hover:bg-custom-second bg-custom-main rounded-3xl pl-1 cursor-pointer flex justify-center items-center"
              >
                <FaRegEdit className="rounded w-5 h-5" />
              </div>
              <div
                onClick={deleteItem}
                className="transition-colors w-8 h-8 text-custom-text hover:bg-red-400 bg-custom-main rounded-3xl cursor-pointer  flex justify-center items-center"
              >
                <RiDeleteBinLine className="rounded w-5 h-5" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
