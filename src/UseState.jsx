import React, { useState } from 'react'

export default function UseState() {

    const [val, setVal] = useState(1);

    const handleAdd = () =>{
        // setVal(val+1);
        setVal((currVal)=>{
            return currVal+1;
        })
    }
    return (
        <div>
            <h1>{val}</h1>
            <button onClick={handleAdd}>Add the value</button>
        </div>
    )
}

// //An simple outline for behind the scene useState
// function useState(){
//     let num;
//     function update(val){
//         num = val;
//     }
//     return [num,update]
// }

// console.log(useState()) //output:[ undefined, [Function: update] ]

//destructure return array for storing in seperate value
// const [val,setVal] = useState();

// console.log(val,setVal); //output: undefined [Function: update]