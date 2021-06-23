import "./style.css";
import React from "react";

function CreateNewTaskModalForm() {

  return (
    <div className="CreateNewTaskModalForm">
      <h3 className="headline">
        Create a new Task
      </h3>

      <div className="form-input-section">
        <label name="task-title">Add a Title</label>
        <input 
          type="text"
          name="task-title"
          className="task-title"
          placeholder="Create a title for your task"
          required="This field is required!"
        />
      </div>
      
      <div className="form-input-section">
        <label name="task-description">Task Description</label>
        <input
          className="task-description"
          type="text"
          name="task-description"
        />
      </div>

      <div className="form-input-section">
        <label name="task-date">Set Date</label>
        <input
          type="date"
          className="task-date"
          name="task-date"
        />
      </div>

      <div className="form-input-section">
        <label name="task-time">Set Time</label>
        <input
          type="time"
          className="task-time"
          name="task-time"
        />
      </div>

    </div>
  )
}

export default CreateNewTaskModalForm;