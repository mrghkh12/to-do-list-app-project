const $ = document;

const inputBox = $.querySelector('#inputBox')
const addTaskBtn = $.querySelector('#addTaskBtn')

inputBox.addEventListener( 'keydown' , e => {
    e.code == 'Enter' && addTask()
})
addTaskBtn.addEventListener( 'click' , addTask)

const listContainer = $.querySelector('.list-container')

function addTask(){
    if(inputBox.value.trim() == ''){
        alert('you must write something!')
    }else{
        let taskElem = $.createElement('li')
        taskElem.innerHTML = inputBox.value
        let delTaskElem = $.createElement('span')
        delTaskElem.innerHTML = '\u00d7'
        taskElem.appendChild(delTaskElem)
        listContainer.appendChild(taskElem)
    }

    inputBox.value = ''
}