
const body = document.querySelector('body');
const addBtn = document.querySelector('.check-mark');
const input = document.getElementById('new-todo-input');
const todoContainer = document.querySelector('.todo-items');
const checkTask = document.querySelector('.todo-item .check-mark');
const delBtn = document.querySelector('.delete-button');
let todoItems = [];

const darkIcon = document.querySelector('.moon-icon');
const lightIcon = document.querySelector('.sun-icon');
   
// * ADD TASK
createTask = (text) => {
   const task = {
      text,
      checked: false,
      id: Date.now(),
   };

   todoItems.push(task);
   renderTasks(task);
   clearInput();
};

renderTasks = (task) => {
   const isChecked = task.checked ? 'done' : '';
   const node = document.createElement('div');
   node.setAttribute('class', `todo-item ${isChecked}`);
   node.setAttribute('data-key', task.id);
   node.innerHTML =   
   `<div class="check-and-text">
         <div class="check">
            <div id="${task.id}" class="check-mark">
               <img for="${task.id}" class="check-icon" src="assets/images/icon-check.svg" alt="Check icon">
            </div>
         </div>
         <div class="todo-text">
            ${task.text.value}
         </div>
      </div>

      <div class="delete-icon">
         <img class="delete-button" src="assets/images/icon-cross.svg" alt="Delete icon">
      </div>
   </div>`;
   todoContainer.append(node);
}; 

addBtn.addEventListener("click", () => {
   if (input.value == 0) return alert("Please, write a task");
   createTask(input);
});

input.addEventListener("keypress", event => {
   if (event.key === "Enter") {
      event.preventDefault();
      if (input.value == 0) return alert('Please, write a task');
      createTask(input);
   }
});

// * CLEAR INPUT
clearInput = () => {
   input.value = " ";
   input.focus();
};

// * LIGHT THEME
lightIcon.addEventListener("click", () => {
   body.classList.remove('dark');
   body.classList.add('light');      
}); 
      
// * DARK THEME
darkIcon.addEventListener("click", () => {
   body.classList.remove('light');
   body.classList.add('dark');
});
   
// * DELETE TASK
delBtn.addEventListener("click", (e) => {
   console.log(e);
});

// * MARK TASK
markTask = (key) => {
   const index = todoItems.findIndex(item => item.id === Number(key));
   todoItems[index].checked = !todoItems[index].checked;
   renderTasks(todoItems[index]);
};

todoContainer.addEventListener('click', event => {
   if (event.classList.contains('todo-item')) {
      console.log(1);
   };
});