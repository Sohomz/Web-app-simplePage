// Get elements
const inputField = document.getElementById('task');
const taskList = document.getElementById('taskList');

// Event listener for adding tasks
document.getElementById('add').addEventListener('click', function() {
    const taskText = inputField.value.trim();
    if (taskText) {
        // Create a new task item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Add a close button to the task item
        const closeButton = document.createElement('span');
        closeButton.className = 'close';
        closeButton.textContent = '\u00D7';
        taskItem.appendChild(closeButton);

        // Append the task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        inputField.value = '';
    }
});

// Event listener for removing tasks
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        const taskItem = event.target.parentElement;
        taskItem.remove();
    }
});

// Mark a task as completed
taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});
