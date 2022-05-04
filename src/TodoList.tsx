import React, {useState} from 'react';

type PropsType = {
    title: string
    tasks: TaskType []
    removeTask: (removeId:number)=>void
    // changeFilter: (filterValue:string)=>void
}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type FilterValueType = "All"|"Active"|"Completed"

export const TodoList = (props: PropsType) => {

    const [filterForColander,setFilterForColander]=useState<FilterValueType>("All")

    const changeFilter = (filterValue:FilterValueType) => {
        setFilterForColander(filterValue)

        let colander = props.tasks
        if (filterForColander === "Active"){
            colander=props.tasks.filter(el=>!el.isDone)
        }
        if (filterForColander === "Completed"){
            colander=props.tasks.filter(el=>el.isDone)
        }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {colander.map((el, id)=>{
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
                <button onClick={()=>changeFilter("All")}>All</button>
                <button onClick={()=>changeFilter("Active")}>Active</button>
                <button onClick={()=>changeFilter("Completed")}>Completed</button>
            </div>

        </div>
    );
};


