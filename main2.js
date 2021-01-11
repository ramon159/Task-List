var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
var todos = ['faça X', 'faça Y', 'faça Z'];
tasks.forEach(createTask);
buttonElement.onclick = addTask;

function createTask(text) {
    listElement.innerHTML +=
        '<li>' +
        `<label>${text}</label>` +
        ' <button class="delete" onclick="removeTask(this)">Delete</button>' +
        '</li>';
}

function addTask() {
    createTask(inputElement.value);
    inputElement.value = '';
}

var removeTask = function (btn) {
    console.log('this', this,'btn', btn)
    let li = btn.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
};
