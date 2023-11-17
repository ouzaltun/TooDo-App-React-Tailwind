import React from "react";
import TaskItem from "./TaskItem";
function SignInForm({ tasks32 }) {
  console.log(tasks32);
  return (
    <div className="m-0 bottom-0 h-[400px] overflow-y-scroll z-50 transition-none flex flex-col justify-center items-center !translate-x-0 sasa overlay-left overlay-panel">
      <h1 className="font-bold top-0 mt-10 text-2xl">Oluşturulan Tasklar</h1>
      <div className="grid grid-cols-1 w-full overflow-x-hidden md:grid-cols-1 my-4 gap-y-2 justify-center items-start ">
        {tasks32.map((e) => {
          return <TaskItem key={e.id} task67={e}></TaskItem>;
        })}
      </div>
    </div>
  );
}

export default SignInForm;
