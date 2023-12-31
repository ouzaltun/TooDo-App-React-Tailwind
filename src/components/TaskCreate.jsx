import React from "react";
import { useState } from "react";

function SignUpForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div className="form-container !z-50  taskcreate-container">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex items-center justify-center flex-col px-3 md:px-12 h-full text-center"
      >
        <h1 className="font-bold text-xl">Task Ekle</h1>
        <span className="text-[12px]">
          Yeni task eklemek için boşlukları doldurunuz!
        </span>
        <input
          value={title}
          onChange={handleChange}
          placeholder="Task Başlığı"
          className="bg-[#eee] border border-[#eabf9f] py-3 px-4 my-2 w-full text-[10px]  md:text-[16px]  rounded-3xl placeholder:text-[10px] md:placeholder:text-sm "
        />
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          placeholder="Task Açıklaması"
          className="bg-[#eee] border border-[#eabf9f] py-6 h-[150px] rounded-3xl text-[10px]  md:text-[16px] px-4 my-2 w-full placeholder:text-[10px] md:placeholder:text-sm "
        />

        <button className=" active:scale-95 rounded-3xl border border-solid-custom-main bg-custom-main text-custom-text text-[8px]  md:text-[12px] font-bold uppercase transition-transform tracking-wide py-3 px-6 md:px-11">
          Task Ekle
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
