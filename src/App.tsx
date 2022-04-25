import React from 'react';
import './App.css';
import TodoList from "./TodoList";

// GRUD -> GUI || CLI
// create
// read
// update
// delete

function App () {
    const todoListTitle_1 = "What_1"
    const todoListTitle_2 = "What_2"
    const todoListTitle_3 = "What_3"
    return (
        <div className="App">
            <TodoList title={todoListTitle_1}/>
            <TodoList title={todoListTitle_2}/>
            <TodoList title={todoListTitle_3}/>
        </div>
    );
}


// // let a = {
// //     name: "Roman",
// //     age: 30,
// //     address: {
// //         city: "Minsk",
// //         country: "Belarus"
// //     }
// // };
//
// // let users = [
// //     {
// //         name: "Roman",
// //         age: 30,
// //         address: {
// //             city: "Minsk",
// //             country: "Belarus"
// //         }
// //     },
// //     {
// //         name: "Alex",
// //         age: 20,
// //         address: {
// //             city: "Minsk",
// //             country: "Belarus"
// //         }
// //     },
// //     {
// //         name: "Oleg",
// //         age: 40,
// //         address: {
// //             city: "Minsk",
// //             country: "Belarus"
// //         }
// //     }
// // ]
// //
// // let b = 10;
// // b     = 115;
// //
// // console.log (a.address.country);
// // console.log (users[0].address.country);
//
// function App () {
//     // полезное здесь
//     // возвращаем JSX => HTML подобный js
//     return  (
//         <div>
//             This is APP
//             <Rating/>
//             <Accordion/>
//         </div>
//     );
// }
//
// function Rating () {
//     // полезное здесь
//     // возвращаем JSX => HTML подобный js
//     return  (
//         <div>
//             <div>star</div>
//             <div>star</div>
//             <div>star</div>
//             <div>star</div>
//             <div>star</div>
//         </div>
//     );
// }
//
// function Accordion () {
//     // полезное здесь
//     // возвращаем JSX => HTML подобный js
//     return <div>
//         <h3>Меню</h3>
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     </div>
// }
//
//
// function Hello () {
//     debugger;
//     alert("Hello")
// }
//
// Hello();

export default App;
