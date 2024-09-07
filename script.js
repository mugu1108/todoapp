const todoList = document.getElementById('todo-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoButton = document.getElementById('add-todo');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        li.style.textDecoration = 'line-through';
      } else {
        li.style.textDecoration = 'none';
      }
    });
    li.appendChild(checkbox);
    li.textContent = todo;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

addTodoButton.addEventListener('click', () => {
  const newTodo = newTodoInput.value;
  if (newTodo) {
    todos.push(newTodo);
    newTodoInput.value = '';
    renderTodos();
  }
});

renderTodos();
