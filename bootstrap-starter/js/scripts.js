// Template
const elTemplate = document.querySelector('#todo-item--template').content

// elForm
const elForm = document.querySelector('.todo-form');
const elInput = document.querySelector('.todo-input');

// elList
const elList = document.querySelector('.todo-list');

// elCount
const elAllCount = document.querySelector('.all-count');
const elCompletedCount = document.querySelector('.complated-count');



let todos = [];

// let Counter = 0;

function renderTodos(arr, element){

  element.innerHTML = null;
  arr.forEach((todo) => {
    const cloneTemplate = elTemplate.cloneNode(true);

    let elCheckBox = cloneTemplate.querySelector('.todo-input-complete');
    elCheckBox.dataset.id = todo.id
    let elContent = cloneTemplate.querySelector('.todo-item-complete-text');
    let deleteBtn = cloneTemplate.querySelector('.todo-item-delete-btn');
    deleteBtn.dataset.id = todo.id

    deleteBtn.addEventListener('click', (e) =>{
      const itemId = e.target.dataset.id

      const findIndex = todos.findIndex(todo => todo.id = itemId)

      todos.splice(findIndex, 1)

      renderTodos(todos, elList)
    })

    elCheckBox.addEventListener('click', (e) =>{
      const itemId = e.target.dataset.id

      const findElem = todos.find(todo => todo.id = itemId)

      findElem.isCompleted = !findElem.isCompleted

      if(findElem.isCompleted){
        elContent.classList.add('text-danger')
      }else{
        elContent.classList.remove('text-danger')
      }

      console.log(findElem)

      // elCompletedCount.textContent = Counter
    });

    elContent.textContent = todo.content

    element.appendChild(cloneTemplate)
  })
  elAllCount.textContent = todos.length
}

renderTodos(todos, elList)



elForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let inputValue = elInput.value.trim();


  let newObj = {
    id : new Date().getTime(),
    content: inputValue,
    isCompleted: false
  }

  elInput.value = null;

  todos.unshift(newObj);

  renderTodos(todos, elList)
})
