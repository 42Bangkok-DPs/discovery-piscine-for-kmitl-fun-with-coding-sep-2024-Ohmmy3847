window.onload = function() {
    loadTasks();
    console.log(document.cookie)
    document.getElementById('new-task-btn').onclick = function() {
        let task = prompt("Enter a new task:");
        if (task) {
            addTask(task, true); // เพิ่ม task ใหม่ที่ด้านบน
            saveTasks(); // บันทึก tasks ใหม่
        }
    };
};

function addTask(task, isNewTask = false) {
    let taskDiv = document.createElement('div');
    taskDiv.innerText = task;

    taskDiv.onclick = function() {
        if (confirm("Do you want to delete this task?")) {
            taskDiv.remove();
            saveTasks();
        }
    };

    let ft_list = document.getElementById('ft_list');
    
    if (isNewTask) {
        ft_list.prepend(taskDiv);
    } else {
        ft_list.appendChild(taskDiv);
    }
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll('#ft_list div').forEach(task => tasks.push(task.innerText));
    document.cookie = "tasks=" + JSON.stringify(tasks);
    console.log("tasks=" + JSON.stringify(tasks)); 
}

function loadTasks() {
    let cookies = document.cookie.split('; ');
    let taskCookie = cookies.find(row => row.startsWith('tasks='));
    console.log(taskCookie)
    if (taskCookie) {
        let tasks = JSON.parse(taskCookie.split('=')[1]);
        console.log(tasks)
        tasks.forEach(task => addTask(task, false));
    }
    console.log(cookies);
}
