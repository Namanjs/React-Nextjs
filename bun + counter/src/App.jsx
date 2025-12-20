import { useState } from "react";
import "./App.css";

function App(){

  const[count, setCount] = useState(0)

  const[countToSet, setCountToSet] = useState(0);

  return(
    <>
    <h1 style={{marginLeft: "15px"}}>Counter is {count}</h1>

    <div className="card">Count is {count}</div>

    <div>
      <button onClick={() => setCount((prev) => prev + 1)} style={{margin: "0px 5px"}}>Increase</button>
      <button onClick={() => setCount((prev) => Math.max(prev - 1, 0))} style={{margin: "0px 5px"}}>Decrease</button>
      <button onClick={() => setCount((prev) => 0)} style={{margin: "0px 5px"}}>Reset</button>
    </div>

    <div style={{margin: "20px 0px", display: "flex", justifyContent: "center", alignItems: "center"}}>

      <input 
      style={{width: "100px", border: "1px solid white", marginLeft: "25px", padding: "5px 10px", borderRadius: "5px"}} 
      value={countToSet}
      onChange={(event) => setCountToSet(Number(event.target.value))} 
      type="text" />

      <button 
      style={{height: "32px", marginLeft: "10px", display: "flex", alignItems: "center"}}
      onClick={() => {
        setCount(countToSet);
        setCountToSet(0);
      }}
      >Set to {countToSet}</button>

    </div>
    </>
  )
}

export default App