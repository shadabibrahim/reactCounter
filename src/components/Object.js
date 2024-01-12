import React, { useState } from "react";

const Object = () => {
    const [coins, setCoins] = useState({ gold: 0, silver: 0, bronze: 0 });
    function increaseGold() {
        setCoins({
            gold: coins.gold + 1,
            silver: coins.silver,
            bronze: coins.bronze
        });

    }

    return (
        <div>
            <h1>Gold:{coins.gold} | Silver:{coins.silver} | Bronze:{coins.bronze}</h1>
            <button onClick={increaseGold}>Increase Gold</button>
            <button onClick={() => setCoins({ ...coins, silver: coins.silver + 1 })}>Increase Silver</button>
            <button onClick={() => setCoins({ ...coins, bronze: coins.bronze + 1 })}>Increase Bronze</button>
        </div>
    );
}
export default Object;