document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');
    const filters = document.querySelectorAll('.filter-button');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterType = filter.id;
            filterTasks(filterType);
        });
    });

    function filterTasks(filterType) {
        const tasks = taskList.getElementsByTagName('li');
        for (let task of tasks) {
            switch (filterType) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'active':
                    task.style.display = task.classList.contains('completed') ? 'none' : '';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? '' : 'none';
                    break;
            }
        }
    }
});
