toDoList = () => {
   const body = document.querySelector('body');
   const inputTask = document.querySelector('new-todo-input');
   const checkIcon = document.querySelector('check-icon');
   
   // ADD TASK
   const addBtn = document.querySelector('.check-mark');
   addBtn.addEventListener("click", () => {

   });
   
   // DELETE TASK
   const deleteBtn = document.querySelector('.delete-button');
   deleteBtn.addEventListener("click", () => {

   });

   // MARK AND MARK OFF TASK
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

   const reoderTask = document.querySelector('.todo-item');
   // REORDER

   
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