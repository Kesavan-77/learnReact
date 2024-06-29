import React, { useState, useEffect } from "react";

export default function UseEffect() {

  const [num1, setNum1] = useState(1000);
  const [num2, setNum2] = useState(2000);

  useEffect(()=>{
    console.log("useEffect");
  },[num1])
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => setNum1((curr) => curr + 1)}> num1 </button>

      <h1>{num2}</h1>
      <button onClick={() => setNum2((curr) => curr + 1)}> num2 </button>
    </div>
  )
}
