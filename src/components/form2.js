import React,{useState} from "react";

const Form2 = ()=>{
    let [name,setName] = useState("");
    let [result,setResult]= useState("");

    function handleInput(e) {
        setName(e.target.value)
        setResult("");
      }
    function handleSubmit(e){
        e.preventDefault();
        setResult(name);
        setName("");
    }

    return(
        <div>
           <form>
                 <input type="text" placeholder="Enter Name" 
                  onChange={handleInput}
                  value={name}
                 />
                 <button onClick={handleSubmit} > Submit </button>
           </form>


           <p>{result}</p>
           
        </div>
    );
}

export default Form2;