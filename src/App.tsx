import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

// GRUD -> GUI || CLI
// create
// read
// update
// delete


function App () {
    //BILL

    let [tasks, setTasks] = useState([
            {id: 1, title: "HTML", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "React", isDone: false},
            {id: 4, title: "React", isDone: false},
        ])

    const todoListTitle_1           = "What_1"
    // const todoListTitle_2        = "What_2"
    // const todoListTitle_3        = "What_3"

    let tasks: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "React", isDone: false},
    ]

    const removeTask = (tasksID: number) => {
        setTasks(tasks = tasks.filter(t =>t.id !==tasksID))
        console.log (tasks)
    }

    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={tasks}
                removeTask={removeTask}
            />
            {/*<TodoList title={todoListTitle_2}/>*/}
            {/*<TodoList title={todoListTitle_3}/>*/}
        </div>
    );
}

export default App;
