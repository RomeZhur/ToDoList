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
    const [tasks, setTasks] = useState <Array<TaskType>>([
            {id: 1, title: "HTML", isDone: true},
            {id: 2, title: "JS", isDone: true},
            {id: 3, title: "React", isDone: false},
        ])

    const todoListTitle_1 : string = "What to learn"

    const removeTask = (tasksID: number) => {
        setTasks(tasks.filter(t =>t.id !==tasksID))
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
