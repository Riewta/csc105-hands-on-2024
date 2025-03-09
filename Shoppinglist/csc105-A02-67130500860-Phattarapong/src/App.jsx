import React, { useState } from "react";
import './App.css';

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const addItem = () => {
        if (input.trim() === "") return;
        setItems([...items, { text: input, bought: false }]);
        setInput("");
    };

    const toggleBought = (index) => {
        const newItems = [...items];
        newItems[index].bought = !newItems[index].bought;
        setItems(newItems);
    };

    const removeItem = (index, e) => {
        e.stopPropagation();
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h2 className="title">Shopping List</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter item..."
                    className="input"
                />
                <button onClick={addItem} className="add-btn">Add</button>
            </div>
            <ul className="list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => toggleBought(index)}
                        className={`list-item ${item.bought ? "bought" : ""}`}
                    >
                        {item.text}
                        <button onClick={(e) => removeItem(index, e)} className="remove-btn">X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;