let taskList = [
    ['0', 'Go to space', '1', '', ''],
    ['1', 'Walk dog', '1', '6am', '8am'],
    ['2', 'Eat icecream', '2', '', '5.30pm'],
    ['3', 'Install flux capacitor', '2.5', '', 'midnight'],
    ['4', 'File taxes','0.75', '', 'midnight'],
    ['5', 'Sleep', '8', '10pm', '']
  ];
  taskTotal = taskList.length;
populateTasks(taskList);
window.setInterval(function(){
	updateSchedule();
}, 5000);

function populateTasks(tasks){
document.getElementById("sTasks").innerHTML = "";
	taskListData = tasks;
	taskListData.forEach(task => {
    var newEntry = document.createElement("button");
    newEntry.innerHTML = task[0] + " " + task[1] + " " + task[2] + " " + task[3] + " " + task[4] + " x";
    //task[0] is id, [1] is title, [2] is duration, [3] is start before, [4] is end before
  	newEntry.setAttribute("class", "taskItem");
  	newEntry.setAttribute("onclick", "remove(this)");
  	document.getElementById("sTasks").appendChild(newEntry)
});
updateSchedule();
}

function remove(el) {
  var element = el;
  var taskID = el.innerHTML.substring(0, el.innerHTML.indexOf(' ')); 
  //var taskID = taskID.substring(0, 1);
  element.remove();
  for(var i = 0; i <= taskList.length - 1; i++){
      if(taskList[i][0] == taskID){
          taskList.splice(i--,1);
      }
  }
  updateSchedule();
}

function addEntry() {
  var newEntry = document.createElement("button");
  taskTotal++;
  var taskID = taskTotal;
  var taskTitle = document.getElementById('title').value;
  var taskDuration = document.getElementById('duration').value;
  var taskStartBefore = document.getElementById('startBefore').value;
  var taskEndBefore = document.getElementById('endBefore').value;
  if (!taskTitle) taskTitle = "Task" + taskID;
  if (!taskDuration) taskDuration = 0.5;
  if (!taskStartBefore) taskStartBefore = "N/A";
  if (!taskEndBefore) taskEndBefore = "N/A";
  taskList.push([""+taskID, taskTitle, ""+taskDuration, taskStartBefore, taskEndBefore]);
  populateTasks(taskList);
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
	document.getElementById("schedule").innerHTML = ""
	/*document.getElementById("schedule").innerHTML = "";
	taskListData.forEach(task => {
  	var newEntry = document.createElement("div");
    newEntry.innerHTML = task[1] + " " + task[2] + " " + task[3] + " " + task[4];
    newEntry.setAttribute("class", "slot");
  	document.getElementById("schedule").innerHTML += newEntry;
	});*/
  for (let i = 0; i < taskList.length; i++) {
    // get the size of the inner array
    document.getElementById("schedule").innerHTML += "<div class=\"slot\">" + taskList[i][1] + "</div>"
    var innerArrayLength = taskList[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
      //console.log('[' + i + ',' + j + '] = ' + taskList[i][j]);
    }
	}
}
