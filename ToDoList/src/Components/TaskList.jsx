import React, { useState } from "react";
import editIcon from "/icons/edit.svg";
import trashIcon from "/icons/delete.svg";
import emptyLogo from "/icons/empty.png";

const TaskList = ({
  task,
  search,
  changeCheckBox,
  deleteTask,
  editTask,
  lightswitch,
}) => {
  const [temp, setTemp] = useState("");

  const filterTask = task.filter((t) => {
    return t.note.toLowerCase().includes(search.toLowerCase());
  });

  const ShowAllTask = () => {
    return filterTask.map((t, i) => {
      return (
        <div
          className="task px-2 py-1 flex justify-between items-center border-b-2 border-indigo-300"
          key={i}
        >
          <div className="flex space-x-2">
            <input
              id={i}
              checked={t.checkBox}
              onChange={() => {
                changeCheckBox(i);
              }}
              type="checkbox"
            />
            {t.edit ? (
              <input
                className="w-[80%] border-2 border-indigo-500 outline-none"
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
                value={temp}
              />
            ) : (
              <p
                className={
                  "text-lg" +
                  (t.checkBox ? " line-through" : "") +
                  (lightswitch ? " text-black" : " text-white")
                }
              >
                {t.note}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <img
              className="size-6 cursor-pointer"
              src={editIcon}
              alt="editIcon"
              id={i}
              onClick={() => {
                editTask(i, temp);
                setTemp("");
              }}
            />
            <img
              className="size-5 cursor-pointer"
              src={trashIcon}
              alt="trashIcon"
              id={i}
              onClick={() => {
                deleteTask(i);
              }}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-[45%] mt-5 space-y-2">
      {Array.isArray(task) && task.length > 0 ? (
        ShowAllTask()
      ) : (
        <img src={emptyLogo} alt="emptyLogo" />
      )}
    </div>
  );
};

export default TaskList;
