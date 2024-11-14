import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data, updateTaskCount }) => {
    return (
        <div id="TaskList" className="mt-10 h-[55%] overflow-auto w-full flex items-center justify-start gap-5 flex-nowrap py-5">
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />;
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} updateTaskCount={updateTaskCount} />;
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />;
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
                return null;
            })}
        </div>
    );
};

export default TaskList;
