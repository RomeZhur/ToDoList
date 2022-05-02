import React from 'react';

type TodoListPropsType = {
    title: string
    tasks: TaskType []
    removeTask: (taskID:number) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    const tasksJSXElements = props.tasks.map(element => {
        return (
            <li key={element.id}>
                <input type="checkbox" checked={element.isDone}/>
                <span>{element.title}</span>
                <button onClick={()=>{props.removeTask(element.id)}}>Х</button>
            </li>
        )
    })

    return (

        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {tasksJSXElements}
            </ul>

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

        </div>
    );
};

export default TodoList;
