import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  
  // Task-related states
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [category, setCategory] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    const updatedUserData = userData.map((user) => {
      console.log(user)
      if (user.firstName === assignTo) {
        user.tasks.push(newTask);
        user.taskCount.newTask+=1;

        };

        
      return user;
    });

    setUserData(updatedUserData);
    localStorage.setItem("employees",JSON.stringify(updatedUserData));
    
    // Clear form fields
    setTaskTitle('');
    setTaskDescription('');
    setCategory('');
    setTaskDate('');
    setAssignTo('');
  };

  return (
    <div className='mt-7 rounded bg-[#1c1c1c] p-5 border-emerald-700 border-2'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between p-5'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-1 px-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type="text"
              placeholder='Make a UI design'
            />
          </div>
          <div>
            <h3 className='text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-[#CBC6C3] text-sm py-1 px-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type="date"
            />
          </div>
          <div>
            <h3 className='text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='text-sm py-1 px-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type="text"
              placeholder='Employee name'
            />
          </div>
          <div>
            <h3 className='text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-1 px-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
              type="text"
              placeholder='design, dev, etc.'
            />
          </div>
        </div>
        <div className='w-1/2'>
          <h3 className='text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='text-sm py-1 px-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400'
          ></textarea>
          <button className='text-white w-9/12 ml-4 mt-4 text-base bg-emerald-600 border-2 border-emerald-600'>Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
