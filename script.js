//Function to add a new task
function addTask(){
  var input = document.getElementById('taskInput').value;
  if(input !== ''){
    var ul = document.getElementById('taskList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
    document.getElementById('taskInput').value = '';
    li.onclick = function(){
      li.classList.toggle('completed');
    };

  }else {
    alert("Please enter a task")
  }
}