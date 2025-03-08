import { useState } from 'react';
import './App.css';

const Calculate = () => {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState(0);

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (!isNaN(parseFloat(value)) || value === '') {
            setInputValue(value);
        }
    };

    const add = () => {
        setResult(result + parseFloat(inputValue));
    };

    const subtract = () => {
        setResult(result - parseFloat(inputValue));
    };

    const multiply = () => {
        setResult(result * parseFloat(inputValue));
    };

    const divide = () => {
        setResult(result / parseFloat(inputValue));
    };

    const resetInput = () => {
        setInputValue('');
    };

    const resetResult = () => {
        setResult(0);
    };

    return (
        <div className="Calculate" >
            <div>Calculate</div>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter Number"
            />
            <div>
                <button onClick={add}>Add</button>
                <button onClick={subtract}>Subtract</button>
            </div>
            <div>
                <button onClick={multiply}>Multiply</button>
                <button onClick={divide}>Divide</button>
            </div>
            <div>
                <button onClick={resetInput}>Reset input</button>
                <button onClick={resetResult}>Reset result</button>
            </div>
            <div>Result: {result}</div>
        </div>
    );
};

export default Calculate;