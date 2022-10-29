const addBtn = document.querySelector(".check-mark")
const input = document.getElementById("new-todo-input")

const todoContainer = document.querySelector(".todo-items")

const itemsLeft = document.querySelector(".left-items span")
const allTasksBtn = document.querySelector(".all-items")
const activeTasksBtn = document.querySelector(".active-items")
const completedTasksBtn = document.querySelector(".completed-items")
const clearCompletedBtn = document.querySelector(".items-clear")

const body = document.querySelector("body")
const theme = document.querySelector(".theme")

createTask = (text) => {
   const task = {
      text,
      id: Date.now(),
   }

   renderTasks(task)
   clearInput()
}

renderTasks = (task) => {
   const todoItem = document.createElement("div")
   todoItem.classList.add("todo-item")
   todoItem.classList.add("active-task")
   todoItem.setAttribute("data-key", task.id)

   const checkAndText = document.createElement("div")
   checkAndText.classList.add("check-and-text")
   todoItem.appendChild(checkAndText)

   const checkContainer = document.createElement("div")
   checkContainer.classList.add("check")
   checkAndText.appendChild(checkContainer)

   const checkMark = document.createElement("div")
   checkMark.classList.add("check-mark")
   checkMark.innerHTML =
      '<img class="check-icon" src="assets/images/icon-check.svg" alt="Check icon">'
   checkContainer.appendChild(checkMark)

   const textContainer = document.createElement("div")
   textContainer.classList.add("todo-text")
   textContainer.innerText = task.text.value
   checkAndText.appendChild(textContainer)

   const deleteBtn = document.createElement("div")
   deleteBtn.classList.add("delete-button")
   deleteBtn.innerHTML =
      '<img class="delete-button" src="assets/images/icon-cross.svg" alt="Delete icon">'
   todoItem.appendChild(deleteBtn)

   todoContainer.append(todoItem)
   updateItemsCount(1)
}

clearInput = () => {
   input.value = " "
   input.focus()
}

clearAllCompleted = (checkedTask, tasks) => {
   for (const todoItem of tasks.children) {
      for (const checkAndText of todoItem.children) {
         for (const check of checkAndText.children) {
            for (const checkMark of check.children) {
               if (checkMark.classList.contains("checked-task")) {
                  const checkedTasks = tasks.querySelectorAll(checkedTask)
                  for (i = 0; i < checkedTasks.length; i++) {
                     todoItem.style.display = "none"
                     todoItem.innerHTML = " "
                     todoItem.removeAttribute("data-key")
                  }
                  updateItemsCount(-1)
               }
            }
         }
      }
   }
}

updateItemsCount = (number) => {
   itemsLeft.innerText = +itemsLeft.innerText + number
}

// * EVENTS
addBtn.addEventListener("click", () => {
   if (input.value == 0) return alert("Please, write a task")
   createTask(input)
})

input.addEventListener("keypress", (event) => {
   if (event.key === "Enter") {
      event.preventDefault()
      if (input.value == 0) return alert("Please, write a task")
      createTask(input)
   }
})

todoContainer.addEventListener("click", (event) => {
   const targetEl = event.target
   const markCircle = targetEl.closest("div")
   const markText = targetEl.closest(".check-and-text")

   // * MARK / MARK OFF TASK
   if (targetEl.classList.contains("check-mark")) {
      markCircle.classList.toggle("checked-task-background")
      markCircle.classList.toggle("checked-task")
      markText.classList.toggle("checked-task-text")
   }

   const removeTask = targetEl.closest(".todo-item")
   if (targetEl.classList.contains("delete-button")) {
      removeTask.remove()
      updateItemsCount(-1)
   }
})

allTasksBtn.addEventListener("click", () => {
   for (const todoItem of todoContainer.children) {
      for (const checkAndText of todoItem.children) {
         for (const check of checkAndText.children) {
            for (const checkMark of check.children) {
               todoItem.style.removeProperty("display")
            }
         }
      }
   }
})

activeTasksBtn.addEventListener("click", () => {
   for (const todoItem of todoContainer.children) {
      for (const checkAndText of todoItem.children) {
         for (const check of checkAndText.children) {
            for (const checkMark of check.children) {
               todoItem.style.removeProperty("display")
               if (checkMark.classList.contains("checked-task")) {
                  todoItem.classList.add("completed-task")
                  todoItem.style.display = "none"
               }
            }
         }
      }
   }
})

completedTasksBtn.addEventListener("click", () => {
   for (const todoItem of todoContainer.children) {
      for (const checkAndText of todoItem.children) {
         for (const check of checkAndText.children) {
            for (const checkMark of check.children) {
               todoItem.style.removeProperty("display")
               if (!checkMark.classList.contains("checked-task")) {
                  todoItem.style.display = "none"
               }
            }
         }
      }
   }
})

clearCompletedBtn.addEventListener("click", () => {
   clearAllCompleted(".checked-task", todoContainer)
})

theme.addEventListener("click", () => {
   body.classList.toggle("light")
})

new Sortable(todoContainer, {
   animation: 350,
   chosenClass: "chosen-class",
   forceFallback: true,
   dragoverBubble: true,
})
