import React, { useState } from "react";
import "./style.css";
import TaskColumn from "./TaskColumn/TaskColumn";

function Dashboard() {

  const TaskColumnTitles = [
    { "id": "01", "title": "Created Tasks" },
    { "id": "02", "title": "To Do" },
    { "id": "03", "title": "In Progress" },
    { "id": "04", "title": "Done" }
  ];

  const [taskColumnTitles] = useState(TaskColumnTitles);

  return (
    <div className="Dashboard">
      <h2 className="headline">Dashboard</h2>
      <div className="TaskBoard-Container">
        {
          taskColumnTitles.map((title) => (
            <TaskColumn
              id={"taskComponentAddition"}
              ColumnTitle={title.title} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard;