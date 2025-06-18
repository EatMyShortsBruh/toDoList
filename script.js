/// Get DOM elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Load tasks from localstorage or start fresh
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Save tasks to localstorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render a single task to the DOM
function renderTask(task) {
    const li = document.createElement('li')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    const span = document.createElement('span');
    span.textContent = task.text;
    if (task.completed) {
        span.classList.add('completed');
    }

    // Toggle completion status
    checkbox.addEventListener('change', function() {
        task.completed = checkbox.checked;
        if (task.completed) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
        saveTasks();
    });
}

// Handle form submit to add new task
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            span.classList.add('completed');
        } else {
            span.classList.remove('completed');
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);

    input.value = '';
});

// Render exsisting tasks on page load
tasks.forEach(renderTask);