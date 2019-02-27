// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();


function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
}


// Add Task
function addTask(e) {
if(taskInput.value === '') {
  alert('Add a task');
}

// Create li element 
const li = document.createElement('li');
li.className = 'collection-item';
li.appendChild(document.createTextNode(taskInput.value));

// Create new link
const link = document.createElement('a');
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fas fa-times"></i>';
li.appendChild(link);

// Append li to ul
taskList.appendChild(li);

// Clear input
taskInput.value == '';

  e.preventDefault();
}


// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
      console.log(e.target);
    }
  }
}