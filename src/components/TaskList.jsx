import React from "react";
import TaskItem from "./TaskItem";
function SignInForm({ tasks32 }) {
  console.log(tasks32);
  return (
    <div className="m-0  bottom-0 h-full z-50 transition-none !relative flex flex-col justify-center items-center !translate-x-0 sasa  overlay-left  overlay-panel">
      <h1 className="font-bold top-0 mt-10 text-xl">Oluşturulan Tasklar</h1>
      <div className="grid grid-cols-1  md:grid-cols-1 my-4 gap-2 h-full w-full justify-center items-start ">
        {tasks32.map((e) => {
          return <TaskItem key={e.id} task67={e}></TaskItem>;
        })}
      </div>
    </div>
  );
}

export default SignInForm;
