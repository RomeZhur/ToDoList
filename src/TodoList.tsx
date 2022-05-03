import React from 'react';

type PropsType = {
    title: string
    tasks: TaskType []
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: PropsType) => {

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {props.tasks.map((el, id)=>{
                    return (
                        <li key={id}>
                            <button onClick={()=>console.log(el.id)}>Х</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

        </div>
    );
};


