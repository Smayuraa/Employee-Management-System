import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";


const NewTask = ({ data}) => {

       const [userData,setUserData] = useContext(AuthContext)

       const handleAccept = () => {
        const updatedEmployees = userData.map((employee) => {
            if (employee.tasks.some((task) => task.title === data.title)) {
                employee.tasks = employee.tasks.map((task) => {
                    if (task.title === data.title) {
                        task.active = true;
                        task.newTask = false;  
                    }
                    return task;
                });

                employee.taskCount.newTask -= 1;
                employee.taskCount.active += 1;
            }
            return employee;
        });

        setUserData(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    return (
        <div className="p-6 mx-4 rounded-lg shadow-lg w-[300px] h-[350px] text-white bg-blue-500 flex flex-col justify-between flex-shrink-0">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-lg transition-colors duration-200">
                        {data.category}
                    </span>
                    <span className="text-sm">{data.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <p className="text-white">{data.description}</p>
            </div>
            <button
                onClick={handleAccept}
                className="bg-red-500 text-center hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-lg transition-colors duration-200 mt-auto"
            >
                Accept Task
            </button>
        </div>
    );
};

export default NewTask;
