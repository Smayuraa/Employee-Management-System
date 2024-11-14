import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div id="AllTask" className="bg-[#1c1c1c] p-5 mt-4 rounded h-51">
      <div className="bg-green-800 py-2 px-4 mb-2 flex justify-between rounded">
        <h2 className="w-1/5">Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {userData.map((user, idx) => (
          <div key={idx} className="bg-green-400 py-2 px-4 mb-2 flex justify-between rounded">
            <h2 className="w-1/5 text-black font-bold">{user.firstName}</h2>
            <h3 className="w-1/5 font-bold">{user.taskCount.newTask}</h3>
            <h5 className="w-1/5 text-black font-bold">{user.taskCount.active}</h5>
            <h5 className="w-1/5 font-bold">{user.taskCount.completed}</h5>
            <h5 className="w-1/5 font-bold text-red-800">{user.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
