import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <h3>What to learn</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                    <li><input type="checkbox" checked={true}/> <span>React</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}


// let a = {
//     name: "Roman",
//     age: 30,
//     address: {
//         city: "Minsk",
//         country: "Belarus"
//     }
// };

// let users = [
//     {
//         name: "Roman",
//         age: 30,
//         address: {
//             city: "Minsk",
//             country: "Belarus"
//         }
//     },
//     {
//         name: "Alex",
//         age: 20,
//         address: {
//             city: "Minsk",
//             country: "Belarus"
//         }
//     },
//     {
//         name: "Oleg",
//         age: 40,
//         address: {
//             city: "Minsk",
//             country: "Belarus"
//         }
//     }
// ]
//
// let b = 10;
// b     = 115;
//
// // console.log (a.address.country);
// console.log (users[0].address.country);

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
// // function Hello () {
// //     debugger;
// //     alert("Hello")
// // }
// //
// // Hello();

export default App;
