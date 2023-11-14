import React from "react";
function SignUpForm() {
  return (
    <div className="form-container taskcreate-container">
      <form className="bg-white flex items-center justify-center flex-col px-12 h-full text-center">
        <h1 className="font-bold text-xl">Task Ekle</h1>
        <span className="text-[12px]">
          Yeni task eklemek için boşlukları doldurunuz!
        </span>
        <input
          placeholder="Task Başlığı"
          className="bg-[#eee] border-none py-3 px-4 my-2 w-full  placeholder:text-sm "
        />
        <textarea
          placeholder="Task Açıklaması"
          className="bg-[#eee] border-none py-6 h-[150px] px-4 my-2 w-full placeholder:text-sm "
        />

        <button className=" active:scale-95 rounded-3xl border border-solid-custom-main bg-custom-main text-custom-text text-[12px] font-bold uppercase transition-transform tracking-wide py-3 px-11">
          Task Ekle
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
