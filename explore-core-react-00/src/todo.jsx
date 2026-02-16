// export default function ToDo({task, isDone}) {
//     return (
//         <ul>
//             <li>Task: {task}</li>
//         </ul>
//     )
// }

    // conditional rendering : option 01

// export default function ToDo({task, isDone}) {
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else {
//         return <li>To be done: {task}</li>
//     }
// }

    // conditional rendering : option 02

// export default function ToDo({task, isDone, time = 0}) {
//     if (isDone === true) {
//         return <li>Done: {task}, Duration: {time}</li>
//     }
//     return <li>To be done: {task}, Duration: {time}</li>
// }

    // conditional rendering : option 03 ternary

// condition ? true : false

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone ?
//         <li> Done: {task}, Duration: {time}</li>
//         : <li>To be done: {task}</li>
// }

    // conditional rendering : option 04 && operator

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone && <li>Done Task: {task}, Duration: {time}</li>
// }

   // conditional rendering : option 05 || operator

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone || <li>To be done : {task}, Duration: {time}</li>
// }


    // conditional rendering : option 06 || instead of using && and ||

    // export default function ToDo({task, isDone}) {
    //     if (isDone === true) {
    //         return <li>Done: {task}</li>
    //     }
    //     else {
    //         return null;
    //     }
    // }

    // conditional rendering : option 07 || use variables

    export default function ToDo({task, isDone, time}) {
        // const displayTime = time ? time: 100;
        let listItem;
        if (isDone === true) {
            listItem = <li>Done: {task}, Duration: {time ? 'I am done ✔️' : 'I am not done yet ❌'}</li>
        }
        else {
            listItem = <li>To be done: {task}, Duration: {time}</li>
        }
        return listItem;
    }