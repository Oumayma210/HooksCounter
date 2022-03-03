import React, { useState } from "react";
import Counter from "./Components/Counter";

function App() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };
    return (
        <div>
            <h1>Workshop Hooks F2</h1>
            <button onClick={handleClick}>toggel</button>
            {/* <button onClick={() => setShow(!show)}>toggel</button> */}
            {show && <Counter />}
        </div>
    );
}

export default App;
