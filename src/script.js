toDoList = () => {
   const inputTask = document.getElementById('todo-input');
   const addButton = document.querySelector('.check-mark');
   const tasks = document.querySelector('.tasks');
   const darkLightMode = document.querySelector('.dark-light-icon');

   // CREATE TASK
   createTask = (event) => {
      event.preventDefault();
      let text = inputTask;
      console.log(text.value);
   };


   // MARK TASK


   // DELETE TASK
}
toDoList();