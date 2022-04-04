import React, { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const incrementCount = () =>{
    setState(state+1)
    console.log(state+1);
}
const decrementCount = () =>{
    setState(state-1)
    console.log(state-1);

}
  return (
    <div className="container-fluid bg-dark text-white">
      <h1 className="text-center">Counter : {state}</h1>
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-success align-center btn-lg" onClick={incrementCount}>+</button>
      <button type="button" className="btn btn-danger center btn-lg" onClick={decrementCount}>-</button>
      </div>
    </div>
  );
}

export default App;
