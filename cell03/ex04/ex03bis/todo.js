$(document).ready(function() {
    loadTasks();

    $('#new-task-btn').click(function() {
        let task = prompt("Enter a new task:");
        if (task) {
            addTask(task, true); // Add new task to the top
            saveTasks(); // Save new tasks
        }
    });
});

function addTask(task, isNewTask = false) {
    let taskDiv = $('<div></div>').text(task);

    taskDiv.click(function() {
        if (confirm("Do you want to delete this task?")) {
            $(this).remove();
            saveTasks();
        }
    });

    let $ftList = $('#ft_list');
    
    if (isNewTask) {
        $ftList.prepend(taskDiv);
    } else {
        $ftList.append(taskDiv);
    }
}

function saveTasks() {
    let tasks = [];
    $('#ft_list div').each(function() {
        tasks.push($(this).text());
    });
    document.cookie = "tasks=" + JSON.stringify(tasks);
    console.log("tasks=" + JSON.stringify(tasks));
}

function loadTasks() {
    let cookies = document.cookie.split('; ');
    let taskCookie = cookies.find(row => row.startsWith('tasks='));
    if (taskCookie) {
        let tasks = JSON.parse(taskCookie.split('=')[1]);
        tasks.forEach(task => addTask(task, false));
    }
}
