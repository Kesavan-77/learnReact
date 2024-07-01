import React,{useState,useRef,useEffect} from 'react'

export default function UseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
      <button onClick={() => inputRef.current.focus()}>Focus the input</button>
    </div>
  );
}
