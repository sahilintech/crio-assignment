/* Activity 1 

// Get references to HTML elements
const html = document.getElementsByTagName("html")[0];
const body = document.getElementsByTagName("body")[0];
const taskList = document.getElementById("taskList");
const button = document.getElementsByClassName("completeButton")[0];

// Event listener for clicks on the entire HTML document
html.addEventListener('click', () => {
    console.log("html was clicked");
})

// Event listener for clicks on the entire body of the document
body.addEventListener('click', () => {
    console.log("body was clicked");
})

// Event listener for clicks on the element with id "taskList"
taskList.addEventListener('click', () => {
    console.log("ul was clicked");
})

// Event listener for clicks on the element with class "completeButton"
button.addEventListener('click', () => {
    console.log("button was clicked");
})


*/


/* Activity 2 (version 1 - repetitive)
// File: script.js

// Event listener for 'completeButton1'
document.getElementById('completeButton1').addEventListener('click', function () {
    alert('Completing task...');
});

// Event listener for 'editButton1'
document.getElementById('editButton1').addEventListener('click', function () {
    alert('Editing task...');
});

// Event listener for 'completeButton2'
document.getElementById('completeButton2').addEventListener('click', function () {
    alert('Completing task...');
});

// Event listener for 'editButton2'
document.getElementById('editButton2').addEventListener('click', function () {
    alert('Editing task...');
});


});
*/


/* Activity 2 (version 2 - dry) */

// Event listener for clicks on the element with id 'taskList'
document.getElementById('taskList').addEventListener('click', (event) => {
    // Check if the clicked element is a button inside the 'taskList'
    if (event.target.tagName === 'BUTTON') {
        // Switch based on the class of the clicked button
        switch (event.target.classList[0]) {
            case 'completeButton':
                alert("Completing task!");
                break;
            case 'editButton':
                alert("Editing task...");
                break;
        }
    }
});

// Event listener for 'taskList' during the capturing phase
document.getElementById('taskList').addEventListener('click', function (event) {
    // Alert during the capturing phase
    alert("Capturing Phase");

    // Check if the clicked element has the class 'deleteButton'
    if (event.target.classList.contains('deleteButton')) {
        // Display a confirmation popup
        const isConfirmed = confirm('Are you sure you want to delete this task?');

        // If the user clicks "OK" in the confirmation popup, delete the task
        if (isConfirmed) {
            const taskItem = event.target.closest('li');
            if (taskItem) {
                taskItem.remove();
                alert('Task deleted!');
            }
        }

        // Prevent event bubbling
        event.stopPropagation();
    }
}, true);

// Event listener for 'taskList' during the bubbling phase
document.getElementById('taskList').addEventListener('click', function (event) {
    // Alert during the bubbling phase
    alert("Bubbling Phase");
}, false);
