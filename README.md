# Employee Management System (EMS)

## Admin Login Details
- *Email:* admin@me.com
- *Password:* 123

## Employee Login Details
1. *Employee 1*
   - *Email:* user1@me.com
   - *Password:* 123
2. *Employee 2*
   - *Email:* user2@me.com
   - *Password:* 123
3. *Employee 3*
   - *Email:* user3@me.com
   - *Password:* 123
4. *Employee 4*
   - *Email:* user4@me.com
   - *Password:* 123
5. *Employee 5*
   - *Email:* user5@me.com
   - *Password:* 123

---

## Overview
This is an Employee Management System (EMS) built using React, Tailwind CSS, and localStorage. The application allows users to manage employees, assign tasks, track employee activity, and more, with a modern and responsive user interface.

## Features
- *Task Management*: Employees can have tasks assigned to them, which can be marked as active or completed.
- *Employee List*: View the details of all employees including their task count and active status.
- *Real-Time Updates*: Changes to the employee tasks or data are reflected in real-time, thanks to local state and localStorage persistence.
- *Responsive Design*: The application is fully responsive, ensuring a seamless experience across devices.
- *Authentication*: The system uses a context-based authentication to manage user data and interactions.

## Technologies Used
- *React*: A JavaScript library for building user interfaces.
- *Tailwind CSS*: A utility-first CSS framework for styling the app.
- *localStorage*: A web storage solution used to persist employee data across sessions.
- *JavaScript (ES6)*: For core application logic.

## Usage

### Manage Employees
- *View Employees*: Employees can be viewed in a list, where you can see their task status and other related details.
- *Assign Tasks*: Tasks can be assigned to employees and their status can be updated from "New" to "Active".
- *Accepting Tasks*: Employees can accept tasks from the task list, and their task count will be updated accordingly.

### LocalStorage Integration
The app stores data in *localStorage, ensuring that user data persists even when the page is reloaded or closed. If no data is found in **localStorage*, default values will be initialized.

## Key Components
- *AuthContext: Manages the global state related to employees and tasks. It uses **React Context API* to provide data throughout the app.
- *TaskCard*: Displays individual tasks and allows users to accept or reject tasks.
- *EmployeeList*: Lists all employees with their active task counts and task details.
- *EmployeePage*: Detailed page for each employee, showing their tasks and status.

  https://employeetrack.netlify.app/
