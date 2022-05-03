import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";

// GRUD -> GUI || CLI
// create
// read
// update
// delete

function App () {

    const tasks = [
        {id: 1, title: "HTML", isDone: true},       /*el*/
        {id: 2, title: "JS", isDone: true},         /*el*/
        {id: 3, title: "React", isDone: false},     /*el*/
        {id: 3, title: "React", isDone: false},     /*el*/
    ]

    return (
        <div className="App">
            <TodoList title="What to learn" tasks={tasks}/>
        </div>
    );
}

export default App;
