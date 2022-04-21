import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let a = {
//     name: "Roman",
//     age: 30,
//     address: {
//         city: "Minsk",
//         country: "Belarus"
//     }
// };

let users = [
    {
        name: "Roman",
        age: 30,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Alex",
        age: 20,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    },
    {
        name: "Oleg",
        age: 40,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    }
]

// console.log (a.address.country);
console.log (users[0].address.country);
