const $ = document;

const inputBox = $.querySelector('#inputBox')
const addTaskBtn = $.querySelector('#addTaskBtn')

inputBox.addEventListener( 'keydown' , e => {
    e.code == 'Enter' && addTask()
})
addTaskBtn.addEventListener( 'click' , addTask)

function addTask(){
    console.log(inputBox.value);
}