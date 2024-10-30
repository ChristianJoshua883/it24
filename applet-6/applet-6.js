// just in case lang magamit pohon guides lang

class TodoList{
    constructor() {
        this.editingIndex = -1;
        this.addButton = document.getElementById('addButton');
        this.todoInput = document.getElementById('todoInput');
        this.todoList = document.getElementById('todoList');

        this.addButton.addEventListener('click', () => this.addOrUpdateTask());
        this.todoList.addEventListener('click', (e) => {
            const action = e.target.classList.contains('removeButton') ? 'remove' : 
                           e.target.classList.contains('editButton') ? 'edit' : 
                           e.target.classList.contains('doneButton') ? 'done' : null;
            if (action) this[action + 'Task'](e);
        });
    }

   // add or update task part

    addOrUpdateTask() {
        const taskText = this.todoInput.value.trim();
        if (taskText) {
            this.updateTask(taskText);
            this.todoInput.value = '';
        }
    }

    // add task part para dili mawala 

    addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item todo-item';
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="timestamp" style="display: block; margin-top: 0.5rem; color: gray;">Date Added: ${new Date().toLocaleString()}</span>
            <div style="margin-top: 0.5rem;">
                <button class="btn btn-success btn-sm doneButton">Done</button>
                <button class="btn btn-warning btn-sm editButton">Edit</button>
                <button class="btn btn-danger btn-sm removeButton">Remove</button>
            </div>
        `;
        this.todoList.appendChild(listItem);
    }

    // done task part nata 

    doneTask(event) {
        const taskItem = event.target.closest('.todo-item');
        const taskText = taskItem.querySelector('.task-text');
        taskText.classList.toggle('completed'); 

        const buttons = taskItem.querySelectorAll('button');
        buttons.forEach(button => button.disabled = true);
    }

    // updatetask part para dili mawala

    updateTask() {
        const taskText = this.todoInput.value.trim();
        if (taskText) {
        this.todoList.children[this.editingIndex].querySelector('.task-text').textContent = taskText;
        this.resetEditing();
    }
}

    // remocetask part para dili mawala

    removeTask(event) {
        this.todoList.removeChild(event.target.closest('.todo-item'));
    }

    // done task part

    doneTask(event) {
        const taskItem = event.target.closest('.todo-item');
        const taskText = taskItem.querySelector('.task-text');
        taskText.classList.toggle('completed');
        const buttons = taskItem.querySelectorAll('button');
        buttons.forEach(button => button.disabled = true);
    }

    //  edit task part 

    editTask(event) {
        const taskItem = event.target.closest('.todo-item');
        this.todoInput.value = taskItem.querySelector('.task-text').textContent;
        this.editingIndex = Array.from(this.todoList.children).indexOf(taskItem);
        this.addButton.textContent = 'Update';
    }

    // reset editing part

    resetEditing() {
        this.editingIndex = -1;
        this.addButton.textContent = 'Add';
    }

}

class TimestampedTodoList extends todoList {
    addTask(taskText) {
        super.addTask(taskText);
        const taskItem = this.todoList.lastChild; 
        const timestamp = document.createElement('span');
        timestamp.className = 'timestamp';
        timestamp.textContent = new Date().toLocaleString();
        taskItem.appendChild(timestamp);
    }
}

document.addEventListener('DOMContentLoaded', () => new todoList());
