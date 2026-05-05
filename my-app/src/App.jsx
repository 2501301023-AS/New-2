// // Props (Properties) are used to pass data from one component to another component.
// function Welcome(props) {
// Example:-
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return <Welcome name="Rahul" />;
// }

// export default App;
// // Output:
// // Hello, Rahul




// State:-
// State is used to store data inside a component.
// Example:-
// When state changes, the component updates automatically.
// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0
//   };

//   render() {
//     return <h1>{this.state.count}</h1>;
//   }
// }

// export default Counter;
// // Output:
// // 0




// useState

// useState is a React Hook used to create state in functional components.
// Example:-
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </>
//   );
// }

// export default Counter;
// // Output: according to increse 


// useEffect

// useEffect is used for side effects like:

// API calls
// Timer
// Updating document title:-
// Example:-

// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count ${count}`;
//   }, [count]);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Click {count}
//     </button>
//   );
// }

// export default Timer;




// Example:-
import React, { useState, useEffect } from "react";

function Welcome(props) {
  return <h2>Hello {props.name}</h2>;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <div>
      <Welcome name="Student" />

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;