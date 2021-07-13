
import "./style.css";
import React from "react";

function TaskColumn(TaskColumnDetails) {
  return (
    <div className="TaskColumn" id={TaskColumnDetails.id}>
      <h4 className="title">
        {TaskColumnDetails.ColumnTitle}
      </h4>
    </div>
  )
}

export default TaskColumn;