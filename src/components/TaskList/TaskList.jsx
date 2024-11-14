import React, { useContext, useRef } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
import { AuthContext } from "../../context/AuthProvider";

const TaskList = ({ data }) => {
    const scrollContainerRef = useRef(null);

    const handleScroll = (e) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += e.deltaY;
        }
    };

    const [userData] = useContext(AuthContext);   
    const employee = userData ? userData.find((emp) => emp.id === data.id) : null;

    return(
        <div
            className="overflow-x-auto flex items-center pb-5 mt-10"
            ref={scrollContainerRef}
            onWheel={handleScroll}
        >
            {employee.tasks.map((elem, idx) => {
                if (elem.active) {
                return <AcceptTask key={idx} data={elem} style={{ minWidth: "200px" }} />;
                }
                if (elem.newTask) {
                return <NewTask key={idx} data={elem} style={{ minWidth: "200px" }} />;
                }
                if (elem.completed) {
                return <CompleteTask key={idx} data={elem} style={{ minWidth: "200px" }} />;
                }
                if (elem.failed) {
                return <FailedTask key={idx} data={elem} style={{ minWidth: "200px" }} />;
                }
                return null;
            })}
            </div>
    );
};

export default TaskList;
