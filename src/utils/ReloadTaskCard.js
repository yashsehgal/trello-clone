import TaskCard from "../Components/TaskCard/TaskCard";
import React from "react";
import ReactDOM from "react-dom";

function ReloadTaskCard() {
  console.log(
    localStorage.getItem('task')
  );
  
  ReactDOM.render(
    <React.StrictMode>
      <TaskCard />
    </React.StrictMode>,
    document.getElementById('taskComponentAddition')
  )
}

export default ReloadTaskCard;