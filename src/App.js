import React from "react"
import Counter from "./components/Counter";
import Object from "./components/Object";
import Form from "./components/form";
import Form2 from "./components/form2";
import FormValidation from "./components/FormValidation"

const App = () => {
    return (
        <div>
            <Counter />
            <br />
            <Object />
            <br />
            <br />
            <Form />
            <br />
            <Form2 />
            <br />
            <FormValidation />
        </div>
    );
}

export default App;