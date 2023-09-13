let theInput = document.querySelector('.ADD-TASK input')
let thebuuton =document.querySelector('.ADD-TASK .Plus')
let TasksContainer = document.querySelector('.tasks-content')


let theTasksCount = document.querySelector('.tasks-status .tasks-count span')
let theTasksCompleted = document.querySelector('.tasks-status .tasks-completed span')

window.onload = () =>{
    theInput.focus()
}

thebuuton.onclick = function(){
    if(theInput.value ===''){
        noTasksmsg.innerHTML='<span>no tasks entered</span>'
    }else{
        let noTasksmsg= document.querySelector('.no-tasks-to-show')
       if(document.body.contains(noTasksmsg)){
        noTasksmsg.remove()
       } 
     
        let themainspan =document.createElement('span')
        let themainspantext = document.createTextNode(theInput.value)
        themainspan.appendChild(themainspantext)
        let thedeletspan = document.createElement('span')
        let thedeletspanname=document.createTextNode('delet')
        thedeletspan.appendChild(thedeletspanname)
        themainspan.appendChild(thedeletspan)
        themainspan.className= 'task-box'
        thedeletspan.className= 'Delet'
        let tasksarray =Array.from(TasksContainer.children).unshift(themainspan)
        TasksContainer.appendChild(themainspan)

   console.log(tasksarray)
        theInput.value=''
       
        theInput.focus()

        tasksnumber()
    }
   
}
document.addEventListener('click', function(e) {
    if (e.target.className == 'Delet'){
        e.target.parentNode.remove()
        if(TasksContainer.childElementCount == 0){
            createNtasks()
        }
    }

    if (e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished')
    }
    tasksnumber()
})

function createNtasks(){
let themsg = document.createElement('span')
let themsgtext = document.createTextNode('No Tasks To Show')
themsg.appendChild(themsgtext)
themsg.className ='no-tasks-to-show'
TasksContainer.appendChild(themsg)
}

function tasksnumber(){
    theTasksCount.innerHTML= document.querySelectorAll('.tasks-content .task-box').length
    theTasksCompleted.innerHTML= document.querySelectorAll('.tasks-content .task-box.finished').length
}