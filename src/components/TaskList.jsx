import React from "react";
import TaskItem from "./TaskItem";
function SignInForm({ tasks32, onDelete32, onUpdate }) {
  console.log(tasks32);
  return (
    <div className="!absolute m-0 bottom-0 !h-[90%] overflow-y-scroll z-50 transition-none flex flex-col pointer-events-auto !justify-start items-start !translate-x-0 sasa overlay-left overlay-panel !pl-2 md:!pl-5">
      <h1 className="font-bold top-0 mt-6 text-xl md:text-2xl">
        Oluşturulan Tasklar
      </h1>
      <div className="grid grid-cols-1 w-full overflow-x-hidden md:grid-cols-1 my-2 md:my-4 gap-y-2 justify-start items-start pb-0">
        {tasks32.map((e) => {
          return (
            <TaskItem
              onUpdate={onUpdate}
              onDelete={onDelete32}
              key={e.id}
              task67={e}
            ></TaskItem>
          );
        })}
      </div>
    </div>
  );
}

export default SignInForm;
