import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function TaskItem({ task67, onDelete }) {
  console.log(task67);
  const deleteItem = () => {
    console.log("item silinecek");
    onDelete(task67.id);
  };

  return (
    <div className="relative mr-4 flex flex-col">
      <div className="!relative py-3 px-2 sm:px-6 border-2 border-[#eabf9f] rounded-3xl tracking-wide ">
        <div className="flex flex-col gap-y-2 text-left">
          <div>
            <h1 className=" font-extrabold text-lg">Task Title</h1>
            <p className=" break-words text-[16px] mt-2 font-medium tracking-wider leading-5">
              {task67.title}
            </p>
          </div>
          <div>
            <h1 className="font-bold text-base">Task Description</h1>
            <p className="break-words text-[14px] mt-2 font-medium tracking-wider leading-5">
              {task67.taskDesc}
            </p>
          </div>
        </div>
        <div className="md:absolute sm:justify-end sm:items-start sm:px-10 static w-full flex flex-row bottom-0 md:top-0 mt-2 sm:flex-row items-center justify-center gap-x-4 ">
          <div className="w-8 h-8 transition-colors text-custom-text hover:bg-custom-second bg-custom-main rounded-3xl pl-1 cursor-pointer flex justify-center items-center">
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
    </div>
  );
}

export default TaskItem;
