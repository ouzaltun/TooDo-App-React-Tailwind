import React from "react";
function SignInForm({ tasks32 }) {
  console.log(tasks32);
  return (
    <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center tasklist-container">
      <h1 className="font-bold absolute top-0 mt-10 text-xl">
        Oluşturulan Tasklar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  px-4 gap-y-4 w-full  gap-x-2 justify-center items-center ">
        {tasks32.map((e) => (
          <div>sa</div>
        ))}
      </div>
    </div>
  );
}

export default SignInForm;
