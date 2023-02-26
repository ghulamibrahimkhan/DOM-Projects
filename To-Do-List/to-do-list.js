// Variables

const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-task')
const taskContainer = document.getElementById('task-container')

// Event Listner for add button

addTask.addEventListener('click',function(){

   let task = document.createElement('div')
   task.classList.add('task')

   let li = document.createElement('li')
   li.innerText = `${inputTask.value}`
   task.appendChild(li)

   let checkBtn = document.createElement('button');
   checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
   checkBtn.classList.add('checkTask')
   task.appendChild(checkBtn)

   let delBtn = document.createElement('button');
   delBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
   delBtn.classList.add('delTask');
   task.appendChild(delBtn)

   if(inputTask.value === ""){
      alert('Please Enter a Task')
   }
   else{
      taskContainer.appendChild(task)
   }
   inputTask.value = ""

   checkBtn.addEventListener('click',function(){
      target = checkBtn.parentElement.style.textDecoration = 'line-through' 
   })
   delBtn.addEventListener('click',function(){
      target = delBtn.parentElement.remove()
   })
})