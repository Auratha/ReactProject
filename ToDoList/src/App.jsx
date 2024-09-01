import { useState, useReducer } from "react";
import AddTaskUI from "./Components/AddTaskUI";
import SearchPlace from "./Components/SearchPlace";
import TaskList from "./Components/TaskList";

function App() {
  // const [task, setTask] = useState([]);
  const [hide, setHide] = useState(false);
  const [search, setSearch] = useState("");
  const [lightswitch, setLightswitch] = useState(true);

  const taskState = [];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, action.payload];
      case "REMOVE_TASK":
        return state.filter((_, index) => index !== action.payload);
      case "UPDATE_TASK":
        return state.map((t, index) => {
          return index === action.index ? { ...t, ...action.payload } : t;
        });
      default:
        return state;
    }
  };

  const [task, dispatch] = useReducer(taskReducer, taskState);
  console.log(task);

  const displayAddTaskUI = () => {
    setHide(!hide);
  };

  const addTask = (newTask) => {
    let data = {
      checkBox: false,
      note: newTask,
      edit: false,
    };
    dispatch({ type: "ADD_TASK", payload: data });
    displayAddTaskUI();
  };

  const deleteTask = (id) => {
    dispatch({ type: "REMOVE_TASK", payload: id });
  };

  const changeCheckBox = (id) => {
    if (id >= 0 && id < task.length) {
      // Ensure the index is valid
      const updateTask = {
        checkBox: !task[id].checkBox,
      };
      dispatch({ type: "UPDATE_TASK", index: id, payload: updateTask });
    }
  };

  const editTask = (id, editnote) => {
    if (id >= 0 && id < task.length) {
      const updateTask =
        editnote.length > 0
          ? {
              edit: !task[id].edit,
              note: editnote,
            }
          : {
              edit: !task[id].edit,
            };
      dispatch({ type: "UPDATE_TASK", index: id, payload: updateTask });
    }
  };

  // const addTask = (newTask) => {
  //   setTask((prev) => [
  //     ...prev,
  //     {
  //       checkBox: false,
  //       note: newTask,
  //       edit: false,
  //     },
  //   ]);

  //   displayAddTaskUI();
  // };

  // const changeCheckBox = (id) => {
  //   let newTask = [];
  //   task.map((t, i) => {
  //     if (i === id) {
  //       newTask.push({
  //         checkBox: !task[id].checkBox,
  //         note: task[id].note,
  //         edit: task[id].edit,
  //       });
  //     } else {
  //       newTask.push({
  //         checkBox: task[i].checkBox,
  //         note: task[i].note,
  //         edit: task[i].edit,
  //       });
  //     }
  //     setTask(newTask);
  //   });
  // };

  // const deleteTask = (id) => {
  //   let newTask = [];
  //   newTask = task.filter((t, i) => {
  //     return id !== i;
  //   });

  //   setTask(newTask);
  //   if (task.length < 1) {
  //     setTask([]);
  //   }
  // };

  const getSearch = (searchresult) => {
    setSearch(searchresult);
  };

  // const editTask = (id, editnote) => {
  //   let newTask = [];
  //   task.map((t, i) => {
  //     if (i === id && editnote.length > 0) {
  //       newTask.push({
  //         checkBox: task[id].checkBox,
  //         note: editnote,
  //         edit: !task[id].edit,
  //       });
  //     } else if (i === id) {
  //       newTask.push({
  //         checkBox: task[id].checkBox,
  //         note: task[id].note,
  //         edit: !task[id].edit,
  //       });
  //     } else {
  //       newTask.push({
  //         checkBox: task[i].checkBox,
  //         note: task[i].note,
  //         edit: task[i].edit,
  //       });
  //     }
  //     setTask(newTask);
  //   });
  // };

  const showAllTask = () => {
    setSearch("");
  };

  const changeMode = () => {
    setLightswitch(!lightswitch);
  };

  return (
    <>
      <div
        className={`font-mono box-border relative h-screen ${
          lightswitch ? "bg-white" : "bg-black"
        }`}
      >
        <div className="flex flex-col items-center pt-6">
          <h1
            className={`text-2xl font-bold ${
              lightswitch ? "text-black" : "text-white"
            }`}
          >
            TODO LIST
          </h1>
          <SearchPlace
            displayAddTaskUI={displayAddTaskUI}
            getSearch={getSearch}
            showAllTask={showAllTask}
            changeMode={changeMode}
            lightswitch={lightswitch}
          />
          <TaskList
            task={task}
            search={search}
            changeCheckBox={changeCheckBox}
            deleteTask={deleteTask}
            editTask={editTask}
            lightswitch={lightswitch}
          />
        </div>
        {hide && (
          <AddTaskUI displayAddTaskUI={displayAddTaskUI} addTask={addTask} />
        )}
      </div>
    </>
  );
}

export default App;
