import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";

// GRUD -> GUI || CLI
// create
// read
// update
// delete

function App () {

    let [tasks,setTasks] =  useState ([
            {id: 1, title: "HTML", isDone: true},       //el
            {id: 2, title: "JS", isDone: true},         //el
            {id: 3, title: "React", isDone: false},     //el
            {id: 3, title: "React", isDone: false},     //el
        ]
    )

    const removeTask = (removeId:number) => {
        setTasks(tasks.filter((el)=> el.id !==removeId))
    }

    const changeFilter = (filterValue:string) => {
        console.log (filterValue)
    }

    let colander=tasks.filter(el=>!el.isDone)

    return (
        <div className="App">
            <TodoList
                title="What to learn"
                tasks={colander}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
