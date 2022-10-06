toDoList = () => {
   // FUNCTIONALITIES
   const inputTask = document.getElementById('new-todo-input');
   const addButton = document.querySelector('.check-mark');
   const tasks = document.querySelector('.tasks');

   // CREATE TASK

   
   // MARK TASK


   // DELETE TASK

   // THEMES
   const body = document.querySelector('body');

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
   });

}
toDoList();