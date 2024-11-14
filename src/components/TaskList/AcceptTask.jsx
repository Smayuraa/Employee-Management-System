import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AcceptTask = ({ data }) => {
    const [userData, setUserData] = useContext(AuthContext);

    const handleComplete = () => {
        const updatedEmployees = userData.map((employee) => {
            if (employee.tasks.some((task) => task.title === data.title)) {
                employee.tasks = employee.tasks.map((task) => {
                    if (task.title === data.title) {
                        task.completed = true;
                        task.active = false;  
                    }
                    return task;
                });

                employee.taskCount.completed += 1;
                employee.taskCount.active -= 1;
            }
            return employee;
        });

        setUserData(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    const handleFailed = () => {
        const updatedEmployees = userData.map((employee) => {
            if (employee.tasks.some((task) => task.title === data.title)) {
                employee.tasks = employee.tasks.map((task) => {
                    if (task.title === data.title) {
                        task.active = false;  
                        task.failed = true;
                    }
                    return task;
                });

                employee.taskCount.failed += 1;
                employee.taskCount.active -= 1;
            }
            return employee;
        });

        setUserData(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };
    return (
        <div className="p-6 mx-4 rounded-lg shadow-lg w-[300px] h-[350px] text-white bg-yellow-500 flex flex-col justify-between flex-shrink-0">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <span className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-lg transition-colors duration-200">
                        {data.category}
                    </span>
                    <span className="text-sm">{data.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{data.title}</h2>
                <p className="text-white">
                    {data.description}
                </p>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={handleComplete}
                    className="bg-green-500 text-center hover:bg-green-700 text-white font-semibold py-1 px-4 rounded-lg transition-colors duration-200 w-28"
                >
                    Complete
                </button>
                <button
                    onClick={handleFailed}
                    className="bg-red-500 text-center hover:bg-red-700 text-white font-semibold py-1 px-4 rounded-lg transition-colors duration-200 w-28"
                >
                    Failed
                </button>
            </div>
        </div>
    );
};

export default AcceptTask;
