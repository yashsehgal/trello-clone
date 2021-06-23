
function SaveDataInLocalStorage(data) {
  
  let tasks;
  if (!data) return;
  
  if (localStorage.getItem('task') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('task'));
  }

  tasks.push(data);
  localStorage.setItem('task', JSON.stringify(tasks));
  // return true;

}

export default SaveDataInLocalStorage;