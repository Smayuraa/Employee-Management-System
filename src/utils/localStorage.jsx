const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "user@me.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Landing Page",
        "description": "Create a modern landing page for the client website.",
        "date": "2024-11-05",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review code for the latest project feature.",
        "date": "2024-11-06",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend the weekly project team meeting.",
        "date": "2024-11-07",
        "category": "General",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Ravi",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database Optimization",
        "description": "Optimize the database for faster query responses.",
        "date": "2024-11-08",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Fix critical bugs in the production code.",
        "date": "2024-11-09",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Neha",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Presentation",
        "description": "Prepare slides for the client meeting.",
        "date": "2024-11-10",
        "category": "Management",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Client Call",
        "description": "Update client on project progress.",
        "date": "2024-11-11",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Documentation",
        "description": "Document the new API endpoints.",
        "date": "2024-11-12",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Rajesh",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Security Audit",
        "description": "Perform a security audit on the new application.",
        "date": "2024-11-13",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "API Testing",
        "description": "Test all API endpoints for response times.",
        "date": "2024-11-14",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Sneha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "UI/UX Review",
        "description": "Review the UI/UX design for mobile compatibility.",
        "date": "2024-11-15",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Update Documentation",
        "description": "Update documentation to include recent changes.",
        "date": "2024-11-16",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 0,
      "newTask": 0,
      "completed": 1,
      "failed": 1
    }
  }
];

const admin = 
[
    {
      "id": 1,
      "email": "admin@me.com",
      "password": "1234"
    }
]


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return{employees,admin}
}