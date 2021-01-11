let listTask = document.querySelector('#progress ul');
let inputTask = document.querySelector('#progress input');
let buttonAddTask = document.querySelector('#progress button.addTask');
let tasks = ['faça X', 'faça Y', 'faça Z'];

tasks.forEach((x) => {
    console.log(x)
});
let x = y => {return y*2}
console.log(x(2))
buttonAddTask.onclick = addElement;

function createTask(text) {
    let li = document.createElement('li');
    let label = document.createElement('label');
    let buttonDelete = document.createElement('button');
    let buttonEdit = document.createElement('button');
    let inputEdit = document.createElement('input');
    let checkBox = document.createElement('input');

    checkBox.setAttribute('type', 'checkBox');
    checkBox.setAttribute('onclick', 'moveTask(this)');

    label.innerText = text + ' ';

    inputEdit.style.display = 'none';
    inputEdit.className = 'inputEdit';

    buttonDelete.className = 'delete';
    buttonDelete.innerText = 'Deletar';
    buttonDelete.setAttribute('onclick', 'removeTask(this)');

    buttonEdit.className = 'edit';
    buttonEdit.innerText = 'Editar';
    buttonEdit.setAttribute('onclick', 'editTask(this)');

    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(inputEdit);
    li.appendChild(buttonEdit);
    li.appendChild(buttonDelete);
    listTask.appendChild(li);
}

function addElement() {
    if (inputTask.value !== '') {
        createTask(inputTask.value);
    }

    inputTask.value = '';
}
//  ou onclick = "this.parentNode.remove()" 
function removeTask(button) {
    let li = button.parentNode;
    /*     
    let ul = li.parentNode;
    ul.removeChild(li);
     */
    li.remove();
}

function editTask(button) {
    let li = button.parentNode;
    let label = li.querySelector('label');
    let inputEdit = li.querySelector('input.inputEdit');

    if (inputEdit.value === '') {
        inputEdit.value = label.innerText;
        inputEdit.style.display = 'inline';
    } else {
        label.innerText = inputEdit.value + ' ';
        inputEdit.value = '';
        inputEdit.style.display = 'none';
    }
}

function moveTask(checkBox) {
    //move and set none on edit button
    let task = checkBox.parentNode;
    let progress = document.getElementById('progress');
    let complete = document.getElementById('complete');
    progressTask = progress.querySelector('ul');
    completeTask = complete.querySelector('ul');

    if (task.parentNode.parentNode.id == 'progress') {
        //move to complete
        console.log('move to complete');
        progressTask.removeChild(task);
        completeTask.appendChild(task);
    } else {
        //move to progress
        console.log('move to progress');
        completeTask.removeChild(task);
        progressTask.appendChild(task);
    }
}
