const employees = [
  {
    "id": 1,
    "name": "Ahmed Khan",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Homepage",
        "description": "Create the homepage design for the website.",
        "date": "2024-10-20",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update User Interface",
        "description": "Improve the UI for better user experience.",
        "date": "2024-10-18",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix Login Issues",
        "description": "Resolve the bug in the login system.",
        "date": "2024-10-15",
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
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "name": "Fatima Ali",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Research Marketing Strategies",
        "description": "Research new strategies for marketing campaigns.",
        "date": "2024-10-21",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Create Banner Ads",
        "description": "Design banner ads for social media.",
        "date": "2024-10-18",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "SEO Optimization",
        "description": "Optimize website for search engines.",
        "date": "2024-10-16",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Social Media Plan",
        "description": "Develop a new plan for social media engagement.",
        "date": "2024-10-22",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "name": "Bilal Ahmed",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Product Launch",
        "description": "Plan and execute the product launch event.",
        "date": "2024-10-19",
        "category": "Operations",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Inventory Check",
        "description": "Check the inventory for the upcoming quarter.",
        "date": "2024-10-17",
        "category": "Operations",
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
    "id": 4,
    "name": "Zainab Bukhari",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Feedback Analysis",
        "description": "Analyze feedback from customers.",
        "date": "2024-10-21",
        "category": "Customer Service",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Resolve Ticket Issues",
        "description": "Resolve open tickets in the support system.",
        "date": "2024-10-18",
        "category": "Customer Service",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write User Guide",
        "description": "Write a comprehensive user guide for new customers.",
        "date": "2024-10-16",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare Sales Report",
        "description": "Compile the monthly sales report.",
        "date": "2024-10-15",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 5,
    "name": "Imran Saeed",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Server Maintenance",
        "description": "Perform server maintenance and updates.",
        "date": "2024-10-20",
        "category": "IT",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy New Feature",
        "description": "Deploy the new feature to production.",
        "date": "2024-10-18",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Database Backup",
        "description": "Backup the database for safety.",
        "date": "2024-10-19",
        "category": "IT",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [
  {
    "id": 1,
    "name": "Ayesha Siddiqui",
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = ()=> {
  localStorage.setItem('Employees',JSON.stringify(employees))
  localStorage.setItem('Admin',JSON.stringify(admin))
}
  
export const getLocalStorage = ()=> {
  const employees = JSON.parse(localStorage.getItem('Employees'));
  const admin = JSON.parse(localStorage.getItem('Admin'));

  return {employees,admin};
}