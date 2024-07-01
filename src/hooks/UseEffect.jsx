import React, { useState, useEffect } from "react";

export default function UseEffect() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hii");
  });

  return <h1>I've rendered {count} times!</h1>;
}
