/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import NoTask from "./NoTask";
import axios from "axios";
import { useEffect } from "react";

const url = "http://localhost:3000/api/todos";

const Todos = ({ todos }) => {
  console.log(todos);
  const [tasks, setTasks] = useState(todos);
  const [task, setTask] = useState({ task: "" });
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    if (tasks?.length === 0) return;
    let filterTasks = tasks?.filter((task) => task.completed === true);
    setCompletedTasks(filterTasks);
  }, []);

  const handleChange = ({ currentTarget: input }) => {
    input.value === ""
      ? setTask({ task: "" })
      : setTask((prev) => ({ ...prev, task: input.value }));
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (task.task === "") return;
    try {
      if (task._id) {
        const { data } = await axios.put(url + "/" + task._id, {
          task: task.task,
        });
        const originalTasks = [...tasks];
        const index = originalTasks.findIndex((t) => t._id === task._id);
        originalTasks[index] = data.data;
        setTasks(originalTasks);
        setTask({ task: "" });
        console.log(data.message);
      } else {
        const { data } = await axios.post(url, task);
        setTasks((prev) => [...prev, data.data]);
        setTask({ task: "" });
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const originalTasks = [...tasks];
      const index = originalTasks.findIndex((t) => t._id === id);
      const { data } = await axios.put(url + "/" + id, {
        completed: !originalTasks[index].completed,
      });
      originalTasks[index] = data.data;
      setTasks(originalTasks);
      let filterTasks = originalTasks.filter((task) => task.completed === true);
      setCompletedTasks(filterTasks);
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const editTask = (id) => {
    const currentTask = tasks.filter((task) => task._id === id);
    setTask(currentTask[0]);
  };

  const deleteTask = async (id) => {
    try {
      const { data } = await axios.delete(url + "/" + id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      setCompletedTasks((prev) => prev.filter((task) => task._id !== id));
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFocus = (e) => {
    let el = e.target.parentElement;
    el.classList.add("focused");
  };
  const handleBlur = (e) => {
    let el = e.target.parentElement;
    el.classList.remove("focused");
  };
  return (
    <div className="mt-4 text-base font-normal">
      <div className="w-full header-trans box-shadow overflow-hidden p-0 mb-8 bg-white rounded-md ">
        <nav className="py-2 m-0 p-0 relative list-none">
          <div className="w-full p-5 relative text-gray-400 cursor-text flex items-center box-border inp-underline">
            <input
              type="text"
              className="outline-none border-0 w-full text-gray-800 h-5 px-0 pt-[6px]pb-[7px] m-0 block box-content bg-none"
              placeholder="Type here to add new task item..."
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={handleChange}
              value={task.task}
            />
            <div className="ml-2 flex items-center h-8 whitespace-nowrap">
              <button
                className={`flex-[0 0 auto] p-3 text-center text-white bg-[#3d72fe] rounded-sm hover:bg-[#2E5AD4]`}
                onClick={(e) => handleAddTodo(e)}
              >
                {task._id ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </nav>
        {tasks?.length === 0 ? (
          <NoTask />
        ) : (
          <>
            <ul className="w-full mb-8 p-0 bg-white relative list-none text-lg font-normal">
              {tasks?.map((todo, index) => (
                <li className="relative list-item list-none" key={index}>
                  <div className="pr-12 pl-4 py-1 w-full flex relative box-border justify-start items-center text-left decoration-0">
                    <div className=" min-w-[56px] flex flex-shrink-0 text-gray-400 p-2">
                      <input
                        type="checkbox"
                        checked={todo?.completed}
                        onChange={() => handleUpdate(todo?._id)}
                        className=" cursor-pointer h-5 w-5"
                      />
                    </div>
                    <div className="w-full p-5 relative flex items-center box-border inp-underline no-underline">
                      <p
                        className={`text-gray-800 text-lg ${
                          todo?.completed ? "line-through" : ""
                        }`}
                      >
                        {todo?.task}
                      </p>
                      {/* <input
              type="text"
              className="outline-none border-0 w-full text-gray-400 h-5 px-0 pt-[6px]pb-[7px] m-0 block box-content bg-none"
              placeholder="Edit task item..."
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
              onChange={handleUpdate}
              value={todo.task}
            /> */}
                    </div>
                  </div>
                  <div className="absolute top-[50%] right-12 translate-y-[-50%]">
                    <button
                      onClick={() => editTask(todo?._id)}
                      className="cursor-pointer p-3 flex items-center m-0 border-0 text-center justify-center text-[28px] text-[#3d72fe]"
                    >
                      &#9998;
                    </button>
                  </div>
                  <div className="absolute top-[50%] right-3 translate-y-[-50%]">
                    <button
                      onClick={() => deleteTask(todo?._id)}
                      className="cursor-pointer p-3 flex items-center m-0 border-0 text-center justify-center text-[28px] text-red-600"
                    >
                      <AiOutlineDelete />{" "}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex">
              <p className="pl-[10px] text-left m-[6px] text-gray-500">
                Total items: {tasks.length}
              </p>
              <p className="pl-[10px] text-left m-[6px] text-gray-500">
                Completed items: {completedTasks.length}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Todos;
