import React from "react";
import { useRef } from "react";

const AddTaskUI = ({ displayAddTaskUI, addTask }) => {
  const newNoteInput = useRef("");

  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-2/5 bg-white">
      <div className="h-60 px-4 py-3 relative flex flex-col items-center border-[0.5px] border-indigo-400 rounded-md">
        <h1 className="text-2xl text-center font-bold">New Note</h1>
        <input
          ref={newNoteInput}
          type="text"
          className="w-4/5 px-4 py-1 mx-auto mt-4 border-2 border-indigo-400 outline-none"
          placeholder="Enter new note..."
        />
        <button
          onClick={displayAddTaskUI}
          className="px-3 py-1 border-[0.5px] border-indigo-400 text-indigo-400 absolute left-5 bottom-2 rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            addTask(newNoteInput.current.value);
          }}
          className="px-4 py-1 bg-indigo-500 text-white absolute right-5 bottom-2 rounded-md"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default AddTaskUI;
