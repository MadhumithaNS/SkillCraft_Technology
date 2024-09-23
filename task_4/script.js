const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

const addTask = () => {
    const taskText = taskInput.value.trim();
    const dateTime = taskDate.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText} ${dateTime ? `(${new Date(dateTime).toLocaleString()})` : ''}</span>
        <input type="text" class="edit-input" value="${taskText}">
        <button class="edit">Edit</button>
        <button class="complete">✔</button>
        <button class="delete">🗑</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDate.value = '';

    li.querySelector('.complete').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
    });

    li.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.querySelector('.edit').addEventListener('click', () => {
        const editInput = li.querySelector('.edit-input');
        const span = li.querySelector('span');
        if (editInput.style.display === 'none' || editInput.style.display === '') {
            editInput.style.display = 'block';
            span.style.display = 'none';
            editInput.focus();
        } else {
            editInput.style.display = 'none';
            span.style.display = 'block';
            span.textContent = editInput.value;
        }
    });

    li.querySelector('.edit-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            li.querySelector('.edit').click();
        }
    });
};

addTaskButton.addEventListener('click', addTask);
