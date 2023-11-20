import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCheckmarkOutline } from "react-icons/io5";

function TaskEdit({ tasks, onDelete, onEdit }) {
  const [editedTask, setEditedTask] = useState({ ...tasks });

  const deleteItem = () => {
    onDelete(tasks.id);
  };

  const editItem = () => {
    onEdit(tasks.id, editedTask.title, editedTask.taskDesc);
    console.log("Güncellenen Task: ", editedTask);
  };

  return (
    <div className="w-full z-50">
      <form className="">
        <div className="flex flex-col gap-y-1 text-left w-[85%] ">
          <h1 className="font-extrabold text-lg">Task Title</h1>
          <input
            value={editedTask.title}
            placeholder="Task Başlığı"
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
            className="break-words bg-[#eee] border border-[#eabf9f] z-50  px-4  w-full rounded-3xl placeholder:text-sm "
          />
          <h1 className="font-bold text-base">Task Description</h1>
          <input
            value={editedTask.taskDesc}
            placeholder="Task Açıklaması"
            onChange={(e) =>
              setEditedTask({ ...editedTask, taskDesc: e.target.value })
            }
            className="bg-[#eee] border border-[#eabf z-50   rounded-3xl px-4  w-full placeholder:text-sm "
          />
        </div>
        <div className="md:absolute sm:justify-end sm:items-start sm:px-10 static w-full flex flex-row bottom-0 md:top-0 mt-2 sm:flex-row items-center justify-center gap-x-3 ">
          <div
            onClick={editItem}
            className="w-8 h-8 transition-colors text-custom-text hover:bg-green-300 bg-custom-main rounded-3xl cursor-pointer flex justify-center items-center"
          >
            <IoCheckmarkOutline className="rounded w-5 h-5" />
          </div>
          <div
            onClick={deleteItem}
            className="transition-colors w-8 h-8 text-custom-text hover:bg-red-400 bg-custom-main rounded-3xl cursor-pointer  flex justify-center items-center"
          >
            <RiDeleteBinLine className="rounded w-5 h-5" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;
