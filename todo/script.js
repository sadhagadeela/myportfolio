let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const list = document.getElementById('taskList');
const count = document.getElementById('taskCount');

function save(){localStorage.setItem('tasks',JSON.stringify(tasks)); render();}
function addTask(){
  const input = document.getElementById('taskInput');
  if(!input.value.trim()) return;
  tasks.push({text:input.value, done:false});
  input.value=''; save();
}
function toggle(i){tasks[i].done=!tasks[i].done; save();}
function delTask(i){tasks.splice(i,1); save();}
function clearCompleted(){tasks=tasks.filter(t=>!t.done); save();}
function render(){
  list.innerHTML='';
  tasks.forEach((t,i)=>{
    list.innerHTML+=`<li class="${t.done?'completed':''}"><div><input type="checkbox" ${t.done?'checked':''} onchange="toggle(${i})"> <span>${t.text}</span></div><span onclick="delTask(${i})" style="cursor:pointer">🗑️</span></li>`;
  });
  count.textContent=`${tasks.length} tasks • ${tasks.filter(t=>t.done).length} completed`;
}
render();
