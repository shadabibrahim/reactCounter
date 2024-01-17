import React, { useState } from "react";

const Fruits = () => {
    const [fruitList, setFruitList] = useState(["Apple", "Mango", "Banana"]);
    const [newFruit, setNewFruit] = useState("");

    let addFruit = (e) => {
        e.preventDefault();
        setFruitList([...fruitList, newFruit])
        setNewFruit("");
    };


    return (
        <div>
            <h2>Understanding Array in useState</h2>
            <form onSubmit={addFruit}>
                <input type="text" placeholder="Enter fruit name"
                    onChange={(e) => setNewFruit(e.target.value)}
                    value={newFruit}
                />
                <button type="submit">Add Fruit</button>
            </form>

            <p>{fruitList.join(', ')}</p><br />
        </div>
    );
}
export default Fruits