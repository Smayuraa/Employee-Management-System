import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const TaskListNumbers = ({ data }) => {

    const [userData] = useContext(AuthContext);   
    const employee = userData ? userData.find((emp) => emp.id === data.id) : null;
    const { newTask, active, completed, failed } = employee.taskCount;

  return (
    <div className="flex mt-10 justify-between gap-5">
      <div className="px-9 py-6 rounded-xl w-[45%] bg-blue-400">
        <h2 className="text-white text-3xl font-semibold">{newTask}</h2>
        <h3 className="text-white text-xl font-medium">New Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-green-400">
        <h2 className="text-white text-3xl font-semibold">{completed}</h2>
        <h3 className="text-white text-xl font-medium">Completed Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-yellow-400">
        <h2 className="text-black text-3xl font-semibold">{active}</h2>
        <h3 className="text-black text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="px-9 py-6 rounded-xl w-[45%] bg-red-400">
        <h2 className="text-white text-3xl font-semibold">{failed}</h2>
        <h3 className="text-white text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
