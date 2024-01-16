import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    // function handleInput(e) {
    //     setName(e.target.value);
    // }

    return (
        <div>
            <form>
                {/* <input type="text" placeholder="Enter full name"
                 onChange={handleInput}>
                 </input> */}
                <input type="text" placeholder="Enter full name"
                    onChange={(e)=>setName(e.target.value)}>
                </input>
                <p>{name}</p>
            </form>
        </div>
    );
}

export default Form;