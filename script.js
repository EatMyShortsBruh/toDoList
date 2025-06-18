const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

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