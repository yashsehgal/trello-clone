import Dashboard from "../../Components/Dashboard/Dashboard";
import Navbar from "../../Components/Navbar/Navbar";
import "./style.css";
import React from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Dashboard />
    </div>
  )
}

export default Home;