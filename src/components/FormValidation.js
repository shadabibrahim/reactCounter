import React, { useState } from "react";

const FormValidation = () => {
    const [user,setUser] = useState({name:"",email:"",password:"",confirmPassword:""});
    const {name,email,password,confirmPassword} = user;

    function updateUser(){

    }
    return (
        <div>
            <h1>Form Validation</h1>
            <input type="text" placeholder="Name" 
                value={name} onChange={updateUser} name="name"
            /><br />
            <input type="email"  placeholder="Email"
                value={email} onChange={updateUser} name="email"
            /><br />
            <input type="password" placeholder="Password" 
                value={password} onChange={updateUser} name="password"
            /><br />
            <input type="password" placeholder="Confirm password" 
                value={confirmPassword} onChange={confirmPassword} name="confirmPassword"
            /><br />
            <button type="submit">Submit</button>

        </div>
    );
}

export default FormValidation;