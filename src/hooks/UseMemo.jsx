import React, { useState, useMemo, useEffect } from 'react';

export default function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const [doubleNumber, setdoubleNumber] = useState(0);

    useEffect(()=>{
        slowFunction(number);
    },[number])

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setNumber(isNaN(value) ? 0 : value);
    };

    const handleToggleClick = (e) => {
        e.preventDefault();
        setDark((curr) => !curr);
    };

    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black',
        padding: '10px',
        marginTop: '10px',
    };

    return (
        <div style={themeStyles}>
            <form>
                <input type='number' value={number} onChange={handleInputChange} />
                <button onClick={handleToggleClick}>Toggle Button</button>
                <div>{doubleNumber}</div>
            </form>
        </div>
    );
}

function slowFunction(num) {
    console.log("running");
    for (let i = 0; i < 100000000; i++) {}
    return num * 2;
}
