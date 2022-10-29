# Frontend Mentor - Todo app

![Design preview for the Todo app coding challenge](./assets/design/desktop-preview.jpg)

## Table of contents

- [Frontend Mentor - Todo app](#frontend-mentor---todo-app)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Upgrades for future versions](#upgrades-for-future-versions)
    - [Running](#running)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] **Add** new todos to the lizst
- [x] **Mark** todos as complete
- [x] **Delete** todos from the list
- [x] **Filter** by all/active/complete todos
- [x] **Clear** all completed todos
- [x] **Toggle** light and dark mode
- [x] **Bonus**: Drag and drop to reorder items on the list

### Upgrades for future versions
- [] Local storage
- [] SortableJS local storage

### Running

![](./assets/images/Todolist.gif)

### Links

- Solution URL : [Solution](https://www.frontendmentor.io/solutions/to-do-list-vanilla-javascript-responsive-dark-and-light-mode-cDbcEpj9Qj)
- Live Site URL : [Site](https://todolist-sigma-blue.vercel.app/)

## My process
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript
- [Sortable JS](https://github.com/SortableJS/Sortable)

### What I learned

Neste projeto o que mais aprendi foi como manipular melhor o [DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction), este projeto me forçou bastante a pesquisar documentação e testar várias vezes.

Criar elementos, adicionar classes a esses elementos, manipular essas classes de modo interativo e dinâmico por meio de eventos de click foram coisas que repeti bastante e concerteza fixou bastante por meio deste projeto.

Também aprendi a usar melhor os MediasQueries do CSS

Alguns exemplos abaixo :

```js
renderTasks = (task) => {
   const todoItem = document.createElement("div")
   todoItem.classList.add("todo-item")
   todoItem.classList.add("active-task")
   todoItem.setAttribute("data-key", task.id)
}

```
---

```js
theme.addEventListener("click", () => {
   body.classList.toggle("light")
})
```
----

```js
addBtn.addEventListener("click", () => {
   if (input.value == 0) return alert("Please, write a task")
   createTask(input)
})
```
### Continued development

Nesse projeto usei apenas Javascript Vanilla, mas futuramente pretendo fazer uma outra lista de tarefas mais interativa e com React, também aceito com prazer pull requests e issues de melhorias que posso fazer na legibilidade do código.

### Useful resources

- [addEventListener is not a function in JavaScript](https://bobbyhadz.com/blog/javascript-addeventlistener-is-not-a-function) - Tive um problema ao selecionar classes iguais porem em divs diferentes com querySelectorAll e este artigo me ajudou bastante.
   
- [HTML Elements](https://www.w3schools.com/jsref/prop_element_classlist.asp) - Essa pagina da w3schools me ajudou bastante para testar métodos no meu código por meio de tentativa e erro, recomendo.

## Author

- Linktree - [Kendi Hashimoto](https://linktr.ee/Hashimoto01)
- Frontend Mentor - [@Kendi Hashimoto](https://www.frontendmentor.io/profile/Hashimoto1312)