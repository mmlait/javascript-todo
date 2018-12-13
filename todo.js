const addTaskBtn = document.getElementById('add-task-btn');
const addText = document.getElementById('add-text');
const ol = document.querySelector('ol');

function addTask() {
  let li = document.createElement('li');
  let remove = document.createElement('button');
  let task = document.createElement('div');

  remove.className = 'remove-btn';
  remove.textContent = 'Remove';
  task.className = 'task';
  task.textContent = addText.value;

  li.appendChild(remove);
  li.appendChild(task);
  ol.appendChild(li);
  addText.value = '';
};

addText.addEventListener('keypress', () => {
  if (event.which === 13) {
    addTask();
  }
});

addTaskBtn.addEventListener('click', () => {
    addTask();
});

// remove items
ol.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove-btn') {
      let li = event.target.parentNode;
      let ol = li.parentNode;
      ol.removeChild(li);
    }
  }
});
