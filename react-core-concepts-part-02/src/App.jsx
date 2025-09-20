import './App.css'
// import Batsman from './Batsman';
// import Counter from './Counter';
import Runs from './Runs'

function App() {


  const handleClick = () => {
    alert('I am clicked!');
  }

  const handleClick2 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      
      {/* <h2>React</h2> */}
      
      <Runs></Runs>

      {/* <Batsman></Batsman> */}

      {/* <Counter></Counter> */}

      {/* <button onClick={handleClick}>Click Me</button> */}

      {/* <button onClick={() => handleClick2(7)}>Click Add</button> */}

    </>
  )
}

export default App