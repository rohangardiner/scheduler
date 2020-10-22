let taskList = [
    ['1', 'Go to space', '1', '', ''],
    ['2', 'Walk dog', '1', '6am', '8am'],
    ['3', 'Eat icecream', '2', '', '5.30pm'],
    ['4', 'Install flux capacitor', '2.5', '', 'midnight'],
    ['5', 'File taxes','0.75', '', 'midnight'],
    ['6', 'Sleep', '8', '10pm', '']
  ];
  console.log("initial: " + taskList.length);
populateTasks(taskList);
window.setInterval(function(){
	updateSchedule();
}, 5000);

function populateTasks(tasks){
	taskListData = tasks;
	taskListData.forEach(task => {
    var newEntry = document.createElement("button");
    newEntry.innerHTML = task[1] + " " + task[2] + " " + task[3] + " " + task[4] + " x";
    //task[0] is id, [1] is title, [2] is duration, [3] is start before, [4] is end before
  	newEntry.setAttribute("class", "taskItem");
  	newEntry.setAttribute("onclick", "remove(this)");
  	document.getElementById("sTasks").appendChild(newEntry)
});
}

function remove(el) {
  var element = el;
  element.remove();
  const index = taskList.indexOf(element);
  if (index > -1) {
  	taskList.splice(index, 1);
  }
  console.log(taskList);
}

function addEntry() {
  var newEntry = document.createElement("button");
  var taskID = (taskList.length + 1);
  var taskTitle = document.getElementById('title').value;
  var taskDuration = document.getElementById('duration').value;
  var taskStartBefore = document.getElementById('startBefore').value;
  var taskEndBefore = document.getElementById('endBefore').value;
  if (!taskDuration) taskDuration = 0.5;
  if (!taskStartBefore) taskStartBefore = "N/A";
  if (!taskEndBefore) taskEndBefore = "N/A";
  taskList.push([taskID, taskTitle, taskDuration, taskStartBefore, taskEndBefore]);
  newEntry.innerHTML = taskTitle + " " + taskDuration + " " + taskStartBefore + " " + taskEndBefore + " x";
  newEntry.setAttribute("class", "taskItem");
  newEntry.setAttribute("onclick", "remove(this)");
  document.getElementById("sTasks").appendChild(newEntry)
}

/*function createSchedule(btn, tasks) {
  var element = btn;
  element.remove();
  taskListData = tasks;
	taskListData.forEach(task => {
    newEntry.innerHTML = task[0] + " " + task[1] + " " + task[2] + " " + task[3] + " x";
  	document.getElementById("sDisplay").innerHTML += newEntry;
});
}*/

function updateSchedule() {
	document.getElementById("sDisplay").innerHTML = taskList;
}
