import React, {useEffect, useState} from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CreateTask from '../modals/CreateTask'
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }


    return (
        <DragDropContext>
            <Droppable droppableId='header'>
                {(provided) => (
        <>
            <div className = "header " {...provided.droppableProps} ref={provided.innerRef}>
                <div className="left-side" style={{display:"flex"}}>
                    <i className="fa fa-chevron-down"></i>
                    <h3>Open</h3>
                </div>
            
                <button className = "btn btn-light mt-2" onClick = {() => setModal(true)} > <i className="fa fa-plus"></i></button>
            </div>
            <Draggable  draggableId={"task-container"}>
                {(provided)=>(
                    <>
                      <div className = "task-container" {...provided.droppableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            {taskList && taskList.map((obj , index) => 
            
            <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
                    </>
                )}
            </Draggable>
        </>
            )} 
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;