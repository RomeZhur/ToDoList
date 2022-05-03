import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

// GRUD -> GUI || CLI
// create
// read
// update
// delete

function App () {

    const tasks = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 3, title: "React", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList
                title="What to learn"
                tasks={tasks}
            />
         </div>
    );
}

export default App;
