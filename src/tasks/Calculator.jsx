import React, { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState('');

    const handleInput = (value) => {
        if (/[\/*\-+.]$/.test(input) && /[\/*\-+.]$/.test(value)) {
            return;
        }
        setInput((curr) => curr + value);
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calculator">
            <input
                type="text"
                className="calculator-screen"
                value={input || '0'}
                disabled
            />
            <div className="calculator-buttons">
                {['7', '8', '9', '/','4', '5', '6', '*','1', '2', '3', '-'].map((item) => (
                    <button key={item} className="btn" onClick={() => handleInput(item)}>
                        {item}
                    </button>
                ))}
                {['0', '.', '=', '+'].map((item) => (
                    <button
                        key={item}
                        className={`btn ${item === '=' ? 'equal' : 'operator'}`}
                        onClick={item === '=' ? handleCalculate : () => handleInput(item)}
                    >
                        {item}
                    </button>
                ))}
                <button className="btn clear" onClick={() => setInput('')}>
                    C
                </button>
            </div>
        </div>
    );
}
