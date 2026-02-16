import './App.css'
// import ToDo from './todo';
// import Actor from './actor';
// import Singer from './singer';
import Library from './Library';


function App() {

  // const time = 50;

  // const singers = [
  //   {id: 1, name: 'Dr. Mahfuz', age: 70},
  //   {id: 2, name: 'Tahsan', age: 50},
  //   {id: 3, name: 'Asif', age: 60}
  // ];

  // const actors = ['Bappa Raaj', 'Sakib Khan', 'Omar Sunny', 'Salman Shah', 'Nayok Jasim'];

  const books = [
    {id: 1, name: 'Physics', price: 250},
    {id: 2, name: 'Math', price: 500},
    {id: 3, name: 'History', price: 400},
    {id: 4, name: 'English', price: 450},
    {id: 5, name: 'Biology', price: 350}
  ];

  return (
    <>
      <h1>React Core Concepts</h1>
      
      <Library books={books}></Library>
      
      {/* {
        singers.map (singer => <Singer key={singer.id} singer={singer}></Singer>)
      } */}


      {/* {
        actors.map (actor => <Actor actor={actor}></Actor>)
      } */}


      {/* {
        actors.map (actor => <Actor actor={actor}></Actor>)
      } */}
      
      
      {/* <ToDo
        task="Learn React"
        isDone={true}
        time="30">
      </ToDo>
      <ToDo
        task="Revise JS"
        isDone={false}
        time="">
      </ToDo>
      <ToDo
        task="Take a shower"
        isDone={true}
        time="">
      </ToDo> */}
      {/* <Player name="Tamim Iqbal" runs="10000"></Player>
      <Player name="Sakib Al Hasan" runs="12000"></Player>

      <Players name="Adam Gilchrist" runs="20000"></Players>
      <Players name="Ricky Ponting" runs="30000"></Players>
      <Players name="Md. Afridi"></Players>
      
      <Students name="Bappy Barua" grade="A-"></Students>
      <Students name="Bappa Barua" grade="B"></Students> */}

    </>
  )
}

// function Players({name, runs = 0}) {
//   return (
//     <div className='player'>
//       <h5>Player Name: {name}</h5>
//       <h5>Player Total Runs: {runs}</h5>
//     </div>
//   )
// }


// function Player({name, runs}) {
//   return (
//     <div className="player">
//       <h5>Player Name: {name}</h5>
//       <h5>Total Runs: {runs}</h5>
//     </div>
//   )
// }

// function Students(props) {
//   return (
//     <div style={{
//       border: '1px solid tomato',
//       borderRadius: '20px',
//       padding: '10px',
//       margin: '10px'
//     }}>
//       <h4>Student Name: {props.name}</h4>
//       <h4>Student Grade: {props.grade}</h4>
//     </div>
//   )
// }

// function Student() {
//   return (
//     <div className="student">
//       <p>Name: </p>
//       <p>Department: </p>
//     </div>
//   )
// }

// function Person() {
//   const age = 20;
//   const name = "Rahim";
//   const personStyle = {
//     color: 'red',
//     fontSize: '20px',
//     textAlign: 'left'
//   };
//   return (
//     <p style={personStyle}>I love my country! {name} {age}</p>
//   )
// }

// function Developer(props) {
//   console.log(props);
  
//   return (
//     <div style={{
//       border: '2px solid green',
//       borderRadius: '20px',
//       margin: '10px',
//       padding: '10px'
//     }}>
//       <h4>Developer Name: {props.name}</h4>
//       <h4>Technology Name: {props.tech}</h4>
//     </div>
//   )
// }




export default App