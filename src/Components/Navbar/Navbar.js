
import "./style.css";
import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import CreateNewTaskModalForm from "../CreateNewTaskModalForm/CreateNewTaskModalForm";

import SaveDataInLocalStorage from "../../utils/SaveDataInLocalStorage";

Modal.setAppElement('#root');

function retrieveTaskDetails() {
  
  const task_title = document.querySelector('.task-title').value;
  const task_description = document.querySelector('.task-description').value;
  const task_date = document.querySelector('.task-date').value;
  const task_time = document.querySelector('.task-time').value;

  const taskDataObject = {
    "taskTitle": task_title,
    "taskDescription": task_description,
    "taskDate": task_date,
    "taskTime": task_time
  };

  SaveDataInLocalStorage(taskDataObject);

}

function Navbar() {

  const [createNewTaskModal, setCreateNewTaskModal] = useState(false);
  console.log(useState());  
  
  return (
    <div className="Navbar">
      <div className="Navbar-header">
        <p className="title">
          Trello Clone
        </p>
      </div>
      <div className="Navbar-body-content">
        <ul className="Navbar-body-items-list">
          <li className="Navbar-body-item">Home</li>
          <li className="Navbar-body-item">See all Tasks</li>
          <li className="Navbar-body-item">GitHub</li>
          <li className="Navbar-body-item">Help</li>
          <button className="solid-button"
            onClick={() => {
              setCreateNewTaskModal(true)
            }}
          >
            <i className="fas fa-plus"></i>
            Create new Task
          </button>
        </ul>
      </div>
      <Modal
        isOpen={createNewTaskModal}
        onRequestClose={() => setCreateNewTaskModal(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0 )',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '800px',
            height: '600px',
            overflow: 'hidden',
            boxSizing: 'border-box'
          },
          content: {
            border: 'none',
            boxShadow: '12px 24px 32px rgba(0, 0, 0, 0.225)'
          }
        }}
      >
        <CreateNewTaskModalForm />
        <div className="form-button-layer"
          style={{
            marginTop: '2em',
            float: 'right'
          }}
        >
          <button onClick={() => {
            setCreateNewTaskModal(false)
          }}
            className="button-discard solid-button-deactivated"
            style={{
              marginRight: '1em'
            }}
          >
            Discard
          </button>

          <button onClick={() => {
            retrieveTaskDetails()
            setCreateNewTaskModal(false)
          }}
            className="button-save solid-button"
          >
            Save Task
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Navbar;