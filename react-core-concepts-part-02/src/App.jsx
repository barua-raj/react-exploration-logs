import { Suspense } from 'react';
import './App.css'
// import Batsman from './Batsman';
// import Counter from './Counter';
import Runs from './Runs'
import Users from './Users';
import Friends from './Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function App() {

  const friendsPromise = fetchFriends();

  const handleClick = () => {
    alert('I am clicked!');
  }

  const handleClick2 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      
      <h2>Vite + React</h2>

      <Suspense fallback = {<h3>Loading...</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>
      
      <Suspense fallback = {<h3>Friends are coming...</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>


      {/* <Users></Users> */}


      <Runs></Runs>

      {/* <Batsman></Batsman> */}

      {/* <Counter></Counter> */}

      {/* <button onClick={handleClick}>Click Me</button> */}

      {/* <button onClick={() => handleClick2(7)}>Click Add</button> */}

    </>
  )
}

export default App