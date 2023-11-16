import React, { useState } from "react";
import Tasklist from "../components/TaskList";
import TaskCreate from "../components/TaskCreate";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [type, setType] = useState("taskCreate");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "taskCreate" ? "right-panel-active" : "");

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999),
        title: title,
        taskDesc: taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  return (
    <div>
      <div className="bg-custom-bg text-custom-text flex justify-center items-center h-screen w-full">
        <div className={containerClass} id="container">
          <TaskCreate onCreate={createTask}></TaskCreate>
          <Tasklist tasks32={tasks}></Tasklist>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left ">
                <h1 className="font-bold text-xl">Taskları Görüntüle</h1>
                <p className="text-[16px] mt-4 mb-7 font-light tracking-wider leading-5 ">
                  Alttaki buton aracılığıyla eklediğin tasklarınızı
                  görebilirsiniz.
                </p>
                <button
                  className="ghost rounded-3xl border border-solid-custom-main bg-custom-main text-custom-text text-[12px] font-bold uppercase transition-transform tracking-wide py-3 px-11 active:scale-95"
                  id="taskList"
                  onClick={() => handleOnClick("taskList")}
                >
                  Taskları Görüntüle
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="font-bold text-xl">Task Ekle</h1>
                <p className="text-[16px] mt-4 mb-7 font-light tracking-wider leading-5">
                  Alttaki buton aracılığıyla task ekleyebilirsiniz.
                </p>
                <button
                  className="ghost rounded-3xl border border-solid-custom-main bg-custom-main text-custom-text text-[12px] font-bold uppercase transition-transform tracking-wide py-3 px-11 active:scale-95 "
                  id="taskCreate"
                  onClick={() => handleOnClick("taskCreate")}
                >
                  Task Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
