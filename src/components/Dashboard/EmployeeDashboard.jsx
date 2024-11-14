import React, { useState, useEffect } from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  const [data, setData] = useState(props.data); 

  const updateTaskCount = (taskId, status) => {
    setData((prevData) => {
      const newCount = { ...prevData.taskCount };
      const updatedTasks = prevData.tasks.map((task) => {
        if (task.id === taskId) {
          if (status === "accepted" && task.newTask) {
            task.newTask = false;
            task.active = true;
            newCount.newTask -= 1;
            newCount.active += 1;
          } else if (status === "completed" && task.active) {
            task.active = false;
            task.complete = true;
            newCount.active -= 1;
            newCount.completed += 1;
          } else if (status === "failed" && (task.newTask || task.active)) {
            if (task.newTask) newCount.newTask -= 1;
            if (task.active) newCount.active -= 1;
            task.newTask = false;
            task.active = false;
            task.failed = true;
            newCount.failed += 1;
          }
        }
        return task;
      });
      return { ...prevData, tasks: updatedTasks, taskCount: newCount };
    });
  };

  useEffect(() => {
    localStorage.setItem("taskData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const storedData = localStorage.getItem("taskData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} updateTaskCount={updateTaskCount} />
    </div>
  );
};

export default EmployeeDashboard;
