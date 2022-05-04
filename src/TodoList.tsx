import React, {useState} from 'react';

type PropsType = {
    title: string
    tasks: TaskType []
    removeTask: (removeId:number)=>void
    changeFilter: (filterValue:string)=>void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: PropsType) => {

    const [filterForColander,setFilterForColander]=useState("All")

    const changeFilter = (filterValue:string) => {
        setFilterForColander(filterValue)

        let colander = tasks
        if (filterForColander === "Active"){
            colander=tasks.filter(el=>!el.isDone)
        }
        if (filterForColander === "Completed"){
            colander=tasks.filter(el=>el.isDone)
        }

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
                            <button onClick={()=>props.removeTask(el.id)}>Х</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>

            <div>
                <button onClick={()=>props.changeFilter("All")}>All</button>
                <button onClick={()=>props.changeFilter("Active")}>Active</button>
                <button onClick={()=>props.changeFilter("Completed")}>Completed</button>
            </div>

        </div>
    );
};


