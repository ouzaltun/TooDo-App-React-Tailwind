import React from "react";
function SignInForm({ tasks32 }) {
  console.log(tasks32);
  return (
    <div className="m-0 bottom-0 h-full !relative flex flex-col justify-center items-center !translate-x-0 sasa  overlay-left  overlay-panel">
      <h1 className="font-bold  top-0 mt-10 text-xl">Oluşturulan Tasklar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-2 h-full w-full justify-center items-start ">
        {tasks32.map((e) => (
          <div className="px-6 py-4">sa</div>
        ))}
      </div>
    </div>
  );
}

export default SignInForm;
