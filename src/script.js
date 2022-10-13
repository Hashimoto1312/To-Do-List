toDoList = () => {
   const body = document.querySelector('body');
   const inputTask = document.getElementById('new-todo-input');
   const todoContainer = document.querySelector('.todo-items-wrapper');
   
   // ADD TASK
   createTaskDiv = (task) => {
      let taskDiv = " ";
      taskDiv.innerHTML =
      `<div class="todo-item">
         <div class="check-and-text">
            <div class="check">
               <div class="check-mark">
                  <img class="check-icon" src="assets/images/icon-check.svg" alt="Check icon">
               </div>
            </div>
            <div class="todo-text">
               ${task.value}
            </div>
         </div>

         <div class="delete-icon">
            <img class="delete-button" src="assets/images/icon-cross.svg" alt="Delete icon">
         </div>
      </div>`
      return taskDiv;
   }

   createTask = (task) => {
      let tasksContainer = todoContainer;
      let newTask = createTaskDiv(task);
      tasksContainer.appendChild(document.createTextNode(newTask));
      clearInput();
   }

   const addBtn = document.querySelector('.check-mark');
   addBtn.addEventListener("click", () => {
      if (!inputTask.value) return;
      createTask(inputTask.value);
   });

   inputTask.addEventListener("keypress", (e) => {
      if (e.keycode === 13) {
         if (!inputTask.value) return;
         createTask();
      }
   });

   // CLEAR INPUT 
   clearInput = () => {
      inputTask.value = " ";
      inputTask.focus();
   }
   
   // DELETE TASK
   const deleteBtn = document.querySelector('.delete-button');
   deleteBtn.addEventListener("click", (e) => {
      
   });

   // MARK TASK
   markTask = () => {
      checkTask.classList.add('check-task-background')
      body.classList.add('completed-task');
   }

   const checkTask = document.querySelector('.todo-item .check-mark');
   checkTask.addEventListener('click', () => {
      if (!checkTask.classList.contains('.check-task-background')) {
         markTask();
      }
   });

   // FILTER


   
   // CLEAR COMPLETED



   // REORDER
   const reoderTask = document.querySelector('.todo-item');

   
   // THEMES
   // LIGHT THEME
   const lightIcon = document.querySelector('.sun-icon');
   lightIcon.addEventListener("click", () => {
      body.classList.remove('dark');
      body.classList.add('light');      
   });
   
   // DARK THEME
   const darkIcon = document.querySelector('.moon-icon'); 
   darkIcon.addEventListener("click", () => {
      body.classList.remove('light');
      body.classList.add('dark');
   })
}   
toDoList();